import { collectionGen } from "../config/mongoConnect.js";

const user = await collectionGen('users');
const tradingAccount = await collectionGen('tradingAccounts');
const fee = await collectionGen('fee');

export const resetWeeklyTradingAccountStats = async () => {
    try {
        const dataUsers = await tradingAccount.find({}).toArray();

        const bulkUserPayOps = dataUsers.map(update => ({
            updateOne: {
                filter: { _id: update._id },
                update: { 
                    $set: { 
                        capitalOperativo: 0,
                        rentabilidadSemanal: 0, 
                        carteraDirecta: 0, 
                        carteraEquipo: 0, 
                        acumuladoCartera: 0, 
                        gananciaSemanal: 0, 
                        totalEquipo: 0 
                    } 
                }
            }
        }));

        await tradingAccount.bulkWrite(bulkUserPayOps);
    } catch (error) {
        console.error("Error resetting weekly trading account stats:", error);
        throw error;
    }
};

export const updateTradingAccountFromPendingFees = async () => {
    try {
        const dataFeesPending = await fee.find({ status: "pendiente" }).toArray();

        const bulkUserOps = dataFeesPending.map(fee => ({
            updateOne: {
                filter: { idTradingAccount: fee.idTradingAccount, idSuscription: fee.idSuscription },
                update: { 
                    $set: { 
                        capitalOperativo: (fee.equidad * 5), 
                        rentabilidadSemanal: (fee.fee * 2) 
                    },
                    $inc: { rentabilidadAcumulada: (fee.fee * 2) }
                }
            }
        }));

        await tradingAccount.bulkWrite(bulkUserOps);
    } catch (error) {
        console.error("Error updating trading accounts from pending fees:", error);
        throw error;
    }
};

export const updateUserReferralEarnings = async () => {
    try {
        const dataUserFinalTeam = await user.aggregate([
            {
                $match: { rol: "user" }
            },
            {
                $lookup: {
                    from: "tradingAccounts",
                    localField: "email",
                    foreignField: "email",
                    as: "tradingAccount"
                }
            },
            {
                $unwind: "$tradingAccount"
            }
        ]).toArray();

        for (let user of dataUserFinalTeam) {
            const totalFeeUser = (user.tradingAccount.rentabilidadSemanal / 2);
            const totalCartera = user.tradingAccount.capitalOperativo;
            await updateUserFeeAndReferidos(user.emailReferido, totalFeeUser, totalCartera);
        }
    } catch (error) {
        console.error("Error updating user referral earnings:", error);
        throw error;
    }
};

const updateUserFeeAndReferidos = async (emailReferido, amount, totalCartera) => {
    try {
        let currentEmail = emailReferido;
        let amountLevel = amount;
        let currentCartera = totalCartera;
        let bandera = totalCartera

        for (let level = 0; level < 3; level++) {
            if (level == 0) {
                amountLevel *= 0.60;
            } else if (level == 1) {
                amountLevel *= 0.28;
            } else {
                amountLevel *= 0.12;
            }

            if (currentEmail === "ailabsbypeacock@gmail.com") {
                const updateFields = {
                    $inc: { 
                        gananciaTotal: amountLevel, 
                        gananciaSemanal: amountLevel,
                    }
                };
                if (level == 0) {
                    updateFields.$inc.carteraDirecta = currentCartera;
                    bandera = 0;
                    await tradingAccount.updateOne({ email: currentEmail }, updateFields);
                } else if(level == 1) {
                    await tradingAccount.updateOne({ email: currentEmail }, updateFields);
                } else {
                    updateFields.$inc.carteraEquipo = bandera;
                    updateFields.$inc.acumuladoCartera = totalCartera;
                    updateFields.$inc.totalEquipo = 1;
                    await tradingAccount.updateOne({ email: currentEmail }, updateFields);
                }
                amountLevel = amount;
            } else {
                const userDataAggregation = await user.aggregate([
                    { $match: { email: currentEmail } },
                    {
                        $lookup: {
                            from: "tradingAccounts",
                            localField: "email",
                            foreignField: "email",
                            as: "tradingAccount"
                        }
                    },
                    { $unwind: "$tradingAccount" },
                    { $limit: 1 }
                ]).toArray();
                const userData = userDataAggregation[0];
                if (!userData) break;

                const updateFields = {
                    $inc: { 
                        gananciaTotal: amountLevel, 
                        gananciaSemanal: amountLevel, 
                        acumuladoCartera: currentCartera, 
                        totalEquipo: 1 
                    }
                };
                if (level == 0) {
                    updateFields.$inc.carteraDirecta = currentCartera;
                } else {
                    updateFields.$inc.carteraEquipo = currentCartera;
                }
                await tradingAccount.updateOne({ email: currentEmail }, updateFields);

                currentEmail = userData.emailReferido;
                currentCartera = userData.tradingAccount.capitalOperativo;
                amountLevel = amount;
            }
        }
    } catch (error) {
        console.error("Error updating user fee and referidos:", error);
        throw error;
    }
};

export const markFeesAsPaid = async () => {
    try {
        const dataFeesPending = await fee.find({ status: "pendiente" }).toArray();
        const datePago = new Date();

        const bulkFeeOps = dataFeesPending.map(fee => ({
            updateOne: {
                filter: { _id: fee._id },
                update: { 
                    $set: { 
                        status: "pagado", 
                        datePago: datePago 
                    } 
                }
            }
        }));

        await fee.bulkWrite(bulkFeeOps);
    } catch (error) {
        console.error("Error marking fees as paid:", error);
        throw error;
    }
};
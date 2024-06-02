use('aiLabs');
db.user.insertMany([
  {
    username: "lvillamizarmurillo",
    nombres: "Ludwing Santiago",
    apellidos: "Villamizar Murillo",
    email: "lvillamizarmurillo@gmail.com",
    password: "123",
    numero: "3042259419",
    emailReferido: "admin@gmail.com",
    status: "activo",
    idBinance: "131074772",
    totalFee: 0,
    totalReferidos: 0, 
    ultimoTeam: false,
    rol: "user",
    idTradingAccount: "00030019",
    idSuscription: "09009"
  },
  {
    username: "user1",
    nombres: "user1",
    apellidos: "user1",
    email: "user1@gmail.com",
    password: "123",
    numero: "3042259419",
    emailReferido: "lvillamizarmurillo@gmail.com",
    status: "activo",
    idBinance: "131074772",
    totalFee: 0,
    totalReferidos: 0, 
    ultimoTeam: false,
    rol: "user",
    idTradingAccount: "10030019",
    idSuscription: "19009"
  },
  {
    username: "user2",
    nombres: "user2",
    apellidos: "user2",
    email: "user2@gmail.com",
    password: "123",
    numero: "3042259419",
    emailReferido: "user1@gmail.com",
    status: "activo",
    idBinance: "131074772",
    totalFee: 0,
    totalReferidos: 0, 
    ultimoTeam: false,
    rol: "user",
    idTradingAccount: "20030019",
    idSuscription: "29009"
  },
  {
    username: "user3",
    nombres: "user3",
    apellidos: "user3",
    email: "user3@gmail.com",
    password: "123",
    numero: "3042259419",
    emailReferido: "user2@gmail.com",
    status: "activo",
    idBinance: "131074772",
    totalFee: 0,
    totalReferidos: 0, 
    ultimoTeam: false,
    rol: "user",
    idTradingAccount: "30030019",
    idSuscription: "39009"
  },
  {
    username: "user4",
    nombres: "user4",
    apellidos: "user4",
    email: "user4@gmail.com",
    password: "123",
    numero: "3042259419",
    emailReferido: "user3@gmail.com",
    status: "activo",
    idBinance: "131074772",
    totalFee: 0,
    totalReferidos: 0, 
    ultimoTeam: false,
    rol: "user",
    idTradingAccount: "40030019",
    idSuscription: "49009"
  },
  {
    username: "user5",
    nombres: "user5",
    apellidos: "user5",
    email: "user5@gmail.com",
    password: "123",
    numero: "3042259419",
    emailReferido: "user4@gmail.com",
    status: "activo",
    idBinance: "131074772",
    totalFee: 0,
    totalReferidos: 0, 
    ultimoTeam: false,
    rol: "user",
    idTradingAccount: "50030019",
    idSuscription: "59009"
  },
  {
    username: "user6",
    nombres: "user6",
    apellidos: "user6",
    email: "user6@gmail.com",
    password: "123",
    numero: "3042259419",
    emailReferido: "user5@gmail.com",
    status: "activo",
    idBinance: "131074772",
    totalFee: 0,
    totalReferidos: 0, 
    ultimoTeam: false,
    rol: "user",
    idTradingAccount: "60030019",
    idSuscription: "69009"
  },
  {
    username: "user7",
    nombres: "user7",
    apellidos: "user7",
    email: "user7@gmail.com",
    password: "123",
    numero: "3042259419",
    emailReferido: "user6@gmail.com",
    status: "activo",
    idBinance: "131074772",
    totalFee: 0,
    totalReferidos: 0, 
    ultimoTeam: true,
    rol: "user",
    idTradingAccount: "70030019",
    idSuscription: "79009"
  },
  {
    username: "user8",
    nombres: "user8",
    apellidos: "user8",
    email: "user8@gmail.com",
    password: "123",
    numero: "3042259419",
    emailReferido: "user6@gmail.com",
    status: "activo",
    idBinance: "131074772",
    totalFee: 500,
    totalReferidos: 0, 
    ultimoTeam: true,
    rol: "user",
    idTradingAccount: "80030019",
    idSuscription: "89009"
  },
  {
    username: "admin",
    nombres: "admin",
    apellidos: "admin",
    email: "admin@gmail.com",
    password: "123",
    numero: "3042259419",
    idBinance: "131074772",
    totalFee: 0,
    totalReferidos: 0,
    ultimoTeam: false,
    rol: "admin",
    idTradingAccount: "000030019",
    idSuscription: "009009"
  }
]);

use('aiLabs');
db.fee.insertMany([
  {
    idTradingAccount: "70030019",
    idSuscription: "79009",
    fee: 1000,
    date: "2024-05-30",
    status: "pendiente"
  },
  {
    idTradingAccount: "00030019",
    idSuscription: "09009",
    fee: 1000,
    date: "2024-05-29",
    status: "pendiente"
  },
  {
    idTradingAccount: "80030019",
    idSuscription: "89009",
    fee: 500,
    date: "2024-05-30",
    status: "pendiente"
  },
  {
    idTradingAccount: "10030019",
    idSuscription: "19009",
    fee: 1000,
    date: "2024-05-28",
    status: "pendiente"
  },
  {
    idTradingAccount: "20030019",
    idSuscription: "29009",
    fee: 1000,
    date: "2024-05-27",
    status: "pendiente"
  },
  {
    idTradingAccount: "30030019",
    idSuscription: "39009",
    fee: 1000,
    date: "2024-05-26",
    status: "pendiente"
  },
  {
    idTradingAccount: "40030019",
    idSuscription: "49009",
    fee: 1000,
    date: "2024-05-25",
    status: "pendiente"
  },
  {
    idTradingAccount: "50030019",
    idSuscription: "59009",
    fee: 1000,
    date: "2024-05-24",
    status: "pendiente"
  },
  {
    idTradingAccount: "60030019",
    idSuscription: "69009",
    fee: 1000,
    date: "2024-05-23",
    status: "pendiente"
  },
  {
    idTradingAccount: "60030019",
    idSuscription: "69009",
    fee: 1000,
    date: "2024-04-25",
    status: "pagado",
    datePago: "2024-04-27"
  }
]);
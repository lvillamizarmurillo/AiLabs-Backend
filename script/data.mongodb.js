use('aiLabs');
db.users.insertMany([
  {
    username: "MasterAccount",
    email: "ailabsbypeacock@gmail.com",
    password: "123",
    numero: "123456789",
    status: "activo",
    rol: "admin"
  },
  {
    username: "user1",
    nombres: "Nombre1",
    apellidos: "Apellido1",
    email: "user1@gmail.com",
    password: "123",
    numero: "123456789",
    emailReferido: "ailabsbypeacock@gmail.com",
    status: "activo",
    rol: "user"
  },
  {
    username: "user2",
    nombres: "Nombre2",
    apellidos: "Apellido2",
    email: "user2@gmail.com",
    password: "456",
    numero: "987654321",
    emailReferido: "user1@gmail.com",
    status: "activo",
    rol: "user"
  },
  {
    username: "user3",
    nombres: "Nombre3",
    apellidos: "Apellido3",
    email: "user3@gmail.com",
    password: "789",
    numero: "987123456",
    emailReferido: "user1@gmail.com", // Referido por user1 (user)
    status: "activo",
    rol: "user"
  },
  {
    username: "user4",
    nombres: "Nombre4",
    apellidos: "Apellido4",
    email: "user4@gmail.com",
    password: "abc",
    numero: "111222333",
    emailReferido: "user3@gmail.com", // Referido por user3 (user)
    status: "activo",
    rol: "user"
  },
  {
    username: "user5",
    nombres: "Nombre5",
    apellidos: "Apellido5",
    email: "user5@gmail.com",
    password: "def",
    numero: "444555666",
    emailReferido: "user2@gmail.com", // Referido por user2 (user)
    status: "activo",
    rol: "user"
  },
  {
    username: "user6",
    nombres: "Nombre6",
    apellidos: "Apellido6",
    email: "user6@gmail.com",
    password: "ghi",
    numero: "777888999",
    emailReferido: "user1@gmail.com", // Referido por user1 (user)
    status: "activo",
    rol: "user"
  },
  {
    username: "user7",
    nombres: "Nombre7",
    apellidos: "Apellido7",
    email: "user7@gmail.com",
    password: "jkl",
    numero: "1234567890",
    emailReferido: "user6@gmail.com", // Referido por Admin (admin)
    status: "activo",
    rol: "user"
  },
  {
    username: "user8",
    nombres: "Nombre8",
    apellidos: "Apellido8",
    email: "user8@gmail.com",
    password: "mno",
    numero: "0987654321",
    emailReferido: "user7@gmail.com", // Referido por user7 (user)
    status: "activo",
    rol: "user"
  },
  {
    username: "user9",
    nombres: "Nombre9",
    apellidos: "Apellido9",
    email: "user9@gmail.com",
    password: "mno",
    numero: "85412544",
    emailReferido: "user8@gmail.com", // Referido por user7 (user)
    status: "activo",
    rol: "user"
  }
]);

// Ajustar colección de wallets para los nuevos usuarios si es necesario
use('aiLabs');
db.wallets.insertMany([
  {
    email: "ailabsbypeacock@gmail.com",
    idBinance: "999909990",
    walletUSDTBEP20: "billeteraParaPagosAdmin1"
  },
  {
    email: "user1@gmail.com",
    idBinance: "999999999",
    walletUSDTBEP20: "billeteraParaPagosUser1"
  },
  {
    email: "user2@gmail.com",
    idBinance: "888888888",
    walletUSDTBEP20: "billeteraParaPagosUser2"
  },
  {
    email: "user3@gmail.com",
    idBinance: "777777777",
    walletUSDTBEP20: "billeteraParaPagosUser3"
  },
  {
    email: "user4@gmail.com",
    idBinance: "444444444",
    walletUSDTBEP20: "billeteraParaPagosUser4"
  },
  {
    email: "user5@gmail.com",
    idBinance: "555555555",
    walletUSDTBEP20: "billeteraParaPagosUser5"
  },
  {
    email: "user6@gmail.com",
    idBinance: "666666666",
    walletUSDTBEP20: "billeteraParaPagosUser6"
  },
  {
    email: "user7@gmail.com",
    idBinance: "777777777",
    walletUSDTBEP20: "billeteraParaPagosUser7"
  },
  {
    email: "user8@gmail.com",
    idBinance: "888888888",
    walletUSDTBEP20: "billeteraParaPagosUser8"
  },
  {
    email: "user9@gmail.com",
    idBinance: "888888889",
    walletUSDTBEP20: "billeteraParaPagosUser9"
  }
]);

// Ajustar colección de cuentas de trading para los nuevos usuarios si es necesario
use('aiLabs');
db.tradingAccounts.insertMany([
  {
    email: "ailabsbypeacock@gmail.com",
    idTradingAccount: "11101110",
    idSuscription: "1100",
    capitalOperativo: 1000,
    rentabilidadSemanal: 200,
    rentabilidadAcumulada: 200,
    carteraDirecta: 0,
    carteraEquipo: 0,
    acumuladoCartera: 0,
    gananciaSemanal: 0,
    gananciaTotal: 0,
    totalEquipo: 0
  },
  {
    email: "user1@gmail.com",
    idTradingAccount: "11111111",
    idSuscription: "111",
    capitalOperativo: 1000,
    rentabilidadSemanal: 200,
    rentabilidadAcumulada: 200,
    carteraDirecta: 0,
    carteraEquipo: 0,
    acumuladoCartera: 0,
    gananciaSemanal: 0,
    gananciaTotal: 0,
    totalEquipo: 4
  },
  {
    email: "user2@gmail.com",
    idTradingAccount: "22222222",
    idSuscription: "222",
    capitalOperativo: 1000,
    rentabilidadSemanal: 200,
    rentabilidadAcumulada: 200,
    carteraDirecta: 0,
    carteraEquipo: 0,
    acumuladoCartera: 0,
    gananciaSemanal: 0,
    gananciaTotal: 0,
    totalEquipo: 1
  },
  {
    email: "user3@gmail.com",
    idTradingAccount: "33333333",
    idSuscription: "333",
    capitalOperativo: 1000,
    rentabilidadSemanal: 200,
    rentabilidadAcumulada: 200,
    carteraDirecta: 0,
    carteraEquipo: 0,
    acumuladoCartera: 0,
    gananciaSemanal: 0,
    gananciaTotal: 0,
    totalEquipo: 1
  },
  {
    email: "user4@gmail.com",
    idTradingAccount: "44444444",
    idSuscription: "444",
    capitalOperativo: 1000,
    rentabilidadSemanal: 200,
    rentabilidadAcumulada: 200,
    carteraDirecta: 0,
    carteraEquipo: 0,
    acumuladoCartera: 0,
    gananciaSemanal: 0,
    gananciaTotal: 0,
    totalEquipo: 0
  },
  {
    email: "user5@gmail.com",
    idTradingAccount: "55555555",
    idSuscription: "555",
    capitalOperativo: 1000,
    rentabilidadSemanal: 200,
    rentabilidadAcumulada: 200,
    carteraDirecta: 0,
    carteraEquipo: 0,
    acumuladoCartera: 0,
    gananciaSemanal: 0,
    gananciaTotal: 0,
    totalEquipo: 0
  },
  {
    email: "user6@gmail.com",
    idTradingAccount: "66666666",
    idSuscription: "666",
    capitalOperativo: 1000,
    rentabilidadSemanal: 200,
    rentabilidadAcumulada: 200,
    carteraDirecta: 0,
    carteraEquipo: 0,
    acumuladoCartera: 0,
    gananciaSemanal: 0,
    gananciaTotal: 0,
    totalEquipo: 1
  },
  {
    email: "user7@gmail.com",
    idTradingAccount: "77777777",
    idSuscription: "777",
    capitalOperativo: 1000,
    rentabilidadSemanal: 200,
    rentabilidadAcumulada: 200,
    carteraDirecta: 0,
    carteraEquipo: 0,
    acumuladoCartera: 0,
    gananciaSemanal: 0,
    gananciaTotal: 0,
    totalEquipo: 1
  },
  {
    email: "user8@gmail.com",
    idTradingAccount: "88888888",
    idSuscription: "888",
    capitalOperativo: 1000,
    rentabilidadSemanal: 200,
    rentabilidadAcumulada: 200,
    carteraDirecta: 0,
    carteraEquipo: 0,
    acumuladoCartera: 0,
    gananciaSemanal: 0,
    gananciaTotal: 0,
    totalEquipo: 0
  },
  {
    email: "user9@gmail.com",
    idTradingAccount: "88888899",
    idSuscription: "899",
    capitalOperativo: 1000,
    rentabilidadSemanal: 200,
    rentabilidadAcumulada: 200,
    carteraDirecta: 0,
    carteraEquipo: 0,
    acumuladoCartera: 0,
    gananciaSemanal: 0,
    gananciaTotal: 0,
    totalEquipo: 0
  }
]);

use('aiLabs');
db.fee.insertMany([
  {
    idTradingAccount: "11111111",
    idSuscription: "111",
    fee: 200,
    equidad: 400,
    date: new Date(),
    status: "pendiente"
  },
  {
    idTradingAccount: "22222222",
    idSuscription: "222",
    fee: 300,
    equidad: 500,
    date: new Date(),
    status: "pendiente"
  },
  {
    idTradingAccount: "33333333",
    idSuscription: "333",
    fee: 100,
    equidad: 200,
    date: new Date(),
    status: "pendiente"
  },
  {
    idTradingAccount: "44444444",
    idSuscription: "444",
    fee: 100,
    equidad: 200,
    date: new Date(),
    status: "pendiente"
  },
  {
    idTradingAccount: "55555555",
    idSuscription: "555",
    fee: 100,
    equidad: 200,
    date: new Date(),
    status: "pendiente"
  },
  {
    idTradingAccount: "66666666",
    idSuscription: "666",
    fee: 100,
    equidad: 200,
    date: new Date(),
    status: "pendiente"
  },
  {
    idTradingAccount: "77777777",
    idSuscription: "777",
    fee: 100,
    equidad: 200,
    date: new Date(),
    status: "pendiente"
  },
  {
    idTradingAccount: "88888888",
    idSuscription: "888",
    fee: 0,
    equidad: 0,
    date: new Date(),
    status: "pendiente"
  },
  {
    idTradingAccount: "88888899",
    idSuscription: "899",
    fee: 300,
    equidad: 800,
    date: new Date(),
    status: "pendiente"
  }
]);

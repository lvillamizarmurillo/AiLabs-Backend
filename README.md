# Ai-Labs

Descripción que luego se implementara.

## Próximos Pasos



El desarrollo del frontend de Ai-Labs está en curso, y próximamente se integrarán más funcionalidades. Esto incluirá la interacción con los endpoints del backend para lograr una experiencia completa de usuario.

Para obtener información adicional sobre los endpoints y cómo consumirlos desde el frontend, consulta la documentación del proyecto que estará disponible próximamente.

¡Gracias por interesarte en Ai-Labs! Esperamos que esta plataforma sea una fuente valiosa de conocimiento y aprendizaje en línea. Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros.



## Necesario para probar el backend



1.Se instalan las dependencias del package.json con el siguiente comando:

```
npm i
```



1. Se debe poner en la variable .env.example, luego renombrarlo unicamente como .env

```
HOST = "localhost"
PORT_BACKEND = 5005
HOST_FRONTEND = "localhost"
PORT_FRONTEND = 5004
MONGO_CONNECT = ""
JWT_LOGIN = "tokenperzonalizado"
```



1. Para correr el servidor se usa el comando:

```
npm run start
```



# MongoDb



Antes de iniciar, debe por el documento que hay en scrips ejecutar lo siguiente:

```
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
    date: new Date("2024-05-30"),
    status: "pendiente"
  },
  {
    idTradingAccount: "00030019",
    idSuscription: "09009",
    fee: 1000,
    date: new Date("2024-05-29"),
    status: "pendiente"
  },
  {
    idTradingAccount: "80030019",
    idSuscription: "89009",
    fee: 500,
    date: new Date("2024-05-30"),
    status: "pendiente"
  },
  {
    idTradingAccount: "10030019",
    idSuscription: "19009",
    fee: 1000,
    date: new Date("2024-05-28"),
    status: "pendiente"
  },
  {
    idTradingAccount: "20030019",
    idSuscription: "29009",
    fee: 1000,
    date: new Date("2024-05-27"),
    status: "pendiente"
  },
  {
    idTradingAccount: "30030019",
    idSuscription: "39009",
    fee: 1000,
    date: new Date("2024-05-26"),
    status: "pendiente"
  },
  {
    idTradingAccount: "40030019",
    idSuscription: "49009",
    fee: 1000,
    date: new Date("2024-05-25"),
    status: "pendiente"
  },
  {
    idTradingAccount: "50030019",
    idSuscription: "59009",
    fee: 1000,
    date: new Date("2024-05-24"),
    status: "pendiente"
  },
  {
    idTradingAccount: "60030019",
    idSuscription: "69009",
    fee: 1000,
    date: new Date("2024-05-23"),
    status: "pendiente"
  },
  {
    idTradingAccount: "60030019",
    idSuscription: "69009",
    fee: 1000,
    date: new Date("2024-04-25"),
    status: "pagado",
    datePago: new Date("2024-04-27")
  }
]);
```



## Uso



Para cualquier consulta se debe loguear con el siguiente usuario:

Post

version: 1.0.0

```
http://localhost:5005/ai-labs/login
```



Seguido en el body colocar el siguiente usuario,( Este es usuario para usar los endpoints de admin, tienes que registrarte con un rol de admin, sigue la documentacion que al llegar a esos endpoints, se facilita por este readme las credenciales de admin )

```
{
  "email": "user1@gmail.com",
  "password": "123"
}
```



Luego el token generado se debera colocar en Auth/BearerToken

Ej:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbCI6ImFkbWluIiwidWx0aW1vVGVhbSI6ZmFsc2UsImlhdCI6MTcxNzM3MzcxNSwiZXhwIjoxNzE3Mzg0NTE1fQ.eASIh_plWzYFG4twwfDSgegH0fOBMWE1FI5SRNWFUks
```



O en headers colocar Authorization seguido de Bearer (token)

Ej:

```
Authorization:   Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ...
```



# Consultas User



1. Traer la info del perfil de usuario:

version: 1.0.0

Get

```
http://localhost:5005/ai-labs/user
```



2. Traer el link para referir a un usuario a tu primer nivel (ten en cuenta que tiene 8 horas antes que expire el link, este se debe colocar con la url del frontend al momento de registrarlo, ej: http://hostFrontend:portFrontend/token):

version: 1.0.1

Get

```
http://localhost:5005/ai-labs/user
```

3. Registrar un nuevo usuario(se debe haber obtenido el token del endpoint anterior ya que se pasa por la url):

version: 1.0.0

POST

```
http://localhost:5005/ai-labs/registro/token
```

Datos por req.body, copia y pega en el req.body:

```
{
  "username": "user10",
  "nombres": "user10",
  "apellidos": "user10",
  "email": "user10@gmail.com",
  "password": "123",
  "numero": "52487523",
  "idBinance": "854682572"
}
```



4. Logueate con el ussuario que acabamos de crear para este endpoint, ya que por defecto un usuario nuevo esta inactivo hasta que proporcione los siguientes datos:

version: 1.0.0

POST

```
http://localhost:5005/ai-labs/user
```

Datos por req.body, copia y pega en el req.body:

```
{
  "idTradingAccount": "82468503",
  "idSuscription": "39217"
}
```

5. Actualiza la password del usuario:

version: 1.0.0

PUT

```
http://localhost:5005/ai-labs/user
```

Datos por req.body, copia y pega en el req.body:

```
{
  "password": "321"
}
```

6. Actualiza el id de binance del usuario:

version: 1.0.1

PUT

```
http://localhost:5005/ai-labs/user
```

Datos por req.body, copia y pega en el req.body:

```
{
  "idBinance": "854682572"
}
```

7. Actualiza los id de trading y suscription del usuario(este es importante que este bien para ver los pagos, aunque este mal, no se pierden los pagos, pero la idea es que este bien obviamente para que se le pueda pagar con normalidad):

version: 1.0.2

PUT

```
http://localhost:5005/ai-labs/user
```

Datos por req.body, copia y pega en el req.body:

```
{
  "idTradingAccount": "82468503",
  "idSuscription": "39217"
}
```

8. Actualiza los datos personales del usuario:

version: 1.0.3

PUT

```
http://localhost:5005/ai-labs/user
```

Datos por req.body, copia y pega en el req.body:

```
{
  "nombres": "user10",
  "apellidos": "user10"
  "numero": "3042259519",
}
```



<details class="details-reset details-overlay details-overlay-dark " style="box-sizing: border-box; display: block; color: rgb(230, 237, 243); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(13, 17, 23); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary class="float-right" role="button" style="box-sizing: border-box; display: list-item; cursor: pointer; float: right !important; list-style: none; transition: color 80ms cubic-bezier(0.33, 1, 0.68, 1) 0s, background-color, box-shadow, border-color;"><div class="Link--secondary pt-1 pl-2" style="box-sizing: border-box; padding-top: var(--base-size-4, 4px) !important; padding-left: var(--base-size-8, 8px) !important; color: var(--fgColor-muted) !important;"><svg aria-label="Edit repository metadata" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gear float-right"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg></div></summary></details>

# Consultas Admin

Para cualquier consulta se debe loguear con el siguiente usuario:

Post

version: 1.0.0

```
http://localhost:5005/ai-labs/login
```

Si seguiste el paso a paso, este es el usuer admin:

```
{
  "email": "admin@gmail.com",
  "password": "123"
}
```



1. Traer la info de todos los usuarios:

version: 1.0.0

Get

```
http://localhost:5005/ai-labs/admin
```



2. Traer todos los fees resgistrados hasta el moment (fee una vez se registra queda en estado pendiente, cuando se pagan los fees a los usuarios, quedan en estado pagado y se genera una fecha de cuando se paso el fee a los usuarios):

version: 1.0.1

Get

```
http://localhost:5005/ai-labs/admin
```

3. Traer todos los fees pendientes:

version: 1.0.2

Get

```
http://localhost:5005/ai-labs/admin
```



4. Traer todos los fees pagados:

version: 1.0.3

Get

```
http://localhost:5005/ai-labs/admin
```



5. Trae todos los fees sobre una fecha de inicio y de fin para que traiga los fees pendientes y pagados que esten dentro de este rango:

version: 1.0.0

POST

```
http://localhost:5005/ai-labs/admin
```

Datos por req.body, copia y pega en el req.body:

```
{
  "dateStart": "2024-05-28",
  "dateEnd": "2024-05-30"
}
```

6. Trae todos los fees pendientes sobre una fecha de inicio y de fin para que traiga los fees que esten dentro de este rango:

version: 1.0.1

POST

```
http://localhost:5005/ai-labs/admin
```

Datos por req.body, copia y pega en el req.body:

```
{
  "dateStart": "2024-05-28",
  "dateEnd": "2024-05-30"
}
```

7. Trae todos los fees pagados sobre una fecha de inicio y de fin para que traiga los fees que esten dentro de este rango:

version: 1.0.2

POST

```
http://localhost:5005/ai-labs/admin
```

Datos por req.body, copia y pega en el req.body:

```
{
  "dateStart": "2024-04-01",
  "dateEnd": "2024-04-30"
}
```

8. Registrar un nuevos fees, se pueden varios, estos son con lo que se calculan los pagos, entonces tener en cuanta que los datos si correspondan a los de un usuario:

version: 1.0.3

POST 

```
http://localhost:5005/ai-labs/admin
```

Datos por req.body, copia y pega en el req.body:

```
{
  "fees": [{"idTradingAccount": "82468503", "idSuscription": "39217", "fee": 500, "date": "2024-06-01","status": "pendiente"},{"idTradingAccount": "82468503", "idSuscription": "39217", "fee": 500, "date": "2024-06-02","status": "pendiente"}]
}
```



9. Este endpoint es para poner todos los fees en estado pendiente y actualizarlos con los datos de los usuarios, es decir que para cerrar facturacion primero va este endpoint:

version: 1.0.4

POST

```
http://localhost:5005/ai-labs/admin
```



10. Una vez actualizado los fees en cada usuario, con este endpoint se hace el calculo de cuanto le toca a cada persona en los 5 niveles, se hace el calculo para todos los usuarios en la base de datos, una vez termines puedes usar el primer endpoint y en totalReferidos estara el total que le corresponde a cada usuario por sus 5 niveles:

version: 1.0.5

POST

```
http://localhost:5005/ai-labs/admin
```



11. Actualiza el totalReferidos a 0 automaticamente, esto se hace cuando ya se le pago la parte correspondiente a cada usuario por sepárado, se borra para reiniciar el ciclo nuevamente de facturacion, el historial quedaria en la coleccion de fees con los extractos en estado pagado y el dia que se realizo el pago:

version: 1.0.6

POST

```
http://localhost:5005/ai-labs/admin
```



12. Elimina un fee, ya sea porque se digito mal o porque se necesite borrar, puedes coger el _id de cualquier fee del los endpoints de get:

version: 1.0.0

DELETE

```
http://localhost:5005/ai-labs/admin
```

Datos por req.body, copia y pega en el req.body(este es un ejemplo no funcional, ya que tienes que buscar en los primeros gets el _id de un fee ya que este cambia cada vez que ejecutes el script de mongo):

```
{
  "idFee": "665c8513ef047abaa5a309e4"
}
```


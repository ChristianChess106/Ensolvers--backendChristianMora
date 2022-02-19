# RESTSERVER Basico

REST server basado en Clases, no olvidar ejecutar ```npm install``` para reconstruir módulos de Node y ```node app.js``` para iniciar la aplicación.
Es necesario contar con una  ```instancia de mysql``` para que el programa funcione, ya que esta pensado para que cree la base de datos a traves de ella misma en el archivo ```db/conection.js```, y este estuvo pensado para funcionar en el ```puerto 8082```, para cambiarlo ir a archivo ```.env``` y cambiarlo tanto en el backend como frontend, hecho todo esto colocar en el navegador ```http://localhost:{#puerto}/``` y podra ver la TodoApp. Una vez es creada la base de datos, se creara la tabla de todo(Cosas por hacer) la cual tendra su modelo propio para asi ser manejada de manera mas agil a traves de los controladores de express, una vez configurado las rutas y controladores se empieza con el frontend.
Las herramientas que se utilizaron en el BackendEnd fueron, ```Node,Nodemon v2.0.13,Cors v2.8.5,express v4.17.1,dotenv v10.0.0,Sequelize v6.16.1, mysql2v2.3.3```.
Las herrmaientas que se utilizaron en el FrontEnd fueron ```React v17.0.2,React-redux v7.2.6,Redux v7.2.6,Bootstrap v5,ReactModal 3.14.4,SweetAlert v11.4.0```
Aqui Puedes observar el Frontend realizado https://github.com/ChristianChess106/Ensolvers-Frontend-Task

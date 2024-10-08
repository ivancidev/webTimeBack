## Configuración del entorno

**Paso 1:** Crear un archivo `.env` en la raíz del proyecto.

**Paso 2:** Copiar y pegar el siguiente código dentro del archivo `.env`

```
  PORT=
  DB_HOST=
  DB_USER=
  DB_PASSWORD=
  DB_NAME=
  DB_PORT=
```


**Paso 3:** Modificar los valores  
Asegúrate de modificar los valores según tu entorno:

- **PORT**: El puerto en el que correrá la aplicación.  
- **DB_HOST**: La dirección del servidor de la base de datos.  
- **DB_USER**: El usuario de la base de datos.  
- **DB_PASSWORD**: La contraseña del usuario.  
- **DB_NAME**: El nombre de la base de datos.  
- **DB_PORT**: El puerto de la base de datos (por defecto 5432 en PostgreSQL).

**Paso 4:** Instalar dependencias  
Ejecuta el siguiente comando para instalar las dependencias:

```
npm install
```

**Correr:**

```
npm start
```



#  Pasos para bajar la BD
Abrir la carpeta bdBackup, adentro hay un archivo llamado pgwebTime
## DESPUES MIRAR ESTE VIDEO
- https://www.youtube.com/watch?v=icEvkyIXqug
### Usaremos de esta manera cuando modifiquemos o hagamos algo a la bd, eso ya agarra todos los registros y demas


## Sql para volver autoincremental una tabla
- CREATE SEQUENCE libro_codLibro_seq START WITH 1 INCREMENT BY 1 OWNED BY libro."codLibro";
- ALTER TABLE libro ALTER COLUMN "codLibro" SET DEFAULT nextval('libro_codLibro_seq');


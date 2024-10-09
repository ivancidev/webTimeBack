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

**Correr la aplicación:**

```
npm start
```

## Configuración de la base de datos PostgreSQL

**Paso 1:** Instalar PostgreSQL  
Para empezar, asegúrate de tener PostgreSQL instalado en tu máquina. Puedes descargarlo desde [aquí](https://www.postgresql.org/download/).

**Paso 2:** Abrir pgAdmin 
Después de instalar PostgreSQL, abre **pgAdmin**, la herramienta gráfica para gestionar tu base de datos.

**Paso 3:** Crear una nueva base de datos  
- Abre pgAdmin e inicia sesión.  
- Haz clic derecho sobre **Databases** y selecciona **Create > Database**.  
- Ingresa el nombre de la base de datos, que debe coincidir con el valor configurado en el archivo `.env` (`DB_NAME`).

**Paso 4:** Restaurar la base de datos desde el archivo de backup  
- Dirígete a la carpeta `bdBackup` del proyecto. Allí encontrarás un archivo llamado `pgwebTime.sql` que contiene la copia de seguridad de la base de datos.  
- En pgAdmin, haz clic derecho sobre tu base de datos y selecciona **Restore**.  
- Selecciona el archivo `pgwebTime.sql` para restaurar la base de datos.

**Paso 5:** Verificar la restauración  
- Una vez que la restauración esté completa, verifica que todas las tablas y datos estén disponibles en tu base de datos.

## SQL para hacer autoincremental una columna

- **Paso 1:** Ejecutar los siguientes comandos SQL en pgAdmin para hacer que la columna `codLibro` de la tabla `libro` sea autoincremental:

```
CREATE SEQUENCE libro_codLibro_seq START WITH 1 INCREMENT BY 1 OWNED BY libro."codLibro";
ALTER TABLE libro ALTER COLUMN "codLibro" SET DEFAULT nextval('libro_codLibro_seq');
```

## Vídeo de referencia para la restauración de la base de datos

Después de seguir los pasos anteriores, puedes ver este video para más detalles sobre cómo restaurar la base de datos:  
- [Video de referencia](https://www.youtube.com/watch?v=icEvkyIXqug)

### Nota
Este procedimiento debe realizarse siempre que se hagan modificaciones a la estructura de la base de datos para asegurar que todas las actualizaciones se reflejen correctamente.

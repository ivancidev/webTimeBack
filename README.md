#  Pasos para bajar la BD
Abrir la carpeta bdBackup, adentro hay un archivo llamado pgwebTime
## DESPUES MIRAR ESTE VIDEO
- https://www.youtube.com/watch?v=icEvkyIXqug
### Usaremos de esta manera cuando modifiquemos o hagamos algo a la bd, eso ya agarra todos los registros y demas


## Sql para volver autoincremental una tabla
- CREATE SEQUENCE libro_codLibro_seq START WITH 1 INCREMENT BY 1 OWNED BY libro."codLibro";
- ALTER TABLE libro ALTER COLUMN "codLibro" SET DEFAULT nextval('libro_codLibro_seq');

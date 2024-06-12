# **Proyecto SID II**

### **MongoDB - BD No Relacional**
  - **Ciudad y Lugar**: Decidimos embeber estos dos objetos en las colecciones necesarias, pues cada documento de estas colecciones posee solo un objeto de Ciudad y/o Lugar (muy poca cantidad), el cual es prácticamente definitivo, por lo que no se editará en un futuro.
  
  - **Personas**: Analizando vimos que tanto los asistentes como los conferencistas poseen los mismos atributos. Por tanto, creemos que la mejor solución es crear una sola colección para ambas y que la distinción de entre si es un conferencista o un asistente sea definida por la colección de 'Eventos' (con array de referencia a asistentes y con array de referencia a conferencistas).

  - **Eventos**: Decidimos que 'asistentes' y 'conferencistas' sean un array (por separado) de Foreign Keys que hacen referencia a documentos de la colección 'Personas', pues pueden llegar a ser muchos asistentes y/o conferencistas, los cuales pueden sufrir distintas modificaciones. Por otro lado, 'facultades_organizadoras' son un array de Foreign Keys, ya que hacen referencia a los objetos de la tabla 'Facultades'.

  - **Comentarios**: Decidimos crear una colección propia de comentarios, pues cada uno de estos documentos se relaciona con un documento de 'Personas' y con un documento de 'Eventos'. Así pues, por esa misma razón, 'Comentarios' posee una Foreign Key que referencia tanto al documento de 'Personas' como al de 'Eventos'.

  ![Schema MongoDB](https://github.com/JuanJoseLL/sid-project/raw/relational%26norelational-db/doc/schemas/mongodb/schemamongodb.png)

### **Oracle - BD Relacional**
Realizamos la base de datos relacional en Oracle, a través de SQLDeveloper, utilizando los usuarios (P09779_1_2) y el nombre del servicio (ESTUD) dados. Así, fue necesario modificar los scripts de creación de tablas y de inserción, pues Oracle crea un esquema automático para cada usuario (cuyo nombre es el nombre del usuario):

- **Creación**
  ```
  -- No es necesario crear el schema en Oracle, ya que se usa el esquema del usuario actual
  
  CREATE TABLE P09779_1_2.AREAS
  (
    codigo            INTEGER NOT NULL ,
    nombre            VARCHAR2(40) NOT NULL ,
    codigo_facultad INTEGER NOT NULL ,
    id_coordinador    VARCHAR2(15) NOT NULL
  )
   ;
  CREATE UNIQUE INDEX AREAS__IDX ON P09779_1_2.AREAS
  (
    id_coordinador ASC
  )
  ;

  ALTER TABLE P09779_1_2.AREAS ADD CONSTRAINT AREAS_PK PRIMARY KEY ( codigo ) ;
  
  CREATE TABLE P09779_1_2.CIUDADES
  (
    codigo   INTEGER NOT NULL ,
    nombre   VARCHAR2(20) NOT NULL ,
    cod_dpto INTEGER NOT NULL
  )
   ;

  ALTER TABLE P09779_1_2.CIUDADES ADD CONSTRAINT CIUDADES_PK PRIMARY KEY ( codigo ) ;

  CREATE TABLE P09779_1_2.DEPARTAMENTOS
  (
    codigo   INTEGER NOT NULL ,
    nombre   VARCHAR2(20) NOT NULL ,
    cod_pais INTEGER NOT NULL
  )
   ;

  ALTER TABLE P09779_1_2.DEPARTAMENTOS ADD CONSTRAINT DEPARTAMENTOS_PK PRIMARY KEY ( codigo ) ;

  CREATE TABLE P09779_1_2.EMPLEADOS
  (
    identificacion    VARCHAR2(15) NOT NULL ,
    nombres           VARCHAR2(30) NOT NULL ,
    apellidos         VARCHAR2(30) NOT NULL ,
    email             VARCHAR2(40) NOT NULL ,
    tipo_contratacion VARCHAR2(30) NOT NULL ,
    tipo_empleado     VARCHAR2(30) NOT NULL ,
    cod_facultad      INTEGER NOT NULL ,
    codigo_sede       INTEGER NOT NULL ,
    lugar_nacimiento  INTEGER NOT NULL
  )
   ;

  ALTER TABLE P09779_1_2.EMPLEADOS ADD CONSTRAINT EMPLEADOS_PK PRIMARY KEY ( identificacion ) ;

  CREATE TABLE P09779_1_2.FACULTADES
  (
    codigo       INTEGER NOT NULL ,
    nombre       VARCHAR2(30) NOT NULL ,
    ubicacion    VARCHAR2(15) NOT NULL ,
    nro_telefono VARCHAR2(15) NOT NULL ,
    id_decano    VARCHAR2(15)
  )
   ;

  CREATE UNIQUE INDEX FACULTADES__IDX ON P09779_1_2.FACULTADES
  (
    id_decano ASC
  )
  ;

  ALTER TABLE P09779_1_2.FACULTADES ADD CONSTRAINT FACULTADES_PK PRIMARY KEY ( codigo ) ;

  CREATE TABLE P09779_1_2.PAISES
  (
    codigo INTEGER NOT NULL ,
    nombre VARCHAR2(20) NOT NULL
  )
   ;

  ALTER TABLE P09779_1_2.PAISES ADD CONSTRAINT PAISES_PK PRIMARY KEY ( codigo ) ;

  CREATE TABLE P09779_1_2.PROGRAMAS
  (
    codigo       INTEGER NOT NULL ,
    nombre       VARCHAR2(40) NOT NULL ,
    codigo_area INTEGER NOT NULL
  )
   ;

  ALTER TABLE P09779_1_2.PROGRAMAS ADD CONSTRAINT PROGRAMAS_PK PRIMARY KEY ( codigo ) ;

  CREATE TABLE P09779_1_2.SEDES
  (
    codigo        INTEGER NOT NULL ,
    nombre        VARCHAR2(20) ,
    cod_ciudad INTEGER NOT NULL
  )
   ;

  ALTER TABLE P09779_1_2.SEDES ADD CONSTRAINT SEDES_PK PRIMARY KEY ( codigo ) ;

  CREATE TABLE P09779_1_2.TIPOS_CONTRATACION
  ( nombre VARCHAR2(30) NOT NULL
  )  ;

  ALTER TABLE P09779_1_2.TIPOS_CONTRATACION ADD CONSTRAINT TIPOS_CONTRATACION_PK PRIMARY KEY ( nombre ) ;

  CREATE TABLE P09779_1_2.TIPOS_EMPLEADO
  ( nombre VARCHAR2(30) NOT NULL
  )  ;

  ALTER TABLE P09779_1_2.TIPOS_EMPLEADO ADD CONSTRAINT TIPOS_EMPLEADO_PK PRIMARY KEY ( nombre ) ;

  ALTER TABLE P09779_1_2.AREAS ADD CONSTRAINT AREAS_EMPLEADOS_FK FOREIGN KEY ( id_coordinador ) REFERENCES P09779_1_2.EMPLEADOS ( identificacion ) ;
  
  ALTER TABLE P09779_1_2.AREAS ADD CONSTRAINT AREAS_FACULTADES_FK FOREIGN KEY ( codigo_facultad ) REFERENCES P09779_1_2.FACULTADES ( codigo ) ;
  
  ALTER TABLE P09779_1_2.CIUDADES ADD CONSTRAINT CIUDAD_DEPARTAMENTOS_FK FOREIGN KEY ( cod_dpto ) REFERENCES P09779_1_2.DEPARTAMENTOS ( codigo ) ;

  ALTER TABLE P09779_1_2.DEPARTAMENTOS ADD CONSTRAINT DEPARTAMENTOS_PAISES_FK FOREIGN KEY ( cod_pais ) REFERENCES P09779_1_2.PAISES ( codigo ) ;

  ALTER TABLE P09779_1_2.EMPLEADOS ADD CONSTRAINT EMPLEADOS_FACULTADES_FK FOREIGN KEY ( cod_facultad ) REFERENCES P09779_1_2.FACULTADES ( codigo ) ;

  ALTER TABLE P09779_1_2.EMPLEADOS ADD CONSTRAINT EMPLEADOS_CIUDADES_FK FOREIGN KEY ( lugar_nacimiento ) REFERENCES P09779_1_2.CIUDADES ( codigo ) ;

  ALTER TABLE P09779_1_2.EMPLEADOS ADD CONSTRAINT EMPLEADOS_SEDES_FK FOREIGN KEY ( codigo_sede ) REFERENCES P09779_1_2.SEDES ( codigo ) ;

  ALTER TABLE P09779_1_2.EMPLEADOS ADD CONSTRAINT EMP_TIPOS_CONTRATACION_FK FOREIGN KEY ( tipo_contratacion ) REFERENCES P09779_1_2.TIPOS_CONTRATACION ( nombre ) ;

  ALTER TABLE P09779_1_2.EMPLEADOS ADD CONSTRAINT EMPLEADOS_TIPOS_EMPLEADO_FK FOREIGN KEY ( tipo_empleado ) REFERENCES P09779_1_2.TIPOS_EMPLEADO ( nombre ) ;

  ALTER TABLE P09779_1_2.FACULTADES ADD CONSTRAINT FACULTADES_EMPLEADOS_FK FOREIGN KEY ( id_decano ) REFERENCES P09779_1_2.EMPLEADOS ( identificacion ) ;

  ALTER TABLE P09779_1_2.PROGRAMAS ADD CONSTRAINT PROGRAMAS_AREAS_FK FOREIGN KEY ( codigo_area) REFERENCES P09779_1_2.AREAS ( codigo ) ;

  ALTER TABLE P09779_1_2.SEDES ADD CONSTRAINT SEDES_CIUDADES_FK FOREIGN KEY ( cod_ciudad ) REFERENCES P09779_1_2.CIUDADES ( codigo ) ;

  ```


- **Datos (Inserción)**

  ```
  insert into P09779_1_2.PAISES (codigo, nombre) values (57, 'COLOMBIA');
  insert into P09779_1_2.DEPARTAMENTOS (codigo, nombre, cod_pais) values (76, 'VALLE DEL CAUCA', 57);
  insert into P09779_1_2.DEPARTAMENTOS (codigo, nombre, cod_pais) values (19, 'CAUCA', 57); 

  insert into P09779_1_2.CIUDADES (codigo, nombre, cod_dpto) values (76001, 'CALI', 76);
  insert into P09779_1_2.CIUDADES (codigo, nombre, cod_dpto) values (76364, 'JAMUNDI', 76);
  insert into P09779_1_2.CIUDADES (codigo, nombre, cod_dpto) values (19001, 'POPAYAN', 19); 

  insert into P09779_1_2.FACULTADES (codigo, nombre, ubicacion, nro_telefono) values (1, 'INGENIERIA', 'P38-203', '3197906');

  insert into P09779_1_2.SEDES (codigo, nombre, cod_ciudad) values (1, 'PANCE', 76001);

  insert into P09779_1_2.TIPOS_CONTRATACION (nombre) values ('PRESTACION DE SERVICIOS');
  insert into P09779_1_2.TIPOS_CONTRATACION (nombre) values ('CONTRATO A TERMINO INDEFINIDO');
  insert into P09779_1_2.TIPOS_CONTRATACION (nombre) values ('CONTRATO A TERMINO DEFINIDO');

  insert into P09779_1_2.TIPOS_EMPLEADO (nombre) values ('ADMINISTRATIVO');
  insert into P09779_1_2.TIPOS_EMPLEADO (nombre) values ('DOCENTE');

  insert into P09779_1_2.EMPLEADOS (identificacion, nombres, apellidos, email, tipo_contratacion, tipo_empleado, cod_facultad, codigo_sede, lugar_nacimiento) values (10, 'ROCIO', 'LOPEZ', 'RLOPEZ@U.EDU.CO', 'CONTRATO A TERMINO INDEFINIDO', 'ADMINISTRATIVO', 1, 1, 76364);
  insert into P09779_1_2.EMPLEADOS (identificacion, nombres, apellidos, email, tipo_contratacion, tipo_empleado, cod_facultad, codigo_sede, lugar_nacimiento) values (11, 'JOSE', 'JURADO', 'JJURADO@U.EDU.CO', 'CONTRATO A TERMINO INDEFINIDO', 'DOCENTE', 1, 1, 19001);

  insert into P09779_1_2.AREAS (codigo, nombre, codigo_facultad, id_coordinador) values (1, 'CSI', 1, 10); 

  insert into P09779_1_2.PROGRAMAS (codigo, nombre, codigo_area) values (15, 'INGENIERIA DE SISTEMAS', 1);

  ```

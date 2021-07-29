<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Ejercicios de diseño e implementación

    br
    .p-5.row.mt-5.caja_flotante_azul(data-aos="fade-up" style="background-color:#EFF8FE")
      .col-md-8
        p(data-aos="fade-left") El aprendizaje basado en problemas es una buena estrategia a seguir en este tipo de actividades, debido a que es el análisis de un problema el que da origen a un modelo de base de datos. Por lo tanto, se propondrán dos problemas a considerar, y en torno a ellos se va reforzando los conocimientos adquiridos a la vez que se va profundizando en algunos conceptos. Para lograrlo se toma como problema los casos comunes como lo son el análisis y diseño de un sistema de facturación en inventarios y un sistema para gestionar las matrículas de estudiantes en un instituto de formación técnica.

      .col-md-4
        figure
          img.image__1.imagen_flotante_animada(src="@/assets/curso/tema2/1.svg")

    br
    br
    .titulo-segundo#t_2_1.mt-5
      h2 2.1 Análisis y diseño sistema de facturación

    br
    .col-md-4.m-auto
      h4.text-center(data-aos="fade-up") Caso 1
      h5.text-center(data-aos="fade-up" style="border-bottom: 2px #4DD0E1 solid;padding-bottom: 7px;") Sistema de facturación

    br
    .mt-4.p-5(style="background-color:#FFF8E2")
      .text-center
        figure
          img.image_floating(src="@/assets/curso/tema2/2.svg" style="width:100px;display:inline;margin-top:-20rem;" data-aos="fade-in")

      p.mt-4(data-aos="fade-up") Suponga que lo contratan para diseñar una base de datos de una droguería, el objetivo principal es llevar las existencias de cada producto a la vez que se va facturando lo que se vende, también interesa la información de los clientes porque a futuro se quiere hacer campañas publicitarias de email marketing según los productos que cada cliente consume.

      p.mt-3 #[strong En una entrevista el cliente dijo que necesitaba algunos reportes como:]

      ul.lista-ul.mt-4.lista__1
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Artículo más vendido.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Artículos que más utilidades deja por unidad.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Empresa o persona que más factura (cantidad de factura).
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Empresa o persona que más factura (volumen de ventas en pesos).
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Productos sin existencia.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Entre otros.

      p.mt-4(data-aos="fade-up") También fijó los productos que se organizan por categoría porque le interesa saber el precio de compra y de venta, puesto que le permite saber qué descuento hacer a una factura.

      p.mt-3(data-aos="fade-up") El cliente le ofrece un modelo sobre cómo debe ser la factura, como se muestra en la siguiente figura.

      p.mt-5(data-aos="fade-up" style="border-left:4px #4DD0E1 solid;padding-left:10px;") #[strong Figura 1] Modelo de factura

      .col-md-8.m-auto.mt-5
        figure
          img.image_floating(src="@/assets/curso/tema2/3.svg" data-aos="fade-up")

    br
    .col-md-4.m-auto.mt-4
      h4.text-center(data-aos="fade-up" style="border-bottom: 2px #4DD0E1 solid;padding-bottom: 7px;") Análisis y diseño

    p.mt-4 Una buena forma de empezar el análisis es con el formato de la factura, se inicia revisando la cabecera de la factura.

    .mt-4.p-5(style="background-color:#FFF8E2")
      .col-md-8.m-auto
          figure
            img.image_floating(src="@/assets/curso/tema2/4.svg" data-aos="fade-up")

      p.mt-5(data-aos="fade-up") Un primer impulso puede hacer pensar que se debe crear una entidad para la compañía o empresa y pensar en definir una entidad o empresa con atributos #[strong “nombre_compañia”], #[strong “direccion”], #[strong “ciudad”], etc.; sin embargo, considere lo siguiente:

      .cajon.color-acento-botones.p-4.mt-4.bg-white.caja_flotante.caja_escalada_hover
        p #[em El cliente le ha pedido que modele un sistema de facturación para su droguería, es decir, para una droguería, no para un conjunto de droguerías.  Es diferente si solicitaran “se necesita un sistema de facturación que administre el inventario y facturación de múltiples droguerías”, a estos problemas se les llama multitenant (multiinquilino) pero este no es el caso. Por lo tanto, no es la entidad droguería parte del modelo, ya que no se está modelando la facturación de múltiples droguerías.]

    p.mt-4(data-aos="fade-up") Como se puede ver hay información que es descartada, por lo que puede resultar muy conveniente hacer un sistema multitenant, esto le agrega complejidad porque el cliente no está dispuesto a pagar.

    .mt-4.p-5(style="background-color:#FFF8E2")
      .col-md-8.m-auto
          figure
            img.image_floating(src="@/assets/curso/tema2/5.svg" data-aos="fade-up")

      p.mt-5(data-aos="fade-up") Tal parece que los datos más relevantes de los clientes están presentados en la parte resaltada de la imagen, lo que hace pensar que se requiere una entidad, cliente, usuario o persona y, que la persona puede tener relacionada una empresa o tal vez una persona hace la compra para una empresa.

    p.mt-5(data-aos="fade-up") Lo anterior se puede modelar con una entidad, la entidad persona que relaciona los datos (#[strong nombre, compañía, dirección, ciudad, código postal, teléfono, correo]).

    p.mt-3(data-aos="fade-up") Una forma simplificada sería creando una entidad persona y para poder identificar cada fila usar una llave primara (#[strong id_persona]), pero también es importante usar un identificador único de persona como lo es el documento de identificación (ya que las personas nunca tienen el mismo número), de igual forma, debe tener en cuenta que no puede existir una persona si al menos no se define el número de identificación y el nombre.

    p.mt-3(data-aos="fade-up") Lo anterior se puede ver en la siguiente imagen (#[strong flecha roja para definir la llave primaria, morada para definir los datos que deben ser registrados obligatoriamente, y la verde una columna cuyo valor no puede repetirse en toda la tabla]).

    .mt-3
      .col-md-10.m-auto.pb-5(style="border-bottom: 1px #B2B2B2 solid;")
          figure.p-5
            img.image_floating(src="@/assets/curso/tema2/6.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Pero como el cliente necesita un reporte de las empresas que más le compran es necesario que la compañía sea modelada por aparte, de esta forma se eliminaría la columna compañía de la tabla persona y se crea una tabla con las compañías. En la llave primaria (rojo) no se puede definir una compañía sin tener su NIT (número de identificación tributaria) flecha morada y, finalmente marcar la unicidad para el NIT, ya que puede haber empresas con el mismo nombre, pero no con la misma identificación tributaria NIT.

    .mt-4
      .col-md-8.m-auto
          figure.p-5
            img.image_floating(src="@/assets/curso/tema2/7.svg" data-aos="fade-up")

    p.mt-3(data-aos="fade-up") Como hay menos compañías que personas se ha tomado #[strong id_compania] como SMALLINT. Esta decisión permite cumplir con dos requerimientos no funcionales: 1.) ahorro de espacio de almacenamiento y 2.) ahorro en el tiempo computacional de las consultas.

    .cajon.color-acento-botones.p-4.mt-5.caja_flotante
        p #[strong Nota:] vea cómo la decisión de tipo de dato apunta a cumplir con los requerimientos no funcionales.

    .mt-5
      .col-md-9.m-auto(style="border-bottom: 1px #B2B2B2 solid;")

    p.mt-5(data-aos="fade-up") Es posible que piense que debe haber una relación entre la persona y la compañía de la siguiente forma:

    .mt-4
      .col-md-8.m-auto
          figure.p-5
            img.image_floating(src="@/assets/curso/tema2/8.svg" data-aos="fade-up")

    p.mt-3(data-aos="fade-up") Al hacerlo de esta forma, una persona puede pertenecer a una empresa (solo a una), pero esa misma persona podría comprar en la farmacia unas veces a nombre propio y otras a nombre de la empresa, y este modelo no permitiría saber cada caso. Otro problema es que esa persona un día compra a nombre de una empresa y otro día puede comprar a nombre de otra empresa (si cambia de empresa) y, al actualizar la empresa de la persona se estaría actualizando las facturas pasadas, lo cual sería un error.

    p.mt-3(data-aos="fade-up") De esta forma, la manera correcta sería relacionar la persona y la empresa con la factura.

    .mt-3
      .col-md-10.m-auto.pb-3(style="border-bottom: 1px #B2B2B2 solid;")
          figure.p-5
            img.image_floating(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Ahora, mire los datos de la factura y sus datos como número de factura (que debe ser único y secuencial), fecha, la identificación del cliente (código interno #[strong id_persona]), y términos de pago.

    .mt-4
      .col-md-8.m-auto
          figure.p-5
            img.image_floating(src="@/assets/curso/tema2/10.svg" data-aos="fade-up")

    p.mt-4(data-aos="fade-up") Como se puede ver en la imagen anterior se creó la tabla término de pago que almacenará los medios de pago (crédito, contado, contra entrega, etc.), note también que se usó el tipo de datos TINYTINT que solo almacena números de 0-126 y se hace una relación de 1 a muchos (un término puede tener relacionadas muchas facturas, o lo que es igual muchas facturas tienen un mismo término de pago).

    p.mt-3(data-aos="fade-up") Note que una factura necesariamente debe tener relacionada la referencia de una persona, el término, la fecha y la hora, pero la compañía (#[strong id_compania]) no es obligatoria. Esto es porque hay facturas que las compran las personas naturales y otras que las compran las empresas o compañías, pero en un caso o en el otro siempre habrá una persona que hace la compra, es por esto que el #[strong id_persona] es obligatoria.

    p.mt-3(data-aos="fade-up") La factura tiene un tipo de dato BIGINT, ya que se espera que pueda facturar muchos al ser minorista, note también la columna AI (Auto Incrementable), esto hace que el gestor de base datos le asigne automáticamente y secuencialmente un número a cada fila para la columna #[strong id_factura].

    .mt-5
      .col-md-9.m-auto(style="border-bottom: 1px #B2B2B2 solid;")

    h5.mt-5(data-aos="fade-up") Otro segmento de la factura son los ítem o productos que la componen:

    .col-md-10.m-auto.mt-4
        figure
          img.image_floating(src="@/assets/curso/tema2/11.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") La imagen sugiere que los productos tienen una descripción, un precio unitario y como mencionó el cliente un precio de compra:

    .col-md-10.m-auto.mt-5
      figure
        img.image_floating(src="@/assets/curso/tema2/12.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Una categoría puede tener varios productos o varios productos pertenecen a una categoría, esto es una relación de 1 a muchos que queda definida en la imagen anterior. Note los tipos de datos definidos y también que la columna existencia no puede ser null y además de eso, si el usuario no pone un dato o trata de poner dato null en la existencia, entonces el sistema gestor de base de datos le pondrá “0” a esa fila en esa columna.

    p.mt-3(data-aos="fade-up") Ahora, resta relacionar los productos con la factura, y una factura puede relacionar varios productos, y un mismo producto puede estar en muchas facturas, por lo tanto, es una relación de muchos a muchos (n:m), esto hace que se genere una entidad intermedia que se llama #[strong producto_factura].

    p.mt-3(data-aos="fade-up") Cada una de estas filas representa un producto que está relacionado con una factura, la cantidad vendida y el valor unitario al que fue vendido (porque el cliente puede tener descuento según su entrevista).

    .col-md-9.m-auto.mt-5
      figure
        img.image_floating(src="@/assets/curso/tema2/13.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Mire la entidad #[strong factura_producto] que es una relación de muchos a muchos y agrega los datos necesarios para saber en cuánto y cuántos productos se venden por factura. También en la siguiente imagen se muestra cómo son obligatorias todas las columnas de este modelo y que la cantidad por defecto tiene valor de 1, ya que si se intenta guardar un valor nulo no debe ser posible y en lugar de insertar nulo insertará 1 porque no tiene sentido agregar un producto a una factura y no vender al menos un producto.

    .col-md-9.m-auto.mt-5
      figure
        img.image_floating(src="@/assets/curso/tema2/14.svg" data-aos="fade-up")


    br
    br
    .titulo-segundo#t_2_2.mt-5
      h2 2.2 Identificación de sentencias DDL

    p(data-aos="fade-up") Como se mencionó antes el SGDB (MySQL) reconoce sentencias SQL (Standar Query Languaje, lenguaje estándar de consultas), y un subconjunto de esta lengua son las sentencias DDL (Data Definition Language, leguaje de definición de datos).

    p.mt-3(data-aos="fade-up") #[strong MySQL Workbench] ofrece la interfaz gráfica con la que se puede generar estos códigos, se verá cómo se hace con algunos ejemplos, siga los siguientes pasos:

    h6.mt-4(data-aos="fade-up") 1. De clic derecho a la entidad persona y luego a “Copy to Clipboard” (copiar SQL en portapapeles).

    .col-md-8.m-auto.mt-5
      figure
        img.image_floating(src="@/assets/curso/tema2/15.svg" data-aos="fade-up")

    h6.mt-5(data-aos="fade-up") 2. Después se debe pegar (Ctrl+V) el contenido en un editor de texto y el resultado será:

    .mt-5.p-5(style="background-color:#12263F")
      p.text-white.mb-0(data-aos="fade-up" style="font-family:Inconsolata") CREATE TABLE IF NOT EXISTS `mydb`.`persona` ( #[br]
        |  `id_persona` INT NOT NULL, #[br]
        |  `identificacion` VARCHAR(45) NOT NULL, #[br]
        |  `nombres` VARCHAR(450) NOT NULL, #[br]
        |  `direccion` VARCHAR(250) NULL, #[br]
        |  `ciudad` VARCHAR(80) NULL, #[br]
        |  `codigo_postal` VARCHAR(15) NULL, #[br]
        |  `telefono` VARCHAR(15) NULL, #[br]
        |  `correo` VARCHAR(250) NULL, #[br]
        |  PRIMARY KEY (`id_persona`), #[br]
        |  UNIQUE INDEX `identificacion_UNIQUE` (`identificacion` ASC) VISIBLE) #[br]
        | ENGINE = InnoDB;

    p.mt-5(data-aos="fade-up") Como puede ver es posible obtener la definición de la base de datos en lenguaje SQL (DDL), si no se tuviera MySQL Workbench se tendría que elaborar cada una de las sentencias.

    br
    .mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF8E2")
      figure
        img.imagen_flotante_animada(src="@/assets/curso/tema2/16.svg" style="width:100px;margin-top:-6rem;")

      p.mt-4(data-aos="fade-up") Pruebe sus conocimientos a través del siguiente ejercicio en el que identifique en la sintaxis:

      ul.lista-ul.mt-4.lista__1
        li(data-aos="fade-up")
          i.fas.fa-check
          |  #[strong Cómo en SQL define una llave primaria.]
        li(data-aos="fade-up")
          i.fas.fa-check
          |  #[strong Cómo en SQL se define un índice único.]

    p.mt-5(data-aos="fade-up") Es importante que se familiarice con estas sentencias, ya que las operaciones de mantenimiento de bases de datos como adición o sustracción de columnas o tablas son más fáciles cuando se hace a través de la ejecución de scripts en lenguaje SQL.

    .cajon.color-acento-botones.p-4.mt-5.caja_flotante_rosada
        p(data-aos="fade-up") #[strong Nota:] como no se ha especificado el nombre de la base de datos MySQL Workbench pone por defecto `mydb` a la base de datos.

    p.mt-5(data-aos="fade-up") Vea una entidad más compleja como lo es la entidad factura:

    .mt-5.p-5(style="background-color:#12263F")
      p.text-white.mb-0(data-aos="fade-up" style="font-family:Inconsolata") CREATE TABLE IF NOT EXISTS `mydb`.`factura` ( #[br]
        |  `id_factura` BIGINT NOT NULL AUTO_INCREMENT, #[br]
        |  `id_persona` INT NOT NULL, #[br]
        |  `id_compania` SMALLINT NULL, #[br]
        |  `id_termino` TINYINT NOT NULL, #[br]
        |  `fecha` DATE NOT NULL, #[br]
        |  `hora` TIME NOT NULL, #[br]
        |  PRIMARY KEY (`id_factura`), #[br]
        |  INDEX `fk_factura_persona_idx` (`id_persona` ASC) VISIBLE, #[br]
        |  INDEX `fk_factura_compania1_idx` (`id_compania` ASC) VISIBLE, #[br]
        |  INDEX `fk_factura_termino1_idx` (`id_termino` ASC) VISIBLE, #[br]
        |  CONSTRAINT `fk_factura_persona` #[br]
        |    FOREIGN KEY (`id_persona`) #[br]
        |    REFERENCES `mydb`.`persona` (`id_persona`) #[br]
        |    ON DELETE NO ACTION #[br]
        |    ON UPDATE NO ACTION, #[br]
        |  CONSTRAINT `fk_factura_compania1` #[br]
        |    FOREIGN KEY (`id_compania`) #[br]
        |    REFERENCES `mydb`.`compania` (`id_compania`) #[br]
        |     ON DELETE NO ACTION #[br]
        |     ON UPDATE NO ACTION, #[br]
        |   CONSTRAINT `fk_factura_termino1` #[br]
        |     FOREIGN KEY (`id_termino`) #[br]
        |     REFERENCES `mydb`.`termino` (`id_termino`) #[br]
        |    ON DELETE NO ACTION #[br]
        |     ON UPDATE NO ACTION) #[br]
        | ENGINE = InnoDB

    p.mt-5(data-aos="fade-up") Mire cómo las llaves foráneas les define un índice:

    .mt-4.p-4(style="background-color:#12263F")
      p.text-white.mb-0(data-aos="fade-up" style="font-family:Inconsolata") INDEX `fk_factura_persona_idx` (`id_persona` ASC) VISIBLE,

    p.mt-5(data-aos="fade-up") Con esta sintaxis lo que hace MySQL Workbench es decirle al gestor de base de datos MySQL que esta columna id_persona debe guardarse en estructura de árbol binario (que se llame fk_factura_persona_idx) y no de manera secuencial.  Este tipo de estructura de datos en árbol mejora la velocidad de las operaciones de consulta y búsqueda, esta columna al ser una llave foránea requiere un tipo de almacenamiento así:

    .mt-5.m-auto.col-md-6
      figure
        img.image_floating(src="@/assets/curso/tema2/17.svg")

    p.mt-5(data-aos="fade-up") También se crean índices para las columnas #[strong id_compania] e id_termino.

    .cajon.color-acento-botones.p-4.mt-5.caja_flotante_rosada
        p(data-aos="fade-up") #[strong Nota:] usar MySQL Workbench ayuda a definir la estructura de almacenamiento de los datos para que cumpla con el requerimiento no funcional de rendimiento en las consultas.

    p.mt-5(data-aos="fade-up") También MySQL WorKbench crea unas restricciones que permiten mantener la integridad de los datos.

    .mt-5.p-5(style="background-color:#12263F")
      p.text-white.mb-0(data-aos="fade-up" style="font-family:Inconsolata") CONSTRAINT `fk_factura_persona` #[br]
        |  FOREIGN KEY (`id_persona`) #[br]
        |  REFERENCES `mydb`.`persona` (`id_persona`) #[br]
        |  ON DELETE NO ACTION #[br]
        |  ON UPDATE NO ACTION,

    p.mt-5(data-aos="fade-up") Ahora, se tratará de entenderla línea a línea, recordando que la columna id_persona es una llave foránea de la tabla persona:

    .tabla-a.color-acento-botones.mt-4(style="border-top: 5px #FFCA28 solid;")
      table
        tbody
          tr
            td.p-4(style="width:30%;") #[strong CONSTRAINT `fk_factura_persona`]
            td(style="width:70%;") Indica al SGDB que debe crear una restricción (CONSTRAINT) que se llama fk_factura_persona
          tr
            td.p-4(style="width:30%;") #[strong FOREIGN KEY (`id_persona`)]
            td(style="width:70%;") Indica la columna  que es llave foránea, es decir, que id_persona es una referencia de una fila de otra tabla.
          tr
            td.p-4(style="width:30%;") #[strong REFERENCES `mydb`.`persona` (`id_persona`)]
            td(style="width:70%;") La fila de la otra tabla de la que es referencia de la base de datos mydb, tabla persona columna id_persona.
          tr
            td.p-4(style="width:30%;") #[strong ON DELETE NO ACTION]
            td(style="width:70%;") Qué acción debe hacer el SGDB si borran la fila de la tabla persona con los datos de la tabla factura que estén relacionados, acá dice que no le permite borrar personas que ya tienen facturas.
          tr
            td.p-4(style="width:30%;") #[strong ON UPDATE NO ACTION,]
            td(style="width:70%;") Qué acción debe hacer el SGDB si actualiza la columna id_persona una fila de la tabla persona con los datos de la tabla factura que estén relacionados, acá dice que no le permita actualizar la columna id_persona de la tabla persona que ya tiene facturas.

    p.mt-5(data-aos="fade-up") No es de preocuparse si no es muy claro hasta la decisión del SQL de llaves foráneas, dado que a lo largo de la práctica, la revisión del material complementario podría complementar los diferentes elementos y conceptos.

    br
    br
    .titulo-segundo#t_2_3.mt-5
      h2 2.3  Generar la base de datos

    p.mt-5(data-aos="fade-up") A continuación, se presentará cómo obtener el modelo físico de una base de datos en formato natural de las bases de datos (esto es SQL), con el siguiente procedimiento se obtendrá un modelo de datos en sentencias DDL, en un uno archivo con extensión .sql., estos documentos son los códigos fuente de las bases de datos, generalmente en el proceso de desarrollo de software son versionados como cualquier archivo de código fuente.

    h5.mt-4(data-aos="fade-up") De acuerdo con lo anterior, una forma de generar la base de datos es la siguiente:


    div.mt-5.indicador__container.container__tabs__1(active="true" data-aos="fade-up")
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title)
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Pasos para Generar la #[br] Base de Datos
              .indicador--click
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  1. Ponga un nombre a la base de datos dando clic #[br] derecho en editar Schema.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/18.png")
                figcaption 1. Ponga un nombre a la base de datos dando clic derecho en editar Schema.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  2. Ingeniería hacia adelante (Forward Ingingger).
            b-card-text
              figure
                img(src="@/assets/curso/tema2/19.png")
                figcaption 2. Ingeniería hacia adelante (Forward Ingingger)

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  3. Entre los datos de root base de datos.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/20.png")
                figcaption 3. Entre los datos de root base de datos.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  4. Seleccione las opciones de la base de datos y se #[br] deja por defecto.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/21.png")
                figcaption 4. Seleccione las opciones de la base de datos y se deja por defecto.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  5. Luego, pide la contraseña de usuario root que se #[br] puso en el proceso de instalación de MySQL.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/22.png")
                figcaption 5. Luego, pide la contraseña de usuario root que se puso en el proceso de instalación de MySQL.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  6. Ahora, muestra un resumen de lo que creará.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/23.png")
                figcaption 6. Ahora, muestra un resumen de lo que creará.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  7. Luego, le da en Next y el sistema generará el DDL #[br] de la base datos.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/24.png")
                figcaption 7. Luego, le da en Next y el sistema generará el DDL de la base datos.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  8. se guarda un archivo “Save to file” y se copia al #[br] portapapeles “Copy to clipboard”.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/25.png")
                figcaption 8. se guarda un archivo “Save to file” y se copia al #[br] portapapeles “Copy to clipboard”
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Como se puede ver, se guarda un archivo “Save to file” y se copia al portapapeles “Copy to clipboard”. Se sugiere antes de dar Next y continuar el proceso, primero guardar como un archivo y ponerle este nombre “”, luego de ponerlo le da Next para que ejecute ese script en el SGDB instalado.

    p.mt-5(data-aos="fade-up") El archivo generado guardado en formato de texto con extensión .sql es lo que se llama el script DDL de la base de datos, es el principal producto de un modelo de datos, es el entregable de un proyecto y por lo que materialmente se puede pasar una factura al cliente.

    br
    br
    .titulo-segundo#t_2_4.mt-5
      h2 2.4 Operaciones de mantenimiento y actualización

    .bloque-texto-a.color-secundario.mb-5.caja_flotante_azul(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema2/26.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4.caja_escalada_hover
            p Por lo general la base datos se diseña y se despliega en servidores en la nube, hosting o en instancias de almacenamiento, sistemas operativos o de plataforma que no tienen interfaz gráfica, es por eso que es importante el archivo de texto DDL con extensión .sql, la base de datos hasta ahora generada presenta una inexactitud que se ha puesto para ejemplificar una operación de actualización o mantenimiento.
              
    br
    .mt-4.p-5(style="background-color:#FFF8E2")
      .text-center
        figure
          img.image_floating(src="@/assets/curso/tema2/2.svg" style="width:100px;display:inline;margin-top:-20rem;" data-aos="fade-in")

      p.mt-4(data-aos="fade-up") Suponga que el cliente ha contratado un servidor en la nube para la base de datos y al darle subir el archivo de extensión .sql ha generado la base de datos; pero, se ha dado cuenta que su modelo está mal o incompleto y lleva varios meses trabajando la base de datos, hay muchos datos, por lo que no se puede volver a empezar con una base de datos vacía, sino que se debe ajustar la base de datos actual (base en producción) sin borrar o alterar los datos que la base ya tiene.

      h5.mt-4(data-aos="fade-up") Además, junto a su equipo de trabajo ha detectado que no modelaron el pie de la factura:

      .mt-4.m-auto.col-md-11
        figure
          img.image_floating(src="@/assets/curso/tema2/27.svg")


    p.mt-5(data-aos="fade-up") Este ajuste consiste en agregar en la tabla factura el valor del subtotal y la tasa de impuesto a aplicar, con estos datos se puede calcular el total:

    .mt-4.m-auto.col-md-7
        figure
          img.image_floating(src="@/assets/curso/tema2/28.svg")

    p.mt-5(data-aos="fade-up") Ahora, se necesita sincronizar estos cambios (los del diagrama) con la base de datos generada. De acuerdo con lo anterior puede revisar los siguientes pasos:

    div.mt-5.indicador__container.container__tabs__1(active="true" data-aos="fade-up")
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title)
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Sincronizar los cambios #[br] con la base de datos generada
              .indicador--click
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  1. Esto se logra dando clic en Database > #[br] Synchronize Model.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/29.png")
                figcaption 1. Esto se logra dando clic en Database > Synchronize Model:

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  2. Luego, seleccione la conexión local.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/30.png")
                figcaption 2. Luego, seleccione la conexión local.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  3. Luego, seleccione los datos en la parte de #[br] generación de script adicionales.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/31.png")
                figcaption 3. Luego, seleccione los datos en la parte de generación de script adicionales.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  4. Después de pedir la contraseña se conecta, #[br] analice las bases de datos presentes y #[br] características del servidor.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/32.png")
                figcaption 4. Después de pedir la contraseña se conecta, analice las bases de datos presentes y características del servidor.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  5. Seleccione la base de datos con la que se va a #[br] sincronizar.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/33.png")
                figcaption 5. Seleccione la base de datos con la que se va a sincronizar.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  6. Analice las diferencias.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/34.png")
                figcaption 6. Analice las diferencias.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  7. Al ubicarse en cada una de las entidades o tablas #[br] se puede ignorar la actualización.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/35.png")
                figcaption 7. Al ubicarse en cada una de las entidades o tablas se puede ignorar la actualización.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  8. Actualizar el modelo (diagrama).
            b-card-text
              figure
                img(src="@/assets/curso/tema2/36.png")
                figcaption 8. Actualizar el modelo (diagrama)
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p En lugar de actualizar la base de datos si lo que se quiere es actualizar el modelo (diagrama), para que quede conforme a la base de datos se cliquea en el botón “Update Model”. Pero este no es el caso de interés porque se necesita actualizar la base de datos, entonces se da clic en Next.

    p.mt-5(data-aos="fade-up") Al final del proceso se debe tener el DDL donde se genera la base datos y el DDL donde se actualiza la tabla factura.

    br
    br
    .titulo-segundo#t_2_5.mt-5
      h2 2.5 Actualización por interfaz de línea de comandos

    p(data-aos="fade-up") Muchas veces no es el computador local el que interesa actualizar, sino más bien, un servidor en la nube. Algunas plataformas tienen un entorno gráfico que permite aplicar el script con unos cuantos clics desde una interfaz web, pero la mayoría ofrecen una interfaz de consola o terminal, de manera que los recursos computacionales no se desperdician en interfaces gráficas.

    h5.mt-4(data-aos="fade-up") Verifique los archivos DDL_drogueria.sql, DDL_update.sql y ModeloFacturaciónDrogueria.mwb que se agregan como material de apoyo.

    .row.mt-5
      .col-md-4.mb-3
        a.anexo.mb-4(:href="obtenerLink('downloads/DDL_drogueria.sql')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p DDL_drogueria.sql
      .col-md-4.mb-3
        a.anexo.mb-4(:href="obtenerLink('downloads/DDL_update.sql')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p DDL_update.sql
      .col-md-4.mb-3
        a.anexo.mb-4(:href="obtenerLink('downloads/ModeloFacturacionDrogueria.mwb')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p ModeloFacturaciónDrogueria.mwb

    p.mt-5(data-aos="fade-up") A continuación, se muestra cómo aplicar el script desde una terminal. Esta base de datos se encuentra diseñada para cumplir el requerimiento funcional de administración de facturas de una droguería:

    div.mt-5.indicador__container.container__tabs__1(active="true" data-aos="fade-up")
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title)
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Aplicar el script desde #[br] una terminal
              .indicador--click
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  1. Dar clic en el menú inicio, buscar MySQL, una #[br] terminal o interface de línea de comandados #[br] (Command Line Interface, CLI).
            b-card-text
              figure
                img(src="@/assets/curso/tema2/37.png")
                figcaption 1. Dar clic en el menú inicio, buscar MySQL, una terminal o interface de línea de comandados (Command Line Interface, CLI).

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  2. A continuación, pedirá la contraseña de root.
            b-card-text
              figure
                img(src="@/assets/curso/tema2/38.png")
                figcaption 2. A continuación, pedirá la contraseña de root.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  3. Luego, se debe seleccionar la base de datos con #[br] la sentencia SQL:
            b-card-text
              figure
                img(src="@/assets/curso/tema2/39.png")
                figcaption 3. Luego, se debe seleccionar la base de datos con la sentencia SQL:
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                .p-3(style="background-color:#12263F")
                  p.text-white.mb-0(data-aos="fade-up" style="font-family:Inconsolata") use farmacia;

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  4. Ahora se debe aplicar la sentencia source que #[br] recibe como argumento la ruta del script:
            b-card-text
              figure
                img(src="@/assets/curso/tema2/40.png")
                figcaption 4. Ahora se debe aplicar la sentencia source que recibe como argumento la ruta del script:
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6")
                .p-3(style="background-color:#12263F")
                  p.text-white.mb-0(data-aos="fade-up" style="font-family:Inconsolata") source C://Users/sena/Documents/DDL_update.sql;
                p.mt-2(data-aos="fade-up") Note que la dirección de los slash  es “/” en lugar de backslash  “\”.

    br
    br
    .titulo-segundo#t_2_6.mt-5
      h2 2.6 Análisis y diseño gestión de matrículas

    p(data-aos="fade-up") A continuación, se describe un problema del cual se pretende obtener un modelo de datos que permita gestionar la información a través de un sistema gestor de base de datos, como se realizó en el caso anterior se fue empleando una estrategia empírica, luego de conocer los conceptos de bases de datos. Ahora se presentará un problema más sencillo con el ánimo de concentrar esfuerzos en el análisis desde un enfoque metodológico, que se puede basar en tres fases:

    .row.mt-5
      .col-md-4.mb-3
        .p-4.tarjeta_uno.tarjeta__interactiva.caja_flotante.caja_escalada_hover(style="border-radius:8px;background-color:#FFCA28;min-height:500px;")
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema2/41.svg" style="width:100px;")
          h5.mt-4 Diseño conceptual
          .cont_uno.mt-4
            p Encargado de entender el problema y la naturaleza de los datos (qué son y qué representan en el mundo real). Las actividades a desarrollar son:
          .cont_dos.mt-4(style="display:none")
            ul.lista-ul.mt-4
              li
                i.fas.fa-check
                |  Identificar entidades.
              li
                i.fas.fa-check
                |  Identificar atributos.
              li
                i.fas.fa-check
                |  Identificar las relaciones.
              li
                i.fas.fa-check
                |  Identificar las cardinalidades de las relaciones.
              li
                i.fas.fa-check
                |  Diagrama entidad relación.

      .col-md-4.mb-3
        .p-4.tarjeta_dos.tarjeta__interactiva.caja_flotante.caja_escalada_hover(style="border-radius:8px;background-color:#1565C0;min-height:500px;")
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema2/42.svg" style="width:100px;")
          h5.mt-4.text-white Diseño lógico
          .cont_uno.mt-4
            p.text-white Se encarga de analizar la estructura de los datos y que cumpla con los requisitos del negocio, modelo de negocio o problema.
          .cont_dos.mt-4(style="display:none")
            ul.lista-ul.mt-4
              li.text-white(data-aos="fade-up")
                i.fas.fa-check
                |  Mapear diagrama entidad relación a un modelo relacional.
              li.text-white(data-aos="fade-up")
                i.fas.fa-check
                |  Análisis de restricciones de integridad.
              li.text-white(data-aos="fade-up")
                i.fas.fa-check
                |  Validación de requisitos funcionales.

      .col-md-4.mb-3
        .p-4.tarjeta_tres.tarjeta__interactiva.caja_flotante.caja_escalada_hover(style="border-radius:8px;background-color:#4DD0E1;min-height:500px;")
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema2/43.svg" style="width:100px;")
          h5.mt-4 Diseño físico
          .cont_uno.mt-4
            p se preocupa por cómo se almacenarán los datos.
          .cont_dos.mt-4(style="display:none")
            ul.lista-ul.mt-4
              li(data-aos="fade-up")
                i.fas.fa-check
                |  Definición de tipos de datos.
              li(data-aos="fade-up")
                i.fas.fa-check
                |  Analizar las restricciones de llaves foráneas.
              li(data-aos="fade-up")
                i.fas.fa-check
                |  Definición de índices.

    br
    .col-md-4.m-auto.mt-5
      h4.text-center(data-aos="fade-up") Caso 2
      h5.text-center(data-aos="fade-up" style="border-bottom: 2px #4DD0E1 solid;padding-bottom: 7px;") Gestión de matrículas

    br
    .mt-4.p-5.caja_flotante_rosada(style="background-color:#FFF8E2")
      .text-center
        figure
          img.image_floating(src="@/assets/curso/tema2/44.svg" style="width:100px;display:inline;margin-top:-20rem;" data-aos="fade-in")

      p.mt-4(data-aos="fade-up") Se necesita un sistema que permita controlar la matrículas de un instituto de formación técnica profesional; interesa la información pertinente de los estudiantes como lo son los datos personales y la edad; de los profesores parte de los datos personales como la titulación profesional o técnica y el año de graduación.

      p.mt-3(data-aos="fade-up") Cada programa técnico se desarrolla por semestres y un semestre tiene varias materias, cada semestre un estudiante puede matricular máximo 7 materias, un profesor puede orientar varias materias y la misma materia puede ser dictada por varios profesores.

      p.mt-3(data-aos="fade-up") Un estudiante puede estudiar varios programas, aunque no a la vez, y el estudiante se inscribe a un programa y cada año puede cursar 2 semestres (de enero a junio período 1, y de julio a diciembre período 2) si registra por semestre una matrícula con las materias a cursar. Algunos programas duran 5, 6 o 7 semestres.

    .text-center.mt-5
      figure
        img.imagen_flotante_animada(src="@/assets/curso/tema2/45.svg" style="width:100px;display:inline;")
      h4 Diseño conceptual

    p.mt-5(data-aos="fade-up") Para la elaboración del modelo conceptual es fundamental identificar las entidades, luego los atributos de cada una de ellas, luego las relaciones entre entidades y, si se desea, se elabora un diagrama de entidad relación como resultado del diseño conceptual:

    .p-5.mt-5.caja_flotante_rosada(data-aos="fade-up" style="background-color:#FFF8E2")
      h5 Lista de entidades:

      ul.lista-ul.mt-4
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Persona (estudiantes y profesores): existen personas estudiantes y personas profesores.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Programa: representa la carrera técnica.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Inscripción: de un estudiante a un programa.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Materia.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Matrícula: que dura un semestre y puede contener solo máximo 7 materias.

    .p-5.mt-4.caja_flotante_rosada(data-aos="fade-up" style="background-color:#FFF8E2")
      h5 Lista de atributos:

      ul.lista-ul.mt-4
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Estudiante: (nombre, apellidos, identificación, fecha_nacimiento, correo, teléfono, dirección).
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Profesor: (nombre, apellidos, identificación, correo, teléfono, dirección, titulación, fecha  de titulación).
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Programa: (nombre del programa, nivel, número de semestres).
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Inscripción: (fecha, fecha de graduación).
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Materia: (nombre de la materia y semestre).
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Matrícula: (año, período).

    .p-5.mt-4.caja_flotante_rosada(data-aos="fade-up" style="background-color:#FFF8E2")
      h5 Relaciones y cardinalidad:

      ul.lista-ul.mt-4
        li(data-aos="fade-up")
          i.fas.fa-check
          |  El estudiante puede tener varias inscripciones, pero una inscripción por un solo estudiante.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Un profesor puede dictar varias materias y una materia ser dictada por varios profesores.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Una inscripción puede ser la relación entre un único estudiante y un único programa.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Una inscripción puede tener varias matrículas, pero una matrícula corresponde a una única inscripción.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Una matrícula se relaciona con varios estudiantes y un estudiante con varias matrículas.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  Una matrícula puede tener más de una materia, y la misma materia puede estar relacionada con varias matrículas.

    p.mt-5(data-aos="fade-up") Cada vez es menos común hacer un diagrama de entidad relación, pero si sirve a su propósito de entender mejor el problema puede elaborarlo.

    .col-md-11.m-auto
      figure.mt-4
        img.image_floating(src="@/assets/curso/tema2/46.svg")

    p.mt-5(data-aos="fade-up") Actualmente, algunos diseñadores de bases de datos no diseñan el modelo entidad relación, por lo general directamente diseñan el modelo lógico o diagrama relacional, en algunos casos se emplea el modelo equivalente que se denomina “modelo conceptual” que es equivalente al modelo entidad relación, pero difiere en la notación del diagrama al hacerse más parecido al modelo relacional. Por este mismo motivo es poco usado, ya que supone hacer un nuevo paso o transformación del modelo conceptual a un modelo lógico, siendo este último el que en realidad puede convertirse en una base de datos.

    .col-md-9.m-auto.mt-5.image_floating(style="border-bottom:2px #B2B2B2 solid;")

    .text-center.mt-5
      figure
        img.imagen_flotante_animada(data-aos="fade-up" src="@/assets/curso/tema2/47.svg" style="width:100px;display:inline;")
      h4(data-aos="fade-up") Diseño lógico

    p.mt-5(data-aos="fade-up") Una vez se tiene el modelo conceptual se mapea el diagrama entidad relación o también llamado modelo conceptual a un modelo lógico, esto mediante las reglas de multiplicidad entre entidades (de uno a uno, de uno a muchos y de muchos a muchos).

    h5.mt-4(data-aos="fade-up") Mapear diagrama entidad relación a un modelo relacional

    .col-md-9.m-auto.mt-5
      figure
        img.image_floating(src="@/assets/curso/tema2/48.svg")

    p.mt-5(data-aos="fade-up") Puede verificar algunos modelos, pero es recomendable que lo cree de manera que ejercite lo hasta ahora visto.

    .row.mt-4(data-aos="fade-up")
      .col-md-4
        a.anexo.mb-4(:href="obtenerLink('downloads/Modelos.mwb')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p Modelos.mwb

    .mt-5.p-5.row.caja_flotante_rosada(style="background-color:#FFF8E2")
      .col-md-4
        figure
          img.p-5.imagen_flotante_animada(src="@/assets/curso/tema2/49.svg")
      .col-md-8
        h5.mt-3(data-aos="fade-up") Análisis de restricciones de integridad

        p.mt-4(data-aos="fade-up") La entidad matrícula tiene relación con una inscripción, y esta a su vez con un estudiante con el programa al que pertenece, también podría haberse realizado la matrícula con el programa y el estudiante, pero convenientemente al relacionar matrícula con inscripción con menos datos se está relacionando el programa y el estudiante de forma indirecta.

        p.mt-3(data-aos="fade-up") Las demás relaciones responden al proceso de análisis de mapeo visto en unidades anteriores, por lo que no se entrará en detalles.

    .mt-4.p-5.row.caja_flotante_rosada(style="background-color:#FFF8E2")
      .col-md-4
        figure
          img.p-5.imagen_flotante_animada(src="@/assets/curso/tema2/50.svg")
      .col-md-8
        h5.mt-3(data-aos="fade-up") Validación de requisitos funcionales

        p.mt-4(data-aos="fade-up") Para conocer si se cumplen los requisitos funcionales de lógica es importante prestar atención a los siguientes puntos:

        ul.lista-ul.mt-4
          li(data-aos="fade-up")
            i.fas.fa-check
            |  Revise por cada atributo si es conveniente que sea No Null (No null o NN), o si no nulo representa algo conceptualmente en el proceso.
          li(data-aos="fade-up")
            i.fas.fa-check
            |  Si un atributo o columna es Not Null, revise si es importante definir un valor por defecto según la lógica del problema.

    .col-md-9.m-auto.mt-5.image_floating(style="border-bottom:2px #B2B2B2 solid;")

    .text-center.mt-5
      figure
        img.imagen_flotante_animada(data-aos="fade-up" src="@/assets/curso/tema2/51.svg" style="width:100px;display:inline;")
      h4(data-aos="fade-up") Diseño físico

    p.mt-5(data-aos="fade-up") Finalmente, se debe revisar cuidadosamente la naturaleza de los datos antes de generar el archivo, conocer los tipos de datos que soporta el SGDB y estar seguro de que están bien definidos (si pueden no ser nulos, la longitud máxima y mínima, etc.).

    .mt-4.p-5.row.caja_flotante_rosada(style="background-color:#FFF8E2")
      .col-md-4
        figure
          img.p-5.imagen_flotante_animada(src="@/assets/curso/tema2/52.svg")
      .col-md-8
        h5.mt-3(data-aos="fade-up") Definición de tipos de datos:

        .mt-4
          span.h6(data-aos="fade-up" style="background-color:#FFCA28;padding: 10px 20px 10px 20px;border-radius: 3px;") Revise

        ul.lista-ul.mt-4
          li(data-aos="fade-up")
            i.fas.fa-check
            |  Que el valor (entero y flotante) corresponda a los valores que en un momento dado puede tener, por ejemplo, mire que las materias id_materia es tipo SMALLINT (lo que permitiría 32767 materias) mientras que en personas id_persona es tipo INT (lo que permitiría 2147483647 personas, es decir, el más del 30% de la población mundial).
          li(data-aos="fade-up")
            i.fas.fa-check
            |  Preste especial atención en las cadenas de texto tamaño máximo y mínimo en longitud (cadenas de texto).

    .mt-4.p-5.row.caja_flotante_rosada(style="background-color:#FFF8E2")
      .col-md-4
        figure
          img.p-5.imagen_flotante_animada(src="@/assets/curso/tema2/53.svg")
      .col-md-8
        h5.mt-3(data-aos="fade-up") Analizar las restricciones:

        .mt-4
          span.h6(data-aos="fade-up" style="background-color:#FFCA28;padding: 10px 20px 10px 20px;border-radius: 3px;") Considere

        ul.lista-ul.mt-4
          li(data-aos="fade-up")
            i.fas.fa-check
            |  Este es el punto estratégico del modelo, revisar la no nulidad o nulidad de las llaves foráneas es de vital importancia, ya que ello determina en gran porcentaje si su modelo cumple los requerimientos funcionales del sistema, por ejemplo, una inscripción debe tener relacionado un id_estudiante y un id_programa, porque la lógica de una inscripción es que un estudiante se matricula a un programa de formación, por lo tanto ni id_estudiante, ni id_programa deben ser Null, por lo tanto son atributo con restricción Not Null (NN).


    .mt-4.p-5.row.caja_flotante_rosada(style="background-color:#FFF8E2")
      .col-md-4
        figure
          img.p-5.imagen_flotante_animada(src="@/assets/curso/tema2/54.svg")
      .col-md-8
        h5.mt-3(data-aos="fade-up") Definición de índices:

        .mt-4
          span.h6(data-aos="fade-up" style="background-color:#FFCA28;padding: 10px 20px 10px 20px;border-radius: 3px;") Valide

        p.mt-4(data-aos="fade-up") Como se usa MySQL Workbench, esta hace por el diseñador muchas cosas, una de ellas es identificar los índices; sin embargo, si en algún momento decide hacer la base de datos en esta herramienta no cree índices en los siguientes casos:

        ul.lista-ul.mt-4
          li(data-aos="fade-up")
            i.fas.fa-check
            |  Por cada llave foránea se crea un índice.
          li(data-aos="fade-up")
            i.fas.fa-check
            |  Si va a hacer consultas por rango de fechas, a las columnas por las que va a filtrar por rango de fechas créeles un índice.
          li(data-aos="fade-up")
            i.fas.fa-check
            |  No es necesario crear índices para las llaves primarias, por defecto MySQL lo hace.

    .cajon.color-secundario.p-4.mt-5.caja_flotante_azul.caja_escalada_hover(style="background-color:#DBFBFF")
        p(data-aos="fade-up") #[strong Nota:] si algún día usa otro motor de base de datos como Oracle, Postgres o SQL Server, verifique manualmente la creación de índices, ya que según la herramienta que esté usando puede  ayudarle a crearlos para las llaves foráneas o no.

</template>

<script>
import $ from 'jquery'
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    $('.tarjeta_uno').hover(
      function() {
        $(this).css('background-color', '#FFE698')
        $(this)
          .find('.cont_uno')
          .fadeOut(10)
        $(this)
          .find('.cont_dos')
          .fadeIn(500)
      },
      function() {
        $(this).css('background-color', '#FFCA28')
        $(this)
          .find('.cont_dos')
          .fadeOut(10)
        $(this)
          .find('.cont_uno')
          .fadeIn(500)
      },
    )
    $('.tarjeta_dos').hover(
      function() {
        $(this).css('background-color', '#3A82D3')
        $(this)
          .find('.cont_uno')
          .fadeOut(10)
        $(this)
          .find('.cont_dos')
          .fadeIn(500)
      },
      function() {
        $(this).css('background-color', '#1565C0')
        $(this)
          .find('.cont_dos')
          .fadeOut(10)
        $(this)
          .find('.cont_uno')
          .fadeIn(500)
      },
    )
    $('.tarjeta_tres').hover(
      function() {
        $(this).css('background-color', '#85EDFA')
        $(this)
          .find('.cont_uno')
          .fadeOut(10)
        $(this)
          .find('.cont_dos')
          .fadeIn(500)
      },
      function() {
        $(this).css('background-color', '#4DD0E1')
        $(this)
          .find('.cont_dos')
          .fadeOut(10)
        $(this)
          .find('.cont_uno')
          .fadeIn(500)
      },
    )
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {},
}
</script>
<style lang="sass">
.image_floating
  filter: drop-shadow(19px 14px 5px rgba(0,0,0,.25))
.titulo-principal__numero span
  color: #31326F !important
.titulo-principal__numero
  background-color: #FFCA28 !important

@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(0 25px 15px rgba(0,0,0,0.1))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.cajon.color-acento-botones
  background-color: #FFE7C4
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: none !important
.bloque-texto-a
  background-color: #F3F9FF !important
.item_round
  background-color: rgb(255, 202, 40)
  padding: 7px 17px 7px 17px
  font-size: 33px
  font-weight: bold
  border-radius: 50%
.titulo-segundo:after
  border-color: #FFCA28 !important
.image__1
  position: absolute
  right: 90px
  width: auto
  top: 10rem
  height: 25rem
@media (max-width: 950px)
  .image__1
    position: inherit
.lista__1 i
  color: #FFA726
@font-face
  font-family: "Inconsolata"
  src: url("/fonts/courier-new_[allfont.es].ttf")
.anexo *
  color: #12263f !important
.container__tabs__1 .card
  border:0 !important
.container__tabs__1 .card-header
  background-color: #F3F9FF !important
  border-top: 10px #B4E2F8 solid
.container__tabs__1 .nav-link
  color: #1565C0 !important
  background-color: #f3f9ff !important
  border-top: 1px #B2E6FF solid !important
  border-radius: 0px !important
.container__tabs__1.nav-pills
  border-top: 9px #B4E2F8 solid !important
.container__tabs__1 .nav-link:first-child
  border-top:0px !important
.container__tabs__1 .nav-link.active
  font-weight:bold !important
.container__tabs__1 .card-body
  padding: 0px
.tarjeta__interactiva,.tarjeta__interactiva:hover
  cursor: pointer
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.cont_uno
  transition: opacity 1s ease-out
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.cont_dos
  transition: opacity 1s ease-out
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.cajon.color-secundario:before
  background-color: #039BE5
</style>

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Establecer un entorno de trabajo

    .bloque-texto-a.color-secundario.mb-5.caja_flotante_azul(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema1/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4.caja_escalada_hover
            p Es importante saber cómo obtener, instalar, configurar y probar las herramientas necesarias para realizar las operaciones de diseño; existen muchas tecnologías para diseñar e implementar bases de datos, se usará MySQL como sistema gestor de bases de datos y MySQL Workbench como herramienta de diseño, es importante que en la medida que se van presentando los contenidos realice de forma local y en su computador el trabajo con los ejercicios y ejemplos propuestos.

    br
    br
    .titulo-segundo#t_1_1.mt-5
      h2 1.1 Sistema gestor de bases de datos MySQL

    p(data-aos="fade-up") MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual, lo que significa que es una licencia pública general y/o licencia comercial por Oracle Corporation y, que según medios de comunicación es considerada como la base de datos de código abierto más popular del mundo (Wikipedia, 2021). Tener licencia dual significa que se puede usar la licencia de uso público sin incurrir en gastos; sin embargo, se puede adquirir una licencia de pago que incluye paquetes que robustecen el producto y servicios de soporte técnico especializado.

    .tarjeta.text-white.p-5.mt-5.caja_flotante_azul(data-aos="fade-up" style="background: linear-gradient(#0f3664,rgb(57 131 199));")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.imagen_flotante_animada(src="@/assets/curso/tema1/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h4.mb-0 Descarga de MySQL Server Community
              p.mt-2 Anexo: Proceso de descarga de MySQL Server community y MySQL Workbench
            .col-sm-auto
              a.boton.boton--b.color-acento-secundario(:href="obtenerLink('downloads/descargaMysql.pdf')" target="_blank")
                span(style="color: #12263F !important;") Descargar
                i.fas.fa-file-download(style="color: #12263F !important;")

    .tarjeta.text-white.p-5.mt-5.caja_flotante_azul(data-aos="fade-up" style="background: linear-gradient(#0f3664,rgb(57 131 199));")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.imagen_flotante_animada(src="@/assets/curso/tema1/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h4.mb-0 Instalación de MySQL Server Community
              p.mt-2 Anexo: Proceso de instalación de MySQL Server community
            .col-sm-auto
              a.boton.boton--b.color-acento-secundario(:href="obtenerLink('downloads/InstalacionMysqlServerComm.pdf')" target="_blank")
                span(style="color: #12263F !important;") Descargar
                i.fas.fa-file-download(style="color: #12263F !important;")

    br
    br
    .titulo-segundo#t_1_2.mt-5
      h2 1.2 Sistema de diseño y gestión de bases de datos

    p(data-aos="fade-up") Es una herramienta visual unificada para arquitectos, desarrolladores y administradores de bases de datos. MySQL Workbench proporciona modelado de datos, desarrollo de SQL y herramientas de administración integrales para la configuración del servidor, administración de usuarios, respaldo y muchas otras características y, lo más importante es que es multiplataforma, lo que indica que puede descargarse para sistemas operativos Windows, Linux y Mac.

    h5.mt-5(data-aos="fade-up") Algunas de las características más importantes de Workbench son las siguientes:

    div
      b-card(style="border:none;")
        b-tabs(fill small)
          b-tab
            template(#title)
              div
                h5.title__tab_1
                  span.pre A 
                  h5.title Diseño
            b-card-text
              .p-5(style="background-color:#EFF8FE")
                p(data-aos="fade-up") MySQL Workbench permite a un administrador de bases de datos, desarrollador o arquitecto de datos diseñar, modelar, generar y administrar bases de datos visualmente. Incluye todo lo que un modelador de datos necesita para crear modelos ER complejos, ingeniería directa e inversa, y también ofrece características clave para realizar tareas difíciles de gestión de cambios y documentación que normalmente requieren mucho tiempo y esfuerzo.

                figure.mt-4
                  img.image_floating(src="@/assets/curso/tema1/3.png")

                p.mt-5 En la imagen anterior se muestra cómo desde Workbench se pueden crear nuevos modelos, lo que equivale a crear una nueva base de datos e ir agregando los objetos requeridos como tablas, atributos, tipos de datos, relaciones, entre otras.

                figure.mt-4
                  img.image_floating(src="@/assets/curso/tema1/4.png")

                p.mt-5 Este es un ejemplo de modelado de una nueva tabla llamada empleado y los atributos con sus respectivos tipos de datos y propiedades.


          b-tab
            template(#title)
              div
                h5.title__tab_1 
                  span.pre B
                  h5.title Desarrollar
            b-card-text
              .p-5(style="background-color:#EFF8FE")
                p MySQL Workbench ofrece herramientas visuales para crear, ejecutar y optimizar consultas SQL. El editor de SQL proporciona resaltado de sintaxis de color, autocompletado, reutilización de fragmentos de código SQL e historial de ejecución de SQL. El panel de conexiones de base de datos permite a los desarrolladores administrar fácilmente las conexiones de base de datos estándar, incluido MySQL Fabric. El explorador de objetos proporciona acceso instantáneo al esquema y los objetos de la base de datos.

                figure.mt-4
                  img.image_floating(src="@/assets/curso/tema1/5.png")


          b-tab
            template(#title)
              div
                h5.title__tab_1 
                  span.pre C
                  h5.title Administrar
            b-card-text
              .p-5(style="background-color:#EFF8FE")
                p MySQL Workbench proporciona una consola visual para administrar fácilmente los entornos MySQL y obtener una mejor visibilidad de las bases de datos. Los desarrolladores y administradores de bases de datos pueden utilizar las herramientas visuales para configurar servidores, administrar usuarios, realizar copias de seguridad y recuperación, inspeccionar datos de auditoría y ver el estado de la base de datos.

                figure.mt-4
                  img.image_floating(src="@/assets/curso/tema1/6.png")

          b-tab
            template(#title)
              div
                h5.title__tab_1 
                  span.pre D
                  h5.title Panel de rendimiento Visual
            b-card-text
              .p-5(style="background-color:#EFF8FE")
                p MySQL Workbench proporciona un conjunto de herramientas para mejorar el rendimiento de las aplicaciones MySQL. Los administradores de bases de datos pueden ver rápidamente los indicadores clave de rendimiento mediante el panel de rendimiento. Los informes de rendimiento proporcionan una fácil identificación y acceso a puntos de acceso de E / S (entrada y salida), declaraciones SQL de alto costo y más. Además, con un clic, los desarrolladores pueden ver dónde optimizar su consulta con el plan visual explain mejorado y fácil de usar.

                figure.mt-4
                  img.image_floating(src="@/assets/curso/tema1/7.png")

          b-tab
            template(#title)
              div
                h5.title__tab_1 
                  span.pre E
                  h5.title Migración de base de datos
            b-card-text
              .p-5(style="background-color:#EFF8FE")
                p MySQL Workbench proporciona una solución completa y sencilla de usar para migrar Microsoft SQL Server, Microsoft Access, Sybase ASE, PostreSQL y otras tablas, objetos y datos RDBMS a MySQL. Los desarrolladores y administradores de bases de datos pueden convertir rápida y fácilmente las aplicaciones existentes para que se ejecuten en MySQL tanto en Windows como en otras plataformas. La migración también admite la migración de versiones anteriores de MySQL a las últimas versiones.

                figure.mt-4
                  img.image_floating(src="@/assets/curso/tema1/8.png")

                p.mt-5 Se ha seleccionado esta herramienta porque instala tanto el sistema gestor de bases de datos (MySQL) como una herramienta para el diseño y administrador de este gestor (MySQL Workbench). Una ventaja de la actividad propuesta es la compatibilidad garantizada del SGDB y de la herramienta de administración y diseño.

    br
    br
    .titulo-segundo#t_1_3.mt-5
      h2 1.3 Sistemas basados en MySQL

    p(data-aos="fade-up") Existen otros sistemas que son completamente compatibles 100% con MySQL, es decir, que toda base de datos que es gestionada por MySQL puede ser gestionada en otro motor de sistema de gestión de bases de datos, un ejemplo de ello es MariaDB.

    .bloque-texto-a.color-secundario.mb-5.caja_flotante_azul(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema1/9.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4.caja_escalada_hover
            p #[strong MariaDB] es un sistema de gestión de bases de datos derivado de MySQL con licencia GPL (General Public License). Es desarrollado por Michael (Monty) Widenius —fundador de MySQL—, la fundación MariaDB y la comunidad de desarrolladores de software libre (Wikipedia, 2021). Este sistema es el más usado en entornos Linux en lugar del MySQL.

    p.mt-5(data-aos="fade-up") Existen alternativas para el sistema de gestión de base de datos (SGBD) y herramientas para la gestión, administración y diseño; sin embargo, a continuación, encuentra un “Manual de instalación de MariaDB en Windows”, esto solo instala el SGBD por lo que debe instalar por aparte MySQL Workbench, para que administre las bases de datos de MariaDB:

    .tarjeta.text-white.p-5.mt-5.caja_flotante_azul(data-aos="fade-up" style="background: linear-gradient(#0f3664,rgb(57 131 199));")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.imagen_flotante_animada(src="@/assets/curso/tema1/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h4.mb-0 Manual de Instalación de MariaDB en Windows
              p.mt-2 Anexo. Manual de Instalación de MariaDB en Windows
            .col-sm-auto
              a.boton.boton--b.color-acento-secundario(:href="obtenerLink('downloads/MariaDB.pdf')" target="_blank")
                span(style="color: #12263F !important;") Descargar
                i.fas.fa-file-download(style="color: #12263F !important;")

   
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
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
.bloque-texto-a.color-secundario
  background-color: #F3F9FF !important
.title__tab_1 .pre
  background-color: #FFCA28
  padding: 1rem 1.5rem 1rem 1.5rem
  border-radius: 50%
  color: inherit
  font-weight: bold
  font-size: 1.3rem
  position: relative
  left: calc(100% - 147%)
  top: 2.3rem
.title__tab_1 .title
 background-color: #4DD0E1
 padding: 1rem 1rem 1rem 2rem
 border-radius: 30px
.title__tab_1
  transition: transform 0.4s linear
  -o-transition: transform 0.4s linear
  -ms-transition: transform 0.4s linear
  -moz-transition: transform 0.4s linear
  -webkit-transition: transform 0.4s linear
.title__tab_1:hover
  transition: transform .4s ease
  transform: scale(1.1)
.nav-link
  border: none !important
.nav-link.active .title__tab_1 .pre

.nav-link.active .title__tab_1 .title
  color: white
  background-color: #1565C0
</style>

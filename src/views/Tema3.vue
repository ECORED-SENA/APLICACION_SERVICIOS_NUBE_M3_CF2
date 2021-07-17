<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Administración de bases de datos

    br
    .p-5.row.mt-5.caja_flotante_azul(data-aos="fade-up" style="background-color:#EFF8FE")
      .col-md-8
        p(data-aos="fade-left") Las funciones de un administrador de bases de datos (Data Base Administrator, DBA) es la gestión general de la base de datos, debe conocer las reglas de la tecnología particular que en este caso sería MySQL, pero también está entre sus responsabilidades:

      .col-md-4
        figure
          img.image__1.imagen_flotante_animada(src="@/assets/curso/tema2/1.svg")

    br
    .mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF8E2")
      ul.lista-ul.mt-4.lista__2
        li(data-aos="fade-up")
          i.fas.fa-check
          |  #[strong Validar o revisar el modelado y diseño de las bases de datos:] debe concentrar su interés en los requerimientos de rendimiento y administración de índices.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  #[strong Procesos de auditoria:] identificar qué usuarios tienen acceso a qué tablas o recursos a insertar, actualizar o eliminar datos, y cuándo.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  #[strong Resguardo y recuperación de datos:] esto es hacer copias de seguridad periódicas de los datos, mantenerlos a salvo de la destrucción accidental o intencional. Además, diseñar, implementar y probar un plan de recuperación considerando que pueden presentarse problemas, y validar los datos que se pueden restaurar rápidamente (que las copias generadas sean útiles).
        li(data-aos="fade-up")
          i.fas.fa-check
          |  #[strong Planificación de capacidad:] gestionar el volumen de datos y diseñar los planes apropiados para administrarlos, esto ya que los datos crecen rápidamente y llevar un registro de la taza de este crecimiento.
        li(data-aos="fade-up")
          i.fas.fa-check
          |  #[strong Administración de cambios:] a menudo es la responsabilidad del DBA realizar el análisis de impacto antes de generar los cambios dentro de un SGDB.


    p.mt-5(data-aos="fade-up") De las anteriores actividades se puede decir que al validar o revisar el modelado y diseño ya se cuenta con la  competencia para hacerlo, al igual que la administración de cambios, cuando se vio operaciones de mantenimiento y actualización por el MySQL Workbench o por la interfaz línea de comandos.

    h5.mt-4(data-aos="fade-up") A continuación, se verá una aproximación de cómo hacer y restaurar una copia de la base de datos.

    br
    br
    .titulo-segundo#t_3_1.mt-5
      h2 3.1 Copia de seguridad de base de datos con MySQL Workbench

    p(data-aos="fade-up") Durante todo el ciclo de vida del software (desde que se construye hasta que está en operación) se necesitan operaciones de copias y restablecimiento de las bases de datos.  Es por esto que se explicará una de las formas para obtener una copia de la base de datos, tanto en estructura como de los datos.

    div.mt-5.indicador__container.container__tabs__1(active="true" data-aos="fade-up")
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title)
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Copia de seguridad de base de datos #[br] con MySQL Workbench
              .indicador--click
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  1. hacer una conexión a la base de datos
            b-card-text
              figure
                img(src="@/assets/curso/tema3/1.png")
                figcaption 1. hacer una conexión a la base de datos
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Antes de cualquier cosa se debe hacer una conexión a la base de datos si no existe dando clic en la casa y luego en el icono más “+”.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  2. Posteriormente en test connection y luego en él #[br] se escribe la contraseña del root.
            b-card-text
              figure
                img(src="@/assets/curso/tema3/2.png")
                figcaption 2. Posteriormente en test connection y luego en él se escribe la contraseña del root.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  3. Se le da doble clic a la conexión creada.
            b-card-text
              figure
                img(src="@/assets/curso/tema3/3.png")
                figcaption 3. Se le da doble clic a la conexión creada.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  4. Luego, se da clic en la pestaña administración y #[br] Data Export.
            b-card-text
              figure
                img(src="@/assets/curso/tema3/4.png")
                figcaption 4. Luego, se da clic en la pestaña administración y Data Export.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  5. Se debe seleccionar:
            b-card-text
              figure
                img(src="@/assets/curso/tema3/5.png")
                figcaption 5. Se debe seleccionar:
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Se debe seleccionar: 
                ol.lista-ol
                  li(data-aos="fade-up")
                    span.text-bold 1. 
                    |  La base de datos a respaldar
                  li(data-aos="fade-up")
                    span.text-bold 2. 
                    |  Si se va a restaurar la estructura (metadatos) o solo los datos, o solo la estructura (se selecciona estructura y datos).
                  li(data-aos="fade-up")
                    span.text-bold 3. 
                    |  La copia en un solo archivo y la ruta.
                  li(data-aos="fade-up")
                    span.text-bold 4. 
                    |  Se crea la base de datos si no existe.
                  li(data-aos="fade-up")
                    span.text-bold 5. 
                    |  Finalmente en la carpeta se generará el backup.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  6. El proceso termina diciendo que la copia ha #[br] terminado.
            b-card-text
              figure
                img(src="@/assets/curso/tema3/6.png")
                figcaption 6. El proceso termina diciendo que la copia ha terminado.

    p.mt-5(data-aos="fade-up") A continuación, se verá cómo se restablece la copia que se ha generado usando la herramienta MySQL Workbench.

    br
    br
    .titulo-segundo#t_3_2.mt-5
      h2 3.2 Restaurar una copia de seguridad con MySQL Workbench

    p(data-aos="fade-up") El proceso complementario de restablecer una copia de base de datos es fundamental para la instalación de un sistema o el restablecimiento de la operación cuando el sistema falla o se quiere volver a una versión anterior de la base de datos. Es por esto que se presentará un método sencillo para restablecer la base de datos a partir de un backup en formato SQL.

    h5.mt-4(data-aos="fade-up") Siga los siguientes pasos luego de conectar a la base de datos con MySQL Workbench como se muestra en la imagen al final.

    .mt-4.p-5.row.caja_flotante_rosada(style="background-color:#FFF8E2")
      .col-md-4
        figure
          img.p-5.imagen_flotante_animada(src="@/assets/curso/tema3/7.svg")
      .col-md-8.mt-3
        ol.lista-ol--cuadro
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 1
            |  Ingrese a la pestaña de administración.
        ol.lista-ol--cuadro
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 2
            |  Seleccione Data Import/Restore.
        ol.lista-ol--cuadro
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 3
            |  Marque la opción Import from Self-Contained File.
        ol.lista-ol--cuadro
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 4
            |  Busque el archivo generado antes.
        ol.lista-ol--cuadro
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 5
            |  Seleccione la base de datos a restaurar.
        ol.lista-ol--cuadro
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 6
            |  Dé clic en el botón Star Import.

    ImagenInfografica.color-secundario.mt-5(data-aos="fade-up")

      template(v-slot:imagen)
        figure
          img.image_floating(src='@/assets/curso/tema3/8.svg', alt='')

      .tarjeta.color-acento-botones.p-3(x="5%" y="66%")
        h5.mb-0 1. Ingrese a la pestaña de administración.

      .tarjeta.color-acento-botones.p-3(x="12%" y="33%")
        h5.mb-0 2. Seleccione Data Import/Restore.

      .tarjeta.color-acento-botones.p-3(x="28%" y="41%")
        h5.mb-0 3. Marque la opción Import from Self-Contained File.

      .tarjeta.color-acento-botones.p-3(x="97%" y="37%")
        h5.mb-0 4. Busque el archivo generado antes.

      .tarjeta.color-acento-botones.p-3(x="30%" y="52%")
        h5.mb-0 5. Seleccione la base de datos a restaurar.

      .tarjeta.color-acento-botones.p-3(x="92%" y="94%")
        h5.mb-0 6. Dé clic en el botón Star Import.


    p.mt-5(data-aos="fade-up") Finalmente, hasta este punto puede tener la seguridad de que está en capacidad de respaldar y restablecer la base de datos por lo menos en un entorno de desarrollo y producción para bases pequeñas. Este proceso le puede servir para bases de datos grandes en las que debe usar la interfaz de comando “línea” con el comando “source”.  Esto debido a que si la copia de seguridad es del tamaño de gigas MySQL Workbench no podrá abrirlo y puede bloquearse, mientras que por la interfaz de línea de comando el tamaño de la copia puede ser tan grande como se desee.


</template>
<script>
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
  height: 20rem
@media (max-width: 950px)
  .image__1
    position: inherit
.lista__1 i
  color: #FFA726
@font-face
  font-family: "Inconsolata"
  src: url("/fonts/Inconsolata-VariableFont_wdth,wght.ttf")
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
.lista__2 li
  display: block
.lista-ol--cuadro__vineta
  background-color: #FFCA28
  color: inherit
  font-weight: bold
  border-radius: 30px
.img-infografica__item__dot:before, .img-infografica__item__dot:after
  opacity: 1 !important
  background-color: #4DD0E1 !important
</style>

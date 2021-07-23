export default {
  global: {
    componenteFormativo: 'Modelo entidad relación',
    descripcionCurso:
      'Una vez conocidos los principios del diseño de bases de datos relacionales se hace importante fortalecer las habilidades de análisis, ya que diseñar un modelo de datos no solamente es una tarea que intenta cumplir un conjunto de requisitos funcionales de un sistema informático, sino también el requerimiento de rendimiento, escalabilidad y flexibilidad. <br></br> Este componente brinda una serie de ejercicios prácticos de análisis y diseño a la vez que se profundiza en los temas de modelado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Establecer un entorno de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sistema gestor de bases de datos MySQL',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistema de diseño y gestión de bases de datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sistemas basados en MySQL',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ejercicios de diseño e implementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Análisis y diseño sistema de facturación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Identificación de sentencias DDL',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Generar la base de datos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Operaciones de mantenimiento y actualización',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Actualización por interfaz de línea de comandos',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Análisis y diseño gestión de matrículas',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Administración de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Copia de seguridad de base de datos con MySQL Workbench',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Restaurar una copia de seguridad con MySQL Workbench',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Vertex42. (s.f.). Modelo de facturas gratis.',
      link: 'https://www.vertex42.com/es/excel-factura.html',
    },
    {
      referencia:
        'Wikipedia. (2021). MariaDB. Wikipedia, la enciclopedia libre.',
      link:
        'https://es.wikipedia.org/w/index.php?title=MariaDB&oldid=135391766',
    },
    {
      referencia: 'Wikipedia. (2021). MySQL. Wikipedia, la enciclopedia libre.',
      link: 'https://es.wikipedia.org/wiki/MySQL',
    },
  ],
  glosario: [
    {
      termino: 'Base datos',
      significado:
        'Conjunto ordenado y finito de operaciones que permite hallar la solución de un problema.',
    },
    {
      termino: 'DBA',
      significado:
        ' data base administrador es el rol que diseña un ingeniero responsable de las bases de datos en una organización. ',
    },
    {
      termino: 'Diccionario de datos',
      significado:
        'Conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
    },
    {
      termino: 'Metadatos',
      significado:
        'Conjunto unitario de instrucciones que permite a una computadora realizar funciones diversas como el tratamiento de textos, el diseño de gráficos, la resolución de problemas matemáticos y el manejo de bancos de datos.',
    },
    {
      termino: 'Modelo conceptual',
      significado:
        'Enfocado en prestar las entidades, los atributos y las relaciones entre dualidades con su multiplicidad.',
    },
    {
      termino: 'Modelo de datos',
      significado:
        'Representación de la base de datos a través de un diagrama.',
    },
    {
      termino: 'Multitenant',
      significado:
        'Tenencia múltiple o multiinquilino hace referencia a aplicaciones que se diseñan para soportar el mismo sistema para distintos usuarios o empresas, a pesar de estar en la misma base de datos y usar el mismo código fuente el sistema sabe distinguir entre los datos de un usuario o empresa de los otros, sin confundirlos.',
    },
  ],
  complementario: [
    {
      texto:
        'Bustos, H. (2019). Ejemplo introductorio DDL+DML (MySQL y Workbench) [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xwfzw9paFwo',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Peter Emerson Pinchao Solís',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

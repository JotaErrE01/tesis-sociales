

export const optionsList = {
  inicio: [
    {
      id: 1,
      title: 'Grandes imperios antiguos',
      to: '/inicio/1',
      childrenRoutes: [
        {
          id: 'imperiosOrientales',
          title: 'Imperios del Medio Oriente, Egipto',
          desc: `Alrededor del río Nilo surgió, hacia el año 3100 a. C., un imperio que unificó bajo la autoridad de un solo rey, llamado el faraón, a los pueblos que habitaban desde el desierto del
          Sahara hasta la península del Sinaí.
          La cultura egipcia desarrolló los jeroglíficos como forma de escritura, y hasta hoy perduran algunas de las pirámides, sepulturas de faraones hechas por sus sucesores para reforzar su pretendido carácter divino. Miles de miles de esclavos las construían, para depositar en su interior, en cámaras y pasadizos secretos, los cuerpos momificados. Este imperio duró más de dos mil años, hasta los mismos días del esplendor de Roma`,
          img: 'https://fundacionio.com/wp-content/uploads/2020/10/Egipto.png',
        },
        {
          id: 'imperiosAsia',
          title: 'Los Antiguos Imperios del Asia: China',
          desc: ` China es una potencia mundial y su desarrollo económico en los últimos 20 años ha sido impresionante. El país más poblado del mundo, con 1.325 millones de habitantes (en 2007), es hoy también el primer exportador, la segunda economía y el cuarto por su extensión territorial (9,6
          millones de km2 ).
          A su vez, la historia de la antigua China constituye la clave de la historia de toda el Asia. No solo que allí hubo presencia de homínidos hace más de medio millón de años, sino que fue, como ya vimos, uno de los primeros centros mundiales de domesticación de plantas y animales.`,
          desc2: 'La producción alimentaria en China llevó a los otros “hitos de la civilización”: alfarería, metalurgia, ciudades, Estados, imperios. En el III milenio a. C. nació la magnífica tradición china de la metalurgia del bronce y, alrededor de 500 a. C., la primera producción de hierro fundido del mundo. En la larga lista de inventos chinos figuran, además, las compuertas para canales, la pólvora, la cometa, la brújula, los tipos movibles, el papel, la porcelana, la imprenta, el timón de popa, la carretilla y muchos más.',
          img: 'https://www.absolutviajes.com/wp-content/uploads/2008/11/arquitectura-china-antigua.png.webp',
        },
        {
          id: 'imperioRomano',
          title: 'El Imperio Romano',
          desc: `Al momento de su apogeo, el Imperio romano se extendía desde la península ibérica al Éufrates y desde Gran Bretaña hasta el desierto del Sahara. Fue el mayor imperio que vio la antigüedad y dejó profunda huella en la cultura occidental. Producto de una organización militar y una eficacia administrativa sin rival, el Imperio romano llegó a dominar todo el Occidente y el Medio Oriente. Durante más de un siglo (90-230 d. C.), hubo tal calma y prosperidad que el período se conoce como la Paz Romana. Pero las disputas políticas y la anarquía militar debilitaron a Roma. Después de siete siglos, cayó ante la rebelión interna y los ataques externos de pueblos del norte de Europa.`,
          desc2: '',
          img: 'https://elcuestor.files.wordpress.com/2015/09/el-suicidio-financiero-del-imperio-romano-en-cc3a1mara-lenta-subir-al-blog.jpg',
        }
      ]
    },
    {
      id: 2,
      title: 'Inicio 2',
      to: '/inicio/2',
      childrenRoutes: [
        {
          id: 'cristianismo',
          title: 'Surgimiento del cristianismo',
          to: '/inicio/1/cristianismo',
          desc: '',
          desc2: '',
          img: '',
        }
      ]
    },
  ],
  videos: [
    {
      id: 1,
      title: 'La Prehistoria',
      url: 'https://www.youtube.com/embed/G2tUkEvo_lM',
      to: '/videos/1',
    },
    {
      id: 2,
      title: 'Historia de las Ciencias Sociales',
      url: 'https://www.youtube.com/embed/z8kMYbqL9Uc',
      to: '/videos/2',
    },
    {
      id: 3,
      title: 'La Edad Media',
      url: 'https://www.youtube.com/embed/DjdFLJT5lhY',
      to: '/videos/3',
    },
    {
      id: 4,
      title: 'Los Olmecas',
      url: 'https://www.youtube.com/embed/m9ezUubZb28',
      to: '/videos/4',
    },
    {
      id: 5,
      title: '¿Qué diferencia a los Aztecas de los Mayas',
      url: 'https://www.youtube.com/embed/9yc4JIMcZQg',
      to: '/videos/5',
    },
    {
      id: 6,
      title: 'Los Incas',
      url: 'https://www.youtube.com/embed/i4a7ukZxwSs',
      to: '/videos/6',
    }
  ],
  juegos: [
    {
      id: 1,
      title: 'El Continente Americano',
      url: 'https://es.educaplay.com/juego/5873169-continente_americano.html',
      to: '/juegos/1',
    },
    {
      id: 2,
      title: 'Época Aborigen en América',
      url: 'https://es.educaplay.com/juego/11167972-epoca_aborigen_en_america.html',
      to: '/juegos/2',
    },
    {
      id: 3,
      title: '¿Sabes la ubicacion de las civilizaciones antigüas',
      url: 'https://es.educaplay.com/juego/11168029-el_continente_americano.html',
      to: '/juegos/3',
    }
  ]
};

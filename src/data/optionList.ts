

export const optionsList = {
  inicio: [
    {
      id: 1,
      title: 'Grandes imperios antiguos',
      to: '/inicio/1',
      childrenRoutes: [
        {
          id: 'imperiosAsia',
          title: 'Los antiguos imperios del Asia: China, India',
          to: '/inicio/1/imperiosAsia',
        },
        {
          id: 'imperioRomano',
          title: 'Imperio Romano',
          to: '/inicio/1/imperioRomano',
        },
        {
          id: 'cristianismo',
          title: 'Surgimiento del cristianismo',
          to: '/inicio/1/cristianismo',
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

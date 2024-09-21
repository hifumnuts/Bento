// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'hifum',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '8ef8aad31e04f44c1560f2a3751a9888',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '32.794044',
  defaultLongitude: '34.989571',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '3',
      name: 'Roblox',
      icon: 'meh',
      link: 'https://roblox.com',
    },
    {
      id: '4',
      name: 'Googledrive',
      icon: 'hard-drive',
      link: 'https://drive.google.com/drive/my-drive',
    },
    {
      id: '5',
      name: 'twitter',
      icon: 'glasses',
      link: 'https://twitter.com',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'book-open',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Webtop',
        link: 'https://www.webtop.co.il/v2/?',
      },
      {
        name: 'Classroom',
        link: 'https://classroom.google.com/u/1/h',
      },
      {
        name: 'campusIL',
        link: 'https://campus.gov.il/',
      },
      {
        name: 'petel',
        link: 'https://petel.stweizmann.org.il/',
      },
    ],
    secondList: [
      {
        name: 'Netflix',
        link: 'https://netflix.com',
      },
      {
        name: 'gogo',
        link: 'https://anitaku.to',
      },
      {
        name: 'MyAnimeList',
        link: 'https://myanimelist.net',
      },
      {
        name: 'FMHY',
        link: 'https://fmhy.net/',
      },
    ],
  },
};

export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  headerIcon: 'cat',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  faq: {
    title: '',
    image: 'https://www.bigtruck.in/assets/img/faq-banner.jpg',
  },
  info: {
    title: 'Info',
    image: 'https://www.mysmartgroup.co.uk/wp-content/uploads/2017/04/header-bg-test.png',
  },
  contact: {
    title: '',
    image: 'https://lh3.googleusercontent.com/proxy/qC5YtIBMsXqrJd2NqMWnAr-Xi4ng0hMjzW0Zp436v1LhxxXBi9X_GLMe9t_NfEisM_TstLsECEeOjyW8ax9du3qajI2R-iDMzmqEwh2Z8dSJVBS3F0cYKKYePQfEXbeDgF3F87WIyjoUznsK5-x2xhKoBgZr8w',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
  infoContent: {
    header: 'About',
    content: 'We are new generation team',
  },
  faqcontent: [
    {
      id: 1,
      question: 'How old are you?',
      answer: '26',
    },
    {
      id: 2,
      question: 'What programming language you like the most?',
      answer: 'JS',
    },
    {
      id: 3,
      question: 'Do you like dogs?',
      answer: 'Yes',
    },
  ],

  conactInfo: {
    mail: 'ywyszynski@gmail',
    phone: '+48 888 888 888',
  },
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },

  {
    id: 'list-2',
    title: 'Books to read',
    description: 'Interesting books',
    image: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg',
  },

  {
    id: 'list-3',
    title: 'Games',
    description: 'Cool games',
    image: 'https://www.tabletowo.pl/wp-content/uploads/2020/01/Diesel_blog_epic-games-store-update_EGS_Social_Update_News-2560x1440-128a69890d92407b815582c1deba54450e5645f9.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
    index: 0,
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    index: 1,
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
    index: 1,
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
    index: 0,
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
    index: 0,
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
    index: 1,
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;

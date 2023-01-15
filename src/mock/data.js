import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Anthony Rende', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portoflio', // e.g: Welcome to my website
  image: '../images/portfolio.png',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Anthony',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'game-of-life-optimized.gif',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  paragraphFour: '',
  resume: 'https://resume.creddle.io/resume/8hh4dzy7tmx',
  url: 'https://www.openprocessing.org/sketch/955851',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'bonk-app.png',
    title: '$BONK!',
    subtitle: 'Full-Stack',
    info:
      ' $BONK is a meme-coin on Solana Blockchain that was created as a joke. Burning these tokens increases its value, so the idea is to burn as many as possible, which this app does and tracks the amount of burns and $BONK in your wallet',
    info2: 'Tech Stack: NextJS | TypeScript | Pocketbase | Solana ',
    info3:
      '‣ Full-stack web app in NextJS / Pocketbase stores your wallet as a user and tracks the amount of $BONK in your wallet and the amount of burns',
    info4:
      '‣ Integrated Solana Blockchain to interact with the $BONK contract to send and receive transactions  ',
    info5: '‣ Hosted on Linode, deployed to Vercel and connected to a custom domain',
    info6: '',
    info7: '',
    info8: '',
    url: 'https://bonk-ecru.vercel.app/',
    // repo: 'https://github.com/labs17-WellDone/backend',
  },
  {
    id: uuidv1(),
    img: 'musicplayer.png',
    title: 'Chill Hop Player',
    subtitle: 'Front-End',
    info:
      'Chill Hop Player streams unlicensed free music known as Chill Hop. Users have access to a library of songs with the option to purchase them on various platforms to support the artists',
    info2: 'Tech Stack: React | SCSS/SASS ',
    info3:
      '‣ Built a responsive web app in React, with clean UI and smooth animations for a sleek user experience',
    info4:
      '‣ Implemented State management via React hooks to distribute and lift state when necessary across the app',
    url: 'https://chillhop-player.netlify.app/',
    repo: 'https://github.com/jazz-code/music-player',
  },
  {
    id: uuidv1(),
    img: 'mud.png',
    title: 'Multi-User-Dungeon (MUD)',
    subtitle: 'Back-End',
    info:
      'Players can read or view descriptions of rooms, objects, and actions performed in the virtual world',
    info2: 'Tech Stack: React | Django | REST Framework| SQL',
    info3:
      '‣ Learned Django with no experience of Django and implemented an entire Django backend within 4 days',
    info4:
      '‣ Created a world-map generating algorithm with randomly assorted rooms and items via pair-programming with another person',
    info5:
      '‣ Deployed to heroku in a time crunch under pressure to finish the project within a few short days',
    url: 'https://boring-liskov-58c04c.netlify.com/',
    repo: 'https://github.com/CS24-Build-Week-1/Back-End',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rende718@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://www.twitter.com/anthonyRende_',
    },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: 'https://codepen.io/Jazz-code',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anthony-rende/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://www.github.com/jazz-code',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

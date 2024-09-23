export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'MultiBank Group Trading Web App',
    des: 'Multibank FX web app offers a comprehensive trading platform tailored for forex, CFD',
    img: '/p1.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: 'https://multibankfx.com/en-AE',
  },
  {
    id: 2,
    title: 'Primex Capital Trading Web App',
    des: 'comprehensive platform designed for forex and CFD trading, utilizing industry-standard platforms such as MetaTrader 4 (MT4), MetaTrader 5 (MT5), and cTrader. It supports trading on various instruments',
    img: '/p2.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://primexcapital.com/en',
  },
  {
    id: 3,
    title: 'Global Trade Capital Trading Web App',
    des: 'comprehensive platform designed for forex and CFD trading, utilizing industry-standard platforms such as MetaTrader 4 (MT4), MetaTrader 5 (MT5), and cTrader. It supports trading on various instruments',
    img: '/p3.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://gtcfx.com',
  },
];

export const testimonials = [
  {
    quote:
      'Working with Hassan was an absolute pleasure! They delivered a stunning, user-friendly website that exceeded our expectations. Their attention to detail, professionalism, and ability to translate our vision into reality was remarkable. We couldn’t be happier with the final result and highly recommend Hassan Jarko for any web development needs!',
    name: 'Ahmad Jarrar',
    title: 'GTCFX Chairman Advisor',
    imgSrc: '/jarrar.jpg',
  },
  {
    quote:
      'Hassan did an incredible job on our website! Their technical expertise, creativity, and responsiveness made the whole process smooth and enjoyable. They understood our goals perfectly and delivered a polished, modern site that works flawlessly. We are beyond satisfied with the outcome and would highly recommend Hassan Jarko for any web development project!',
    name: 'Mubashar Saeed',
    title: 'Chief Executive Officer at Primex Capital',
    imgSrc: '/mubashar1.jpg',
  },
  {
    quote:
      'Hassan was outstanding in developing our mobile app! They brought our ideas to life with a seamless, intuitive design and smooth functionality. Their communication and commitment to delivering a high-quality product were exceptional. We couldn’t be happier with the result and would recommend Hassan Jarko to anyone looking for top-notch mobile app development!',
    name: 'Ismail Jaidouri',
    title: 'Chairman at Norrdex Travels',
    imgSrc: '/ismail.jpg',
  },
];

export const companies = [
  {
    id: 1,
    name: 'React',
    img: '/react.svg',
    nameImg: '/cloudName.svg',
  },

  {
    id: 3,
    name: 'Node',
    img: '/node.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'Redis',
    img: '/redis.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
  {
    id: 2,
    name: 'Strapi',
    img: '/strapi.svg',
    nameImg: '/appName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Senior Full Stack Engineer',
    desc: 'Seamless integration and optimization of front-end and back-end services for scalable, maintainable applications..',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    desc: 'Built and maintained both client-side and server-side functionality to deliver efficient, user-friendly web applications.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Front End Developer',
    desc: 'Created responsive, intuitive user interfaces that enhance user experience and performance across devices.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Java Script Team Lead',
    desc: 'Guide the development team in building scalable, efficient JavaScript applications while ensuring code quality, best practices, and timely delivery.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    href: 'https://github.com/jarko1985',
  },
  {
    id: 3,
    img: '/link.svg',
    href: 'https://www.linkedin.com/in/hassan-jarko-3a634949/',
  },
];

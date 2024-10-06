export interface Project {
  id: Number;
  title: string;
  tecnologies: string[];
  thumbnail: string;
  url: string;
}

export const skills = {
  frontend: ['Angular', 'React', 'Typescript', 'Tailwind', 'SASS'],
  backend: ['PHP', 'Laravel', 'NodeJs', 'Express', 'MySql', 'Postgres'],
  other: ['C#', 'Unity', 'Pandas', 'Python', 'Figma'],
};

export const projects = [
  {
    id: 1,
    title: 'Twitch Clone',
    tecnologies: ['NEXT', 'TS', 'Tailwind', 'LocalStorage', 'Phosphor'],
    thumbnail:
      'https://static.wikia.nocookie.net/liberproeliis/images/2/28/JoJo%E2%80%99s-Bizarre-04.jpg/revision/latest?cb=20161128222812&path-prefix=pt-br',
    url: 'https://github.com/h3nrey/twitch_clone',
  },
  {
    id: 2,
    title: 'Find Your Morty',
    tecnologies: ['React', 'Js', 'Tailwind', 'Axios', 'radix'],
    thumbnail:
      'https://static.wikia.nocookie.net/liberproeliis/images/2/28/JoJo%E2%80%99s-Bizarre-04.jpg/revision/latest?cb=20161128222812&path-prefix=pt-br',
    url: 'https://github.com/h3nrey/FindYourMorty',
  },
  {
    id: 3,
    title: 'FindYourDuo',
    tecnologies: [
      'React',
      'Ts',
      'Tailwind',
      'Axios',
      'NodeJs',
      'Radix',
      'Prisma',
      'Express',
    ],
    thumbnail:
      'https://static.wikia.nocookie.net/liberproeliis/images/2/28/JoJo%E2%80%99s-Bizarre-04.jpg/revision/latest?cb=20161128222812&path-prefix=pt-br',
    url: 'https://github.com/h3nrey/FindYourDuo',
  },
  {
    id: 4,
    title: 'Ghibli Cinema',
    tecnologies: ['Js', 'EJS', 'SASS', 'NodeJs', 'Axios'],
    thumbnail:
      'https://static.wikia.nocookie.net/liberproeliis/images/2/28/JoJo%E2%80%99s-Bizarre-04.jpg/revision/latest?cb=20161128222812&path-prefix=pt-br',
    url: 'https://github.com/h3nrey/GhibliCinema',
  },
  {
    id: 5,
    title: 'PokeCatalog',
    tecnologies: ['Js', 'EJS', 'SASS', 'NodeJs', 'Axios'],
    thumbnail:
      'https://static.wikia.nocookie.net/liberproeliis/images/2/28/JoJo%E2%80%99s-Bizarre-04.jpg/revision/latest?cb=20161128222812&path-prefix=pt-br',
    url: 'https://github.com/h3nrey/pokecatalog',
  },
];

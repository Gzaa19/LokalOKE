const asset = (p) => new URL(`../assets/${p}`, import.meta.url).href;

export const teamMembers = [
  {
    name: 'Gaza Al Ghozali',
    role: 'Web Development',
    imgSrc: asset('gjaaa.jpg'),
    github: 'https://github.com/Gzaa19',
    linkedin: 'https://linkedin.com/in/gazaalghozali',
    instagram: 'https://instagram.com/gazaalghozali',
  },
  {
    name: 'Fariq Faqy Rozzaqy',
    role: 'Web Development',
    imgSrc: asset('Fariq.jpg'),
    github: 'https://github.com/fariqfqy',
    linkedin: 'https://linkedin.com/in/fariqfqy',
  },
  {
    name: 'Fauzan Hadi',
    role: 'Web Development',
    imgSrc: asset('Fauzan.jpg'),
    github: 'https://github.com/fauzanhadi',
    linkedin: 'https://linkedin.com/in/fauzanhadi',
    instagram: 'https://instagram.com/fauzanhadi',
  }
];
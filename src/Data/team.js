const asset = (p) => new URL(`../assets/${p}`, import.meta.url).href;

export const teamMembers = [
  {
    name: 'Gaza Al Ghozali',
    role: 'Web Development',
    imgSrc: asset('gjaaa.jpg'),
    github: 'https://github.com/Gzaa19',
    linkedin: 'https://www.linkedin.com/in/gazaalghozali',
    instagram: 'https://www.instagram.com/gazaalghozali',
  },
  {
    name: 'Fariq Faqy Rozzaqy',
    role: 'Web Development',
    imgSrc: asset('Fariq.jpg'),
    github: 'https://github.com/fariqfaqy',
    linkedin: 'https://www.linkedin.com/in/fariq-faqy-b6208433b/',
    instagram: 'https://www.instagram.com/zzaqy._/',
  },
  {
    name: 'Fauzan Hadi',
    role: 'Web Development',
    imgSrc: asset('Fauzan.jpg'),
    github: 'https://github.com/FauzanHadi44',
    linkedin: 'https://www.linkedin.com/in/fauzanhadii/',
    instagram: 'https://www.instagram.com/fauzanhadiiiii/',
  }
];
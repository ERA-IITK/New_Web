// PastHeadsSection.jsx
import React from 'react';
import TeamHeadCard from './TeamHeadCard'; // Same card component used by current heads

// Example data for past heads (update to real data/images)
import pasthead1Img from '../assets/team/21head1.jpeg';
import pasthead2Img from '../assets/team/21head2.jpeg';
import pasthead3Img from '../assets/team/21head3.jpeg';
import pasthead4Img from '../assets/team/21head4.jpeg';

const heads2023_24 = [
  {
    name: 'Dhruva Singh Sachan',
    phone: '9621688942',
    email: 'dhruvass21@iitk.ac.in',
    image: pasthead1Img,
    githubLink: 'https://github.com/dhruv0x0x0',
    instagramLink: 'https://www.instagram.com/dhruv0x0/',
    linkedinLink: 'https://www.linkedin.com/in/dhruva-singh-sachan-366b17227/',
  },
  {
    name: 'Emaad Ahmed',
    phone: '8273019875',
    email: 'emaada21@iitk.ac.in',
    image: pasthead2Img,
    githubLink: 'https://github.com/pasthead2',
    instagramLink: 'https://www.instagram.com/emmddxx/',
    linkedinLink: 'https://www.linkedin.com/in/emaadahmedx4/',
  },
  {
    name: 'Kartik Kulkarni',
    phone: '9175009924',
    email: 'kartik21@iitk.ac.in',
    image: pasthead3Img,
    githubLink: 'https://github.com/kartik-iitk',
    instagramLink: 'https://www.instagram.com/kartikkulkarni27/',
    linkedinLink: 'https://www.linkedin.com/in/kartikkulkarni23/',
  },
  {
    name: 'Rishi Agarwal',
    phone: '7071377085',
    email: 'rishi21@iitk.ac.in',
    image: pasthead4Img,
    githubLink: 'https://github.com/LegendaryGene',
    instagramLink: 'https://www.instagram.com/_rishi_agarwal_/',
    linkedinLink: 'https://www.linkedin.com/in/-rishi-agarwal-/',
  },
];
// 2022-2023 Data (replace or update with actual 2022-23 heads)
import pasthead5Img from '../assets/team/y20_head1.png';
import pasthead6Img from '../assets/team/y20_head2.png';
import pasthead7Img from '../assets/team/y20_head3.png';
import pasthead8Img from '../assets/team/y20_head4.png';
import pasthead9Img from '../assets/team/y20_head5.png';

const heads2022_23 = [
  {
    name: 'Nishi Mehta',
    phone: '9998218309',
    email: 'nishim20@iitk.ac.in',
    image: pasthead5Img,
    githubLink: 'https://github.com/pastheadA',
    instagramLink: 'https://www.instagram.com/pastheadA/',
    linkedinLink: 'https://www.linkedin.com/in/pastheadA/',
  },
  {
    name: 'Shubham Mittal',
    phone: '6239930703',
    email: 'N/A',
    image: pasthead6Img,
    githubLink: 'https://github.com/pastheadB',
    instagramLink: 'https://www.instagram.com/pastheadB/',
    linkedinLink: 'https://www.linkedin.com/in/pastheadB/',
  },
  {
    name: 'Aditya Jain',
    phone: '8700953230',
    email: 'adityajain20@iitk.ac.in',
    image: pasthead7Img,
    githubLink: 'https://github.com/pastheadB',
    instagramLink: 'https://www.instagram.com/pastheadB/',
    linkedinLink: 'https://www.linkedin.com/in/pastheadB/',
  },
  {
    name: 'Tejas Chikoti',
    phone: '+1(412)8675244',
    email: 'chikoti20@iitk.ac.in',
    image: pasthead8Img,
    githubLink: 'https://github.com/pastheadB',
    instagramLink: 'https://www.instagram.com/pastheadB/',
    linkedinLink: 'https://www.linkedin.com/in/pastheadB/',
  },
  {
    name: 'Yukkta Seelam',
    phone: '8660756781',
    email: 'yukktas20@iitk.ac.in',
    image: pasthead9Img,
    githubLink: 'https://github.com/pastheadB',
    instagramLink: 'https://www.instagram.com/pastheadB/',
    linkedinLink: 'https://www.linkedin.com/in/pastheadB/',
  },
];
const PastHeadsSection = () => {
  return (
    <section className="w-full flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-6 text-white">2023-2024</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {heads2023_24.map((head) => (
          <TeamHeadCard
            key={head.name}
            name={head.name}
            phone={head.phone}
            email={head.email}
            image={head.image}
            githubLink={head.githubLink}
            instagramLink={head.instagramLink}
            linkedinLink={head.linkedinLink}
          />
        ))}
      </div>
      {/* 2022-2023 Heading */}
      <h2 className="text-3xl font-bold mb-6 text-white">2022-2023</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {heads2022_23.map((head) => (
          <TeamHeadCard
            key={head.name}
            name={head.name}
            phone={head.phone}
            email={head.email}
            image={head.image}
            githubLink={head.githubLink}
            instagramLink={head.instagramLink}
            linkedinLink={head.linkedinLink}
          />
        ))}
      </div>

    </section>
    
  );
};

export default PastHeadsSection;

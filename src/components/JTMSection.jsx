import React from 'react';
import TeamHeadCard from './TeamHeadCard';

// Example images (replace with real images)
import jtm1Img from '../assets/team/2026_27/JTMs photos/Aadya.jpeg';
import jtm2Img from '../assets/team/2026_27/JTMs photos/Ishita.jpeg';
import jtm3Img from '../assets/team/2026_27/JTMs photos/Lakshya.jpeg';
import jtm4Img from '../assets/team/2026_27/JTMs photos/Lavanya Prakash.jpeg';
import jtm5Img from '../assets/team/2026_27/JTMs photos/Om Upadhyaya.jpeg';
import jtm6Img from '../assets/team/2026_27/JTMs photos/Praneel pathak.jpeg';
import jtm7Img from '../assets/team/2026_27/JTMs photos/Soham Nandi.jpeg';
import jtm8Img from '../assets/team/2026_27/JTMs photos/Srivanth Guntha.jpeg';
import jtm9Img from '../assets/team/2026_27/JTMs photos/Sudhanv.jpeg';
import jtm10Img from '../assets/team/2026_27/JTMs photos/Surendar.jpeg';
import jtm11Img from '../assets/team/2026_27/JTMs photos/Suryansh.jpeg';
import jtm12Img from '../assets/team/2026_27/JTMs photos/Yash jatil.jpeg';

const jtmData = [
  {
    name: 'JTM 1',
    phone: '1234567890',
    email: 'jtm1@iitk.ac.in',
    image: jtm1Img,
    githubLink: 'https://github.com/jtm1',
    instagramLink: 'https://www.instagram.com/jtm1/',
    linkedinLink: 'https://www.linkedin.com/in/jtm1/',
  },
  {
    name: 'JTM 2',
    phone: '1234567890',
    email: 'jtm2@iitk.ac.in',
    image: jtm2Img,
    githubLink: 'https://github.com/jtm2',
    instagramLink: 'https://www.instagram.com/jtm2/',
    linkedinLink: 'https://www.linkedin.com/in/jtm2/',
  },
  {
    name: 'JTM 3',
    phone: '1234567890',
    email: 'jtm3@iitk.ac.in',
    image: jtm3Img,
    githubLink: 'https://github.com/jtm3',
    instagramLink: 'https://www.instagram.com/jtm3/',
    linkedinLink: 'https://www.linkedin.com/in/jtm3/',
  },
  {
    name: 'JTM 4',
    phone: '1234567890',
    email: 'jtm4@iitk.ac.in',
    image: jtm4Img,
    githubLink: 'https://github.com/jtm4',
    instagramLink: 'https://www.instagram.com/jtm4/',
    linkedinLink: 'https://www.linkedin.com/in/jtm4/',
  },
  {
    name: 'JTM 5',
    phone: '1234567890',
    email: 'jtm5@iitk.ac.in',
    image: jtm5Img,
    githubLink: 'https://github.com/jtm5',
    instagramLink: 'https://www.instagram.com/jtm5/',
    linkedinLink: 'https://www.linkedin.com/in/jtm5/',
  },
  {
    name: 'JTM 6',
    phone: '1234567890',
    email: 'jtm6@iitk.ac.in',
    image: jtm6Img,
    githubLink: 'https://github.com/jtm6',
    instagramLink: 'https://www.instagram.com/jtm6/',
    linkedinLink: 'https://www.linkedin.com/in/jtm6/',
  },
  {
    name: 'JTM 7',
    phone: '1234567890',
    email: 'jtm7@iitk.ac.in',
    image: jtm7Img,
    githubLink: 'https://github.com/jtm7',
    instagramLink: 'https://www.instagram.com/jtm7/',
    linkedinLink: 'https://www.linkedin.com/in/jtm7/',
  },
  {
    name: 'JTM 8',
    phone: '1234567890',
    email: 'jtm8@iitk.ac.in',
    image: jtm8Img,
    githubLink: 'https://github.com/jtm8',
    instagramLink: 'https://www.instagram.com/jtm8/',
    linkedinLink: 'https://www.linkedin.com/in/jtm8/',
  },
  {
    name: 'JTM 9',
    phone: '1234567890',
    email: 'jtm9@iitk.ac.in',
    image: jtm9Img,
    githubLink: 'https://github.com/jtm9',
    instagramLink: 'https://www.instagram.com/jtm9/',
    linkedinLink: 'https://www.linkedin.com/in/jtm9/',
  },
  {
    name: 'JTM 10',
    phone: '1234567890',
    email: 'jtm10@iitk.ac.in',
    image: jtm10Img,
    githubLink: 'https://github.com/jtm10',
    instagramLink: 'https://www.instagram.com/jtm10/',
    linkedinLink: 'https://www.linkedin.com/in/jtm10/',
  },
  {
    name: 'JTM 11',
    phone: '1234567890',
    email: 'jtm11@iitk.ac.in',
    image: jtm11Img,
    githubLink: 'https://github.com/jtm11',
    instagramLink: 'https://www.instagram.com/jtm11/',
    linkedinLink: 'https://www.linkedin.com/in/jtm11/',
  },
  {
    name: 'JTM 12',
    phone: '1234567890',
    email: 'jtm12@iitk.ac.in',
    image: jtm12Img,
    githubLink: 'https://github.com/jtm12',
    instagramLink: 'https://www.instagram.com/jtm12/',
    linkedinLink: 'https://www.linkedin.com/in/jtm12/',
  },];

const JTMSection = () => {
  return (
    <section className="w-full flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-6">Junior Team Members</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {jtmData.map((jtm) => (
          <TeamHeadCard
            key={jtm.name}
            name={jtm.name}
            email={jtm.email}
            image={jtm.image}
            githubLink={jtm.githubLink}
            instagramLink={jtm.instagramLink}
            linkedinLink={jtm.linkedinLink}
          />
        ))}
      </div>
    </section>
  );
};

export default JTMSection;
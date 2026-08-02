import React from 'react';
import TeamHeadCard from './TeamHeadCard';

// Example images (replace with real images)
import teamhead1Img from '../../assets/team/2026_27/Heads+STMs photos/aayush.jpeg';
import teamhead2Img from '../../assets/team/2026_27/Heads+STMs photos/Arnab Datta.jpeg';
import teamhead3Img from '../../assets/team/2026_27/Heads+STMs photos/pranesh.jpeg';
import teamhead4Img from '../../assets/team/2026_27/Heads+STMs photos/Rattandeep-Singh-Puar.jpeg';
import teamhead5Img from '../../assets/team/2026_27/Heads+STMs photos/Sushil_Krishna_K.jpeg';

const teamHeadsData = [
  {
    name: 'Aayush Gajeshwar',
    email: 'aayushk24@iitk.ac.in',
    image: teamhead1Img,
    githubLink: 'https://github.com/AG3106',
    instagramLink: 'Not on Instagram',
    linkedinLink: 'https://www.linkedin.com/in/aayush-gajeshwar-313017331'
  },
  {
    name: 'Arnab Datta',
    email: 'arnabd24@iitk.ac.in',
    image: teamhead2Img,
    githubLink: 'https://github.com/DattaArnab',
    instagramLink: 'https://www.instagram.com/24arnab/',
    linkedinLink: 'https://www.linkedin.com/in/arnab-datta-136290317/'
  },
  {
    name: 'Pranesh S',
    email: 'pranesh24@iitk.ac.in',
    image: teamhead3Img,
    githubLink: 'https://github.com/Pranesh-hub/',
    instagramLink: 'https://instagram.com/01pranesh',
    linkedinLink: 'https://www.linkedin.com/in/pranesh-s-yes'
  },
  {
    name: 'Rattandeep Singh Puar',
    email: 'rattandeep24@iitk.ac.in',
    image: teamhead4Img,
    githubLink: 'https://github.com/Rattandeep-Singh',
    instagramLink: 'Not on Instagram',
    linkedinLink: 'https://www.linkedin.com/in/rattandeep-singh-puar-1a473a1b9',
  },
  {
    name: 'Sushil Krishna K',
    email: 'sushilk24@iitk.ac.in',
    image: teamhead5Img,
    githubLink: 'https://github.com/k-sushil78569',
    instagramLink: 'Not on Instagram',
    linkedinLink: 'https://www.linkedin.com/in/sushil-krishna-8170a2210/'
  },
];

const TeamHeadsSection = () => {
  return (
    <section className="w-full flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-6">Team Heads and Senior Team Members</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {teamHeadsData.map((th) => (
          <TeamHeadCard
            key={th.name}
            name={th.name}
            email={th.email}
            image={th.image}
            githubLink={th.githubLink}
            instagramLink={th.instagramLink}
            linkedinLink={th.linkedinLink}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamHeadsSection;

import React from 'react';
import TeamHeadCard from './TeamHeadCard';

// Example images (replace with real images)
import teamhead1Img from '../assets/team/2026_27/Heads+STMs photos/Rattandeep-Singh-Puar.jpg';

const teamHeadsData = [
  {
    name: 'Rattandeep Singh Puar',
    phone: '9289077004',
    email: 'mayanka22@iitk.ac.in',
    image: teamhead1Img,
    githubLink: 'https://github.com/Mayank534',
    instagramLink: 'https://www.instagram.com/_.mayank_agrawal._/',
    linkedinLink: 'https://www.linkedin.com/in/mayank-agrawal-209085254/',
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

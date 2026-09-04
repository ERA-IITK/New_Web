import React from 'react';
import TeamHeadCard from './TeamHeadCard';

// Example images (replace with real images)
import teamhead1Img from '../assets/team/head1.jpg';
import teamhead2Img from '../assets/team/head2.jpeg';
import teamhead3Img from '../assets/team/head3.jpeg';

const teamHeadsData = [
  {
    name: 'Mayank Agrawal',
    phone: '9289077004',
    email: 'mayanka22@iitk.ac.in',
    image: teamhead1Img,
    githubLink: 'https://github.com/Mayank534',
    instagramLink: 'https://www.instagram.com/_.mayank_agrawal._/',
    linkedinLink: 'https://www.linkedin.com/in/mayank-agrawal-209085254/',
  },
  {
    name: 'Nikhil Gupta',
    phone: '7982273730',
    email: 'nikhilg@iitk.ac.in',
    image: teamhead2Img,
    githubLink: 'https://github.com/nikhilg2603',
    instagramLink: 'https://www.instagram.com/nikhil_gupta_36/',
    linkedinLink: 'https://www.linkedin.com/in/nikhil-gupta-970710279/',
  },
  {
    name: 'Debraj Karmakar',
    phone: '9470961409',
    email: 'debrajk@iitk.ac.in',
    image: teamhead3Img,
    githubLink: 'https://github.com/debrajk22',
    instagramLink: 'https://www.instagram.com/debraj___k/',
    linkedinLink: 'https://www.linkedin.com/in/debraj-karmakar-a3758a255/',
  },
];

const TeamHeadsSection = () => {
  return (
    <section className="w-full flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-6">Team Heads</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {teamHeadsData.map((th) => (
          <TeamHeadCard
            key={th.name}
            name={th.name}
            phone={th.phone}
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

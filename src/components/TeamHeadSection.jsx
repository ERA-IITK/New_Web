import React from 'react';
import TeamHeadCard from './TeamHeadCard';

// Example images (replace with real images)
import teamhead1Img from '../assets/team/22head1.jpg';
import teamhead2Img from '../assets/team/22head2.jpeg';
import teamhead3Img from '../assets/team/22head3.jpeg';

const teamHeadsData = [
  {
    name: 'Arbaaz Tanveer',
    phone: 'xxxxxxxxxx',
    email: 'arbaazt23@iitk.ac.in',
    image: teamhead1Img,
    githubLink: 'https://github.com/#',
    instagramLink: 'https://www.instagram.com/#',
    linkedinLink: 'https://www.linkedin.com/in/#',
  },
  {
    name: 'Vihaan Sapra',
    phone: 'xxxxxxxxxx',
    email: 'svihaan23@iitk.ac.in',
    image: teamhead2Img,
    githubLink: 'https://github.com/#',
    instagramLink: 'https://www.instagram.com/#',
    linkedinLink: 'https://www.linkedin.com/in/#',
  },
  {
    name: 'Himesh Pratap Singh',
    phone: 'xxxxxxxxxx',
    email: 'himeshps23@iitk.ac.in',
    image: teamhead3Img,
    githubLink: 'https://github.com/#',
    instagramLink: 'https://www.instagram.com/#',
    linkedinLink: 'https://www.linkedin.com/in/#',
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

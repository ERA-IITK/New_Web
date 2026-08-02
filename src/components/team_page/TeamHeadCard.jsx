import React from 'react';

// Replace these icon imports with your actual icon paths
import githubIcon from '../../assets/team/github.jpg';
import instagramIcon from '../../assets/team/instagram.jpg';
import linkedinIcon from '../../assets/team/linkedin.jpg';

const TeamHeadCard = ({
    name,
    email,
    image,
    githubLink,
    instagramLink,
    linkedinLink,
  }) => {
    return (
      <div className="relative group w-[250px] h-[350px] cursor-pointer">
        {/* Team head image */}
        <img
          src={image}
          alt={name}
          className="w-full h-[305px] object-cover rounded-t-lg"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-black/75 py-3 px-2">
          <p className="text-white font-semibold text-center">
            {name}
          </p>

          <p className="text-gray-300 text-sm text-center">
            {email}
          </p>
        </div>
  
        {/* Dark overlay & details (hidden by default, shown on hover) */}
        <div
          className="absolute inset-0 bg-black/80 rounded-lg flex flex-col
                     justify-center items-center text-center 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {/* <p className="text-white text-lg font-semibold">{name}</p>
          <p className="text-white text-sm">{email}</p> */}
  
          {/* Social Icons with white square backgrounds */}
          <div className="flex space-x-4 mt-4">
            {/* GitHub */}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <div className="bg-white w-8 h-8 flex justify-center items-center 
                 hover:scale-110 transition-transform rounded-sm">
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-4 h-4"
                />
              </div>
            </a>
  
            {/* Instagram */}
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <div className="bg-white w-8 h-8 flex justify-center items-center 
                 hover:scale-110 transition-transform rounded-sm">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-4 h-4"
                />
              </div>
            </a>
  
            {/* LinkedIn */}
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <div className="bg-white w-8 h-8 flex justify-center items-center 
                 hover:scale-110 transition-transform rounded-sm">
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-4 h-4"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default TeamHeadCard;
  
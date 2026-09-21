import React from 'react';
import TeamHeadCard from './TeamHeadCard';

// Example images (replace with real images)
import jtm1Img from '../../assets/team/2026_27/JTMs photos/Aadya.jpeg';
import jtm2Img from '../../assets/team/2026_27/JTMs photos/Ishita.jpeg';
import jtm3Img from '../../assets/team/2026_27/JTMs photos/Lakshya.jpeg';
import jtm4Img from '../../assets/team/2026_27/JTMs photos/Lavanya Prakash.jpeg';
import jtm5Img from '../../assets/team/2026_27/JTMs photos/Om Upadhyaya.jpeg';
import jtm6Img from '../../assets/team/2026_27/JTMs photos/Praneel pathak.jpeg';
import jtm7Img from '../../assets/team/2026_27/JTMs photos/Soham Nandi.jpeg';
import jtm8Img from '../../assets/team/2026_27/JTMs photos/Srivanth Guntha.jpeg';
import jtm9Img from '../../assets/team/2026_27/JTMs photos/Sudhanv.jpeg';
import jtm10Img from '../../assets/team/2026_27/JTMs photos/Surendar.jpeg';
import jtm11Img from '../../assets/team/2026_27/JTMs photos/Suryansh.jpeg';
import jtm12Img from '../../assets/team/2026_27/JTMs photos/Yash jatil.jpeg';

const jtmData = [
  {
    name: 'Aadya V R',
    email: 'aadyavr25@iitk.ac.in',
    image: jtm1Img,
    githubLink: 'https://github.com/aadyavr',
    instagramLink: 'https://www.instagram.com/aadya_.a?igsh=MWk2bDFpajF0Yjl1eQ==',
    linkedinLink: 'https://www.linkedin.com/in/aadya-v-r-23073a389/'
  },
  {
    name: 'Ishita Singh',
    email: 'ishitasi25@iitk.ac.in',
    image: jtm2Img,
    githubLink: 'https://github.com/ishitasi1304',
    instagramLink: 'https://www.instagram.com/sirignatiusthethird?igsh=MXNjY2xjcnJscHdjaw==',
    linkedinLink: 'https://www.linkedin.com/in/ishita-singh-947012341?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Lakshya Agarwal',
    email: 'lakshyaag25@iitk.ac.in',
    image: jtm3Img,
    githubLink: 'https://github.com/lava6479',
    instagramLink: 'https://www.instagram.com/lakshyaag25?igsh=MXAyOWtuNzhpbGt3dQ==',
    linkedinLink: 'https://www.linkedin.com/in/lakshya-agarwal-829847381?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Lavanya Prakash',
    email: 'lprakash25@iitk.ac.in',
    image: jtm4Img,
    githubLink: 'https://github.com/lavanyap-2107',
    instagramLink: 'https://www.instagram.com/p.lavanya.02?igsh=c3cxMzk1aHhhemJh',
    linkedinLink: 'https://www.linkedin.com/in/lavanya-prakash-11abb536b?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Om Upadhyaya',
    email: 'omupadhyaya25@iitk.ac.in',
    image: jtm5Img,
    githubLink: 'https://github.com/OmUpadhyaya',
    instagramLink: 'Not on Instagram',
    linkedinLink: 'https://www.linkedin.com/in/om-upadhyaya-383724240/'
  },
  {
    name: 'Praneel Pathak',
    email: 'ppraneel25@iitk.ac.in',
    image: jtm6Img,
    githubLink: 'https://github.com/PythonCodePythonSnake',
    instagramLink: 'https://www.instagram.com/praneel_lazy/',
    linkedinLink: 'https://www.linkedin.com/in/praneel-pathak-255926392'
  },
  {
    name: 'Soham Nandi',
    email: 'soham25@iitk.ac.in',
    image: jtm7Img,
    githubLink: 'https://github.com/soham-nandi06',
    instagramLink: 'https://www.instagram.com/soham_n06',
    linkedinLink: 'https://www.linkedin.com/in/soham-nandi-354830369'
  },
  {
    name: 'Srivanth Guntha',
    email: 'gsrivanthsai25@iitk.ac.in',
    image: jtm8Img,
    githubLink: 'https://github.com/srivanth123',
    instagramLink: 'https://www.instagram.com/srivanth.g_17?igsh=MTl5MGMycmoyemY3Mw==',
    linkedinLink: 'https://www.linkedin.com/in/srivanth-guntha-8228693b0'
  },
  {
    name: 'Sudhanva',
    email: 'chsudhanva25@iitk.ac.in',
    image: jtm9Img,
    githubLink: 'https://github.com/chsudhanva790-coder',
    instagramLink: 'https://www.instagram.com/sudhanva790/',
    linkedinLink: 'https://www.linkedin.com/in/sudhanva-c-h-8211b1377/'
  },
  {
    name: 'Surendar V',
    email: 'surendar25@iitk.ac.in',
    image: jtm10Img,
    githubLink: 'https://github.com/surendar92',
    instagramLink: 'https://www.instagram.com/surendar_92__/',
    linkedinLink: 'https://www.linkedin.com/in/surendar-v-b354a1375/'
  },
  {
    name: 'Suryansh Sanatan',
    email: 'suryanshs25@iitk.ac.in',
    image: jtm11Img,
    githubLink: 'https://github.com/suryanshsanatan2096-cmyk',
    instagramLink: 'https://www.instagram.com/sanatansuryansh_iitk_25?igsh=ejNidXExNWwwdjc=',
    linkedinLink: 'https://www.linkedin.com/in/suryansh-sanatan-5945221b5?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Yash jatil',
    email: 'yashj25@iitk.ac.in',
    image: jtm12Img,
    githubLink: 'https://github.com/studentyash36',
    instagramLink: 'https://www.instagram.com/yashjatil?igsh=ZGFuZnAwMnUzYml1',
    linkedinLink: 'https://www.linkedin.com/in/yash-jatil-56376a373?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
];

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
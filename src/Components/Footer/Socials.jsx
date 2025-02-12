/* eslint-disable react/prop-types */


import { useState } from "react";

const socials = [
  {
    id: 1,
    image: "instagram.png",
    hoverImage: "instagramafter.png",
  },
  {
    id: 2,
    image: "facebook.png",
    hoverImage: "facebookafter.png",
  },
  {
    id: 3,
    image: "twitter.png",
    hoverImage: "twitterafter.png",
  },
];

export default function ShowSocials() {
  return (
    <>
    <p className="poppins text-base font-semibold mt-8">Follow us</p>
    <div className="flex gap-3 mt-3">
      {socials.map((social) => (
        <SocialCard key={social.id} social={social} />
      ))}
    </div>
    </>
  );
}

function SocialCard({ social }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <div
      className="transition-transform transform "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <img
        src={isHovered ? social.hoverImage : social.image}
        
        className="h-5 object-cover"
      />
      
    </div>
    </>
  );
}


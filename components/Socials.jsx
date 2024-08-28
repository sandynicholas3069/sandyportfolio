import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sandynicholas3069" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/sandynicholas3069" },
  { icon: <FaInstagram />, path: "https://instagram.com/sandynicholas3069" },
  { icon: <FaTiktok />, path: "https://tiktok.com/@sandynicholas3069" },
  { icon: <FaWhatsapp />, path: "https://wa.me/+6282229121208" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

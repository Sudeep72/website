import React from "react";
import { FaGithub, FaLinkedin,FaDiscord} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineMenuBook } from "react-icons/md";


const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sudeep-r-878022233/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Sudeep72",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sudeep7217@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Discord <FaDiscord size={30} />
        </>
      ),
      href: "https://discord.com/users/749582193248043119",
    },
    {
      id: 5,
      child: (
        <>
          Carrd <MdOutlineMenuBook size={30} />
        </>
      ),
      href: "https://sudeep.carrd.co/",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

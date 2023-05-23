import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";

const Resources = [
  {
    name: "GITHUB",
    link: "https://github.com/IrakliK",
    icon: <BsGithub size={50} className="text-gray-600 hover:text-gray-400" />,
  },
  {
    name: "LINKEDIN",
    link: "https://www.linkedin.com/in/iraklikhizanishvili",
    icon: (
      <BsLinkedin size={50} className="text-gray-600 hover:text-gray-400" />
    ),
  },
  {
    name: "RESUME",
    link: "https://resume.io/r/8U06dz4yt",
    icon: (
      <SlEnvolopeLetter
        size={50}
        className="text-gray-600 hover:text-gray-400"
      />
    ),
  },
];

function ResourceLink() {
  return (
    <div className="flex gap-3 text-gray-600">
      {Resources.map((resource) => (
        <Link
          key={resource.name}
          href={resource.link}
          className="flex flex-col justify-center items-center gap-4"
        >
          <div className="flex font-bold">{resource.name}</div>
          {resource.icon}
        </Link>
      ))}
    </div>
  );
}

export default ResourceLink;

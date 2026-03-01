import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <div className="bg-red-700 w-full py-3 flex justify-center items-center gap-10 text-white">
      <a
        href="https://www.facebook.com/arielle.aventura/ "
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:scale-110 transition-transform"
      >
        <FaFacebook size={50} />
      </a>
      <a
        href="https://www.linkedin.com/in/arielle-aventura-0b6778320/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:scale-110 transition-transform"
      >
        <FaLinkedin size={50} />
      </a>
      <a
        href="https://github.com/yelle15"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:scale-110 transition-transform"
      >
        <FaGithub size={50} />
      </a>
    </div>
  );
}
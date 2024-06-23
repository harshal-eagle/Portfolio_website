import logo from "../assets/HarhalLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/harshal-bhandalkar-aaa561257/"><FaLinkedin /></a>
        <a href="https://github.com/harshal-eagle"><FaGithub /></a>
        <a href="https://www.instagram.com/__.harshal._/"><FaInstagram /></a>
        <a href=""><FaTwitterSquare /></a>


      </div>

    </nav>
  )
}

export default Navbar
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-start items-end py-[1.8rem] px-[1rem] md:px-[2rem] w-full h-auto max-w-[130rem] absolute top-0 right-0 left-0 z-10 font-josefin mx-auto">
      {/* Logo */}
      <Link to="/" className="mr-12">
        <img src={Logo} alt="car__rental" className="w-12 h-12" />
      </Link>
      {/* Nav Links */}
      <ul className="list-none flex flex-row justify-center items-center mx-2">
        <li className="mx-[2.2rem]">
          <Link
            to={`/`}
            className="font-rubik font-medium text-secondary text-[1rem] cursor-pointer no-underline"
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#exercises"
            className="font-rubik font-medium text-secondary text-[1rem] cursor-pointer no-underline"
          >
            Exercises
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

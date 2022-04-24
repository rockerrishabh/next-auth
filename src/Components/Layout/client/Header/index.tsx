import Link from "next/link";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <div className="top-0 sticky flex mx-auto px-14 border-b-2 py-5 justify-between items-center bg-white">
      <Link href="/">
        <a className="hover:text-blue-500 pl-10 hover:scale-105 text-lg">
          NextJS Blog
        </a>
      </Link>
      <div className="hidden md:inline-flex items-center space-x-6 text-lg">
        <Link href="/about-us">
          <a className="hover:underline hover:text-red-500 underline-offset-4">
            About Us
          </a>
        </Link>
        <Link href="/privacy-policy">
          <a className="hover:underline hover:text-red-500 underline-offset-4">
            Privacy Policy
          </a>
        </Link>
        <Link href="/terms-and-conditions">
          <a className="hover:underline hover:text-red-500 underline-offset-4">
            Terms and Conditions
          </a>
        </Link>
        <Link href="/contact-us">
          <a className="hover:underline hover:text-red-500 underline-offset-4">
            Contact Us
          </a>
        </Link>
      </div>
      <Sidebar />
    </div>
  );
}

export default Header;

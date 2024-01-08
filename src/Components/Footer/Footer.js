import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="mt-24 text-secondary">
        <div className="max-w-5xl w-full mx-auto flex flex-col gap-6 sm:flex-row justify-between items-start px-16 mt-8 mb-14">
          <div className="leading-10 cursor-pointer">
            <ul>
              <li className="hover:text-accent">About</li>
              <li className="hover:text-accent">Vision</li>
              <li className="hover:text-accent">Memberships</li>
              <li className="hover:text-accent">Press</li>
            </ul>
          </div>

          <div className="leading-10 cursor-pointer">
            <ul>
              <li className="hover:text-accent">Contact</li>
              <li className="hover:text-accent">Help</li>
              <li className="hover:text-accent">Contribute</li>
              <li className="hover:text-accent">Terms & Privacy</li>
            </ul>
          </div>
          <div>
            <h2>On Social</h2>
            <div className="flex gap-4 mt-3">
              <a
                className="hover:text-accent cursor-pointer"
                href="https://www.facebook.com/mubi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>

              <a
                className="hover:text-accent cursor-pointer"
                href="https://www.instagram.com/mubi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                className="hover:text-accent cursor-pointer"
                href="https://www.youtube.com/@mubi/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <hr className="w-[90%] mx-auto my-3 border border-gray-700" />
        <div className="text-center mt-3 mb-6">
          <p> &#169; Keta Mophinadze | 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaLinkedin, FaSlackHash } from "react-icons/fa/index.esm";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container-footer">
      <div className="container-copy-right">
        <span className="icon-hash">
          <FaSlackHash></FaSlackHash>
        </span>
        <p className="copy-right-text">
          Copyright &copy; {year} - All right reserved by Md. Aminul Islam
        </p>
      </div>
      <div>
        <a
          href="https://github.com/Aminul667"
          target="_blank"
          rel="noopener noreferrer"
          className="anchor"
        >
          <FaLinkedin></FaLinkedin>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

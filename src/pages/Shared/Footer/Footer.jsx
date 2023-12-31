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
          Copyright &copy; {year} - All right reserved by Md. Aminul Islam (Rahat)
        </p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/md-aminul"
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

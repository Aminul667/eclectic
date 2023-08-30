import { Link } from "react-router-dom";
import bgVideo from "../../../assets/videos/background.mp4";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container-landingpage">
      <div className="overlay"></div>
      <video src={bgVideo} autoPlay loop muted className="container-video" />
      <div className="content">
        {/* <h1 className="eclectic">Eclectic</h1> */}
        <div className="patterns">
          <svg width="100vw" height="100%">
            <text x="50%" y="60%" textAnchor="middle">
              Eclectic
            </text>
          </svg>
        </div>
        <div>
          <Link to="/category/all" className="link-to-article">
            Read all articles
          </Link>
          <Link to="/article/create-article" className="link-to-article">
            Write a new article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

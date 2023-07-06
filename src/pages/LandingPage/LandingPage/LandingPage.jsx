import { Link } from "react-router-dom";
import bgVideo from "../../../assets/videos/background.mp4";
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="container-landingpage">
      <div className="overlay"></div>
      <video src={bgVideo} autoPlay loop muted className="container-video"/>
      <div className="content">
        <h1>Eclectic</h1>
        <Link to="/category/all">Read all articles</Link>
        <Link>Write a new article</Link>
      </div>
    </div>
  );
};

export default LandingPage;

import IconHolder from '../Icon';
import { AiOutlineDownload } from 'react-icons/ai';
import CasualSelfie from '../../assets/images/casual-selfie.png';
import './index.scss';

const About = () => {
  return (
    <div className="about">
      <h1 className="about__heading">About me</h1>
      <div className="about__section">
        <img
          className="about__selfie"
          src={CasualSelfie}
          alt="my casual selfie"
        />
        <div className="about__details">
          <span className="grey-text">
            Full stack web developer, with extensive knowledge and years of
            experience working in web technologies, delivering quality work.
          </span>
          <div className="about__summary">
            <div>
              <h2>10+</h2>
              <span>Years experience</span>
            </div>
            <div>
              <h2>15+</h2>
              <span>Completed projects</span>
            </div>
            <div>
              <h2>3</h2>
              <span>Companies worked</span>
            </div>
          </div>
          <a
            href="https://github.com/cravi24/portfolio/tree/master/src/assets/Resume.pdf"
            download="Ravi_Chaudhary_Resume"
            className="about__cta-download"
          >
            Download CV
            <IconHolder
              className="download-icon"
              icon={<AiOutlineDownload />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

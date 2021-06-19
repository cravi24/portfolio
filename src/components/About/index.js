import IconHolder from '../Icon';
import { AiOutlineDownload } from 'react-icons/ai';
import CasualSelfie from '../../assets/images/casual-selfie.png';
import './index.scss';

const About = () => {
  return (
    <div className="About">
      <h1 className="heading">About me</h1>
      <div className="container">
        <img src={CasualSelfie} alt="my casual selfie" />
        <div>
          <span className="grey-text">
            Full stack web developer, with extensive knowledge and years of
            experience working in web technologies, delivering quality work.
          </span>
          <div className="summary">
            <div>
              <h2>10+</h2>
              <span>
                Years
                <br />
                experience
              </span>
            </div>
            <div>
              <h2>15+</h2>
              <span>
                Completed
                <br />
                projects
              </span>
            </div>
            <div>
              <h2>3</h2>
              <span>
                Companies
                <br />
                worked
              </span>
            </div>
          </div>
          <a
            href="https://github.com/cravi24/portfolio/tree/master/src/assets/Resume.pdf"
            download="Ravi_Chaudhary_Resume"
          >
            <div className="download">
              Download CV
              <IconHolder
                className="download-icon"
                icon={<AiOutlineDownload />}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

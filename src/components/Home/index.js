import Networking from '../Networking';
import IconHolder from '../Icon';
import { AiOutlineMail } from 'react-icons/ai';
import { HiUserCircle } from 'react-icons/hi';
import './index.scss';

const Home = () => {
  return (
    <div className="Home">
      <Networking />
      <div className="summary-container">
        <IconHolder icon={<HiUserCircle />} className="selfie" />
        <summary>
          <h1 className="heading">Hi, I'am Ravi</h1>
          <h5 className="grey-text">Fullstack developer</h5>
          <span className="grey-text">
            10+ years of experience in web developement producing high quality
            work
          </span>
          <a href="mailto:cravi24+portfolio@gmail.com" className="button">
            <div className="contact">
              Contact me
              <IconHolder className="email" icon={<AiOutlineMail />} />
            </div>
          </a>
        </summary>
      </div>
    </div>
  );
};

export default Home;

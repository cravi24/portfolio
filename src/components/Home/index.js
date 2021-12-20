import IconHolder from '../Icon';
import { AiOutlineMail } from 'react-icons/ai';
import { HiUserCircle } from 'react-icons/hi';
import './index.scss';

const Home = () => {
  return (
    <div className="home">
      <IconHolder icon={<HiUserCircle />} className="home__selfie" />
      <summary className="home__summary">
        <h1 className="heading">Hi, I'am Ravi</h1>
        <h5 className="grey-text">Fullstack developer</h5>
        <span className="home__summary-text -grey-text">
          10+ years of experience in web developement producing high quality
          work
        </span>
        <a
          href="mailto:cravi24+portfolio@gmail.com"
          className="home__cta-email"
        >
          <div className="contact">
            Contact me
            <IconHolder className="email" icon={<AiOutlineMail />} />
          </div>
        </a>
      </summary>
    </div>
  );
};

export default Home;

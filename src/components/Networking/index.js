import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { RiStackOverflowFill } from 'react-icons/ri';
import IconHolder from '../Icon';
import './index.scss';

const Networking = () => {
  return (
    <div className="Networking">
      <a
        href="https://www.linkedin.com/in/ravi-chaudhary-0b18241b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconHolder className="networking-icon" icon={<FiLinkedin />} />
      </a>
      <a
        href="https://github.com/cravi24/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconHolder className="networking-icon" icon={<FiGithub />} />
      </a>
      <a
        href="https://stackoverflow.com/users/3347375/ravi-chaudhary/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconHolder
          className="networking-icon"
          icon={<RiStackOverflowFill />}
        />
      </a>
    </div>
  );
};

export default Networking;

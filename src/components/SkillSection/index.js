import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import IconHolder from '../Icon';
import ProgressBar from '../ProgressBar';
import './index.scss';
import { useState } from 'react';

const SkillSection = ({ title, years, skills, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="SkillSection">
      <div className="title-container" onClick={() => setOpen((prev) => !prev)}>
        <div className="title">
          {children}
          <div>
            <h3 className="heading">{title}</h3>
            <h5 className="grey-text">{years}</h5>
          </div>
        </div>

        <IconHolder
          className="skill-icon"
          icon={open ? <MdExpandLess /> : <MdExpandMore />}
        />
      </div>

      {open &&
        skills.map((skill) => (
          <>
            <div className="skill">
              <h4>{skill.name}</h4>
              <h4 className="grey-text">{`${skill.level * 10}%`}</h4>
            </div>
            <ProgressBar percent={skill.level * 10} width={90} />
          </>
        ))}
    </div>
  );
};

export default SkillSection;

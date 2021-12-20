import SkillSection from '../SkillSection';
import { BiCodeCurly } from 'react-icons/bi';
import { CgServer } from 'react-icons/cg';
import IconHolder from '../Icon';
import { frontEndSkills, backendSkills } from './skills';
import './index.scss';

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills__heading">Skills</h1>
      <div className="skills__skill-item">
        <SkillSection
          title="Frontend developer"
          years="More than 5 years"
          skills={frontEndSkills}
        >
          <IconHolder className="skill-icon" icon={<BiCodeCurly />} />
        </SkillSection>
        <SkillSection
          title="Backend developer"
          years="More than 3 years"
          skills={backendSkills}
        >
          <IconHolder className="skill-icon" icon={<CgServer />} />
        </SkillSection>
      </div>
    </div>
  );
};

export default Skills;

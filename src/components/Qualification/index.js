import { useState } from 'react';
import educationHistory from './education.json';
import workHistory from './work.json';

import './index.scss';
import Timeline from '../Timeline';

const Qualification = () => {
  const [isEducationSelected, setEducation] = useState(true);
  const [isWorkSelected, setWork] = useState(false);
  return (
    <div className="Qualification">
      <h1 className="heading">Qualification</h1>
      <div className="header">
        <h3
          className={isEducationSelected && 'selected'}
          onClick={() => {
            setEducation(true);
            setWork(false);
          }}
        >
          Education
        </h3>
        <h3
          className={isWorkSelected && 'selected'}
          onClick={() => {
            setEducation(false);
            setWork(true);
          }}
        >
          Work
        </h3>
      </div>
      <div className="history">
        {
          <Timeline
            items={isEducationSelected ? educationHistory : workHistory}
          />
        }
      </div>
    </div>
  );
};

export default Qualification;

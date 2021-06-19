import * as React from 'react';

import './index.scss';

const ProgressBar = ({ width, percent }) => {
  let progress = (percent * width)/100;

  return (
    <div className="progress-div" style={{ width: `${width}%` }}>
      <div style={{ width: `${progress}%` }} className="progress" />
    </div>
  );
};

export default ProgressBar;

import './index.scss';

const Timeline = ({ items }) => {
  return (
    <div className="Timeline">
      {items.map((item, i) => (
        <div className={`container ${i % 2 === 0 ? 'left' : 'right'}`}>
          <h4>{item.title}</h4>
          <span className="grey-text">{item.subtitle}</span>
          <div className="duration">{item.duration}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

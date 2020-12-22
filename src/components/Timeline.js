import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  return(
    <div className='timeline'>
      {props.events.map((event, i) => (
        <TimelineEvent key={i} person={event.person} status={event.status} timeStamp={event.timeStamp} />
      ))}
    </div>
  );
}

export default Timeline;
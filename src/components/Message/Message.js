import React from 'react';
import './Message.css';

const Message = (props) => {
  const {text} = props;
  return <div className="message">{text}</div>
};

export default Message
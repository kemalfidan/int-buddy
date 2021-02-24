import React, { Component } from 'react';

const NewLineText = (props) => {
  const text = props.text;

  return text.split('\n').map((str,index) => <p key={index}>{str.replace(/  /g, "\u00a0\u00a0")}</p>);
}

export default NewLineText;
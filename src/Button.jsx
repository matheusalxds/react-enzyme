import React from 'react';

export default props => (
  <button className={`${props.btnStyle}`} onClick={props.onClick} type={'button'}>
    {props.label}
  </button>
);


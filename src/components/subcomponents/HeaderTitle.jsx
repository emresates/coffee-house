import React from 'react';

function HeaderTitle(props) {
  return (
    <>
      <h1 className="main-header">{props.header}</h1>
      <h2 className="main-title">{props.title}</h2>
      <p className="main-paragraph">{props.p}</p>
    </>
  );
}

export default HeaderTitle;

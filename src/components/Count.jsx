import React from 'react';
import coffeemug from '../svg/coffeemug.svg';
import hotcoffee from '../svg/hotcoffee.svg';
import staff from '../svg/staff.svg';
import stars from '../svg/stars.svg';
import CountUp from 'react-countup';
function Count() {
  return (
    <div className="count">
      <div className="count-item">
        <div className="image-box">
          <img src={coffeemug} alt="" />
        </div>
        <h1>
          <CountUp enableScrollSpy duration={4} end="100" />
        </h1>
        <h3>Coffee Branches</h3>
      </div>
      <div className="count-item">
        <div className="image-box">
          <img src={stars} alt="" />
        </div>
        <h1>
          <CountUp enableScrollSpy duration={4} end="56" />
        </h1>
        <h3>Number of Awards</h3>
      </div>
      <div className="count-item">
        <div className="image-box">
          <img src={hotcoffee} alt="" />
        </div>
        <h1>
          <CountUp enableScrollSpy duration={4} end="10817" />
        </h1>
        <h3>Happy Customer</h3>
      </div>
      <div className="count-item">
        <div className="image-box">
          <img src={staff} alt="" />
        </div>
        <h1>
          <CountUp enableScrollSpy duration={4} end="900" />
        </h1>
        <h3>Staff</h3>
      </div>
    </div>
  );
}

export default Count;

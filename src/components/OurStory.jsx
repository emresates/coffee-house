import React from 'react';
import HeaderTitle from './subcomponents/HeaderTitle';

function OurStory() {
  return (
    <>
      <div className="ourstory">
        <img
          src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt=""
        />
        <div className="ourstory-info">
          <HeaderTitle
            header="Discover"
            title="Our Story"
            p='On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.'
          />
        </div>
      </div>
    </>
  );
}

export default OurStory;

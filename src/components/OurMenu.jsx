import React from 'react';
import HeaderTitle from './subcomponents/HeaderTitle';

function OurMenu() {
  return (
    <div className="our-menu">
      <div className="our-menu-left">
        <HeaderTitle
          header="Discover"
          title="Our Menu"
          p="Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean."
        />
        <button>View Full Menu</button>
      </div>
      <div className="our-menu-right">
        <div className="our-menu-right-first2">
          <img
            src="https://images.unsplash.com/photo-1502471602546-17554aac1160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1565065963005-92ba391a8ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            alt=""
          />
        </div>
        <div className="our-menu-right-last2">
          <img
            src="https://images.unsplash.com/photo-1587080413959-06b859fb107d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1792&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1608634070674-2db08b533d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default OurMenu;

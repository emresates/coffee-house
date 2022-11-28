import React from 'react';
import Card from './subcomponents/Card';
import HeaderTitle from './subcomponents/HeaderTitle';

function FavoriteProducts() {
  return (
    <div className="favoriteproducts">
      <HeaderTitle
        header="Discover"
        title="Favorite Products"
        p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      />
      <div className="favoriteproducts-gallery">
        <Card
          image="https://images.unsplash.com/photo-1626203313658-886791f37e46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          title="Fried Fish"
          p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
          price="10"
        />
        <Card
          image="https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          title="Chefburger"
          p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
          price="9.25"
        />
        <Card
          image="https://images.unsplash.com/photo-1625938145312-c18f06f53be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          title="Sushi"
          p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
          price="2.5"
        />
      </div>
    </div>
  );
}

export default FavoriteProducts;

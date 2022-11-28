import React from 'react';
import Card from './subcomponents/Card';
import HeaderTitle from './subcomponents/HeaderTitle';

function CoffeeSellers() {
  return (
    <div className="coffeesellers">
      <HeaderTitle
        header="Discover"
        title="Best Coffee Sellers"
        p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      />
      <div className="coffeesellers-gallery">
        <Card
          image="https://images.unsplash.com/photo-1565065963005-92ba391a8ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          title="Black Coffee"
          p="A small river named Duden flows by their place and supplies"
          price="5.90"
        />
        <Card
          image="https://images.unsplash.com/photo-1604145703930-627e490875c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
          title="Cappuccino"
          p="A small river named Duden flows by their place and supplies"
          price="6.50"
        />
        <Card
          image="https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1870&q=80"
          title="Latte"
          p="A small river named Duden flows by their place and supplies"
          price="4.50"
        />
        <Card
          image="https://images.unsplash.com/photo-1632789395770-20e6f63be806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2039&q=80"
          title="Iced Coffee"
          p="A small river named Duden flows by their place and supplies"
          price="3.50"
        />
      </div>
    </div>
  );
}

export default CoffeeSellers;

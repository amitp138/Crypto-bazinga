import React from "react";
import "./Coins.css";
const CoinItem = (props) => {
  return (
    <div className="coinitem">
      <p>{props.coins.market_cap_rank}</p>
      <div className="infocoin">
        <img src={props.coins.image} alt="some" />
        <p>{props.coins.name}</p>
      </div>
      
      <p>{props.coins.current_price}</p>
      <p>{props.coins.high_24h}</p>
      <p>{props.coins.total_volume}</p>
      <p>{props.coins.market_cap}</p>
    </div>
  );
};

export default CoinItem;

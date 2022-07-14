import React from "react";
import { Link } from "react-router-dom";
import CoinItem from "./CoinItem";
import Coin from '../Pages/Coin'
import "./Coins.css";
const Coins = (props) => {
  return (
    <div>
      <div className="data">
        <div className="coins-header">
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p>Volume</p>
        <p>MarketCap</p>
        </div>
<div className="items">
        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Coins;

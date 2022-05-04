import React from "react";

function Coin({ name, icon, price, symbol, rank, marketCap, volume, web }) {
    return (
        <div className="coin">
            <h1> Name: {name}</h1>
            <img src={icon} />
            <h3> Price: {price}</h3>
            <h3> Symbol: {symbol}</h3>
            <h3> Global Rank: {rank}</h3>
            <h3> Market Capital: {marketCap}</h3>
            <h3> Volume : {volume}</h3>
            <h6> ________________</h6>
            <h4>  {web}</h4>
        </div>

    );
}

export default Coin;
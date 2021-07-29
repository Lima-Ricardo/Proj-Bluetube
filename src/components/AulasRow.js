import React from 'react';
import './AulasRow.css';

export default ({title, items}) =>{
    return (
        <div>
            <h2>{title}</h2>
            <div className="aulasRow--listarea">
                {items.results.length > 0 && items.results.map((item,key)=>(
                    <img src={`https://media.discordapp/t/p/w300channels/860644975033188363/860644975531130882`}></img>
                ))};
            </div>
        </div>
    );
}
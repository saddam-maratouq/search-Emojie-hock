import React from 'react' 


export default function CardEmojie({symbol,title}) {
    return (
        <div>
               <h2> {title}   </h2> 
               <h1> {symbol}   </h1>
        </div>
    )
}

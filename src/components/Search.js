import React, { useState } from 'react'
import CardEmojie from './CardEmojie'
import EmojiData from './Emojie' 

export default function Search() {  

    const [search,setSearch] = useState('') 
    //  const [data,Setdata] = useState()   


   
    const SearchHandler = e => {
        setSearch (e.target.value)
        console.log({search});
        
    }
   
   
    return (
        <div>
                <center>

                <input type="search" placeholder='Search ' value={search} onChange={SearchHandler}/>  
                </center>

               {EmojiData.filter(imojes => {

                if(imojes === '') {
                    return ''
                } 

                else if (imojes.title.toLowerCase().includes(search.toLowerCase())) {
                    console.log('from include',imojes.title.toLowerCase().includes(search.toLowerCase()))

                    return imojes 
                }

               })
               
                    .map(emojie  => (

                    <CardEmojie 
                    
                    title={emojie.title} 
                    symbol={emojie.symbol} 
                    


                    /> 
               )) } 
                

            
               
        </div>
    )
}

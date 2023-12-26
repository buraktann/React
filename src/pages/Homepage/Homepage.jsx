import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, json } from 'react-router-dom';

export default function HomePage() {
          //HTTP isteği

          useEffect(() => {
            // Gelen veriyi json olarak console'a yazdır.
         //fetch("https://dummyjson.com/products")
          //.then(response => response.json())
          //.then(json => console.log(json))
          //.catch(err => console.log(err));
        // awaitFetch();
        axiosGet();
          },[]);

 const awaitFetch = async () =>{
     let  response = await fetch("https://dummyjson.com/products");
     let json = await response.json();
     console.log(json);
}

const axiosGet = async () => {
  let response = await axios.get("https://dummyjson.com/products");
  console.log(response.data);

};
  return ( 
       <div>
         <Link to={"/products"}>Ürünler Sayfasi</Link>
       </div>
  );
} 

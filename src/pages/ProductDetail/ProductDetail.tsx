import React, { useEffect } from 'react'
import {useLocation} from "react-router-dom";

type Props = {}

const ProductDetail = (props: Props) => {
    const location = useLocation();
     useEffect(() => {
    let query = new URLSearchParams(location.search)
    console.log(query.get("id"));
     },[]);

  return <div>ProductDetail</div>
};

export default ProductDetail
//getByid?id=1 query string
//getById/1   path variable
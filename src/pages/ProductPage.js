import React from 'react'
import {useContext} from 'react';
import {Link} from "react-router-dom";
import ProductContext from "../context/ProductContext";


export const ProductPage = (links) => {
    const {getProduct} = useContext(ProductContext);

    const myitem = () => {
        if (typeof(links.location.params) != "undefined"){
            //console.log(links.location.params);
            return getProduct(links.location.params);
        } else {
            const mystr = links.location.pathname;
            return getProduct(mystr.split("/")[2]);
        }
    };

    const prod = myitem();
    
    return (
        <div>
            <Link to = "/">Back</Link>
            {links.location.params}
            {
                prod.map((name,index) => (
                    <div key={index}>
                        <div><Link to = {{
                            pathname: `/single/${name["name"]}`,
                            params: name,
                        }}><h3>{index+1} - {name["name"].toString()} - Price ${name["price"]}</h3>
                        </Link></div>
                    </div>
                ))
            }
        </div>
    )
}
export default ProductPage;
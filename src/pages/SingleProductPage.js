import React from 'react'
import {useContext} from 'react';
import {Link} from "react-router-dom";
import ProductContext from "../context/ProductContext";
import Carousel from "../components/Carousel";

export const SingleProductPage = (links) => {
    const {getProduct} = useContext(ProductContext);
    //get products of the category and pass it back to products page
    //links.location.params["category"] this is the slug to get prod
    //const prod = getProduct(links.location.params["category"]);

    // console.log("links in single");
    // console.log(links);
    // console.log(links.location.params["name"]);
    // console.log(links.location.params["url"]);
    const imageurl = links.location.params["url"];

    return (
        <div>
            <h3>This my singular product page</h3>
            <Link to ={{
                pathname: `/products/${links.location.params["category"]}`,
                //params: links
                }}>Back</Link>
            <h3>{links.location.params["name"]}</h3>
            <img
                src={imageurl}
            />
            <h3>Price : {links.location.params["price"]}</h3>
            <h3>Category : {links.location.params["category"]}</h3>
            <Carousel links={links}/>
        </div>
    )
}
export default SingleProductPage;
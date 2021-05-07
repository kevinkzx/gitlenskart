import React from 'react';
import {useContext} from 'react';
import {Link} from "react-router-dom";
import ProductContext from "../context/ProductContext";

export const Categories = () => {
    const {getCategory} = useContext(ProductContext);
    const cat = getCategory();
    //get unique categories
    const category = [...new Set(cat.map(e => e))];

    return (
        <div>
            Categories
            {
                category.map((name, index) => (
                    <div key={index}>
                        <div><Link to={{
                            pathname: `/products/${name}`,
                            params: name
                            }}><h3>{index+1} - {name.toString()}</h3></Link></div>
                    </div>
                ))
            }
        </div>
    )
}

export default Categories;
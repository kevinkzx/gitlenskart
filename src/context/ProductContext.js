import React, {createContext, useEffect, useState} from 'react';


const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const[category, setCategory] = useState([]);
    const[product, setProduct] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [itemList, setItemList] = useState([]);

    const getCategory = () => {
        return category;
    }
    
    const getProduct = (slug) => {
        const prodList = [];
        var i;
        for (i=0; i<items.length; i++) {
            if(items[i]["category"] === slug) {
                //console.log("context getting products here");
                //console.log(items[i]["name"]);
                prodList.push(items[i]);
            }
        }
        return prodList;
    }

    const getAllProducts = () => {
        return items;
    }

    useEffect(() => {
        fetch(` https://cors-anywhere.herokuapp.com/http://139.59.244.121/my_items`)
        .then (res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
                //console.log(result);
                //const category = [...new Set(result.map(e => e.category))];
                //get the unique categories from object
                const myitem = result.map(e => e);
                setItemList(myitem);
                const category = result.map(e => e.category);
                setCategory(category);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
                console.log("aaaa")
            }
        ) 
    }, [])

    return (
        <ProductContext.Provider value={{
            category,
            product,
            error,
            isLoaded,
            items,
            getCategory,
            getProduct,
            getAllProducts
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;
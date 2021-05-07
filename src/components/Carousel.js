import React, {useContext} from 'react';
import ProductContext from "../context/ProductContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

export const Carousel = (links) => {

    const {getAllProducts} = useContext(ProductContext);

    const allProduct = getAllProducts();

    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
        centerMode: true,
        //centerPadding: '50px'
    };

    const reorder = (data, index) => {
        return data.slice(index).concat(data.slice(0,index));
    };

    //calls the reorder function so that the first item in carousel is the one after the current item
    const prodList = reorder(allProduct, links.links.location.params["id"]+1);

    return (
        <div>
            <Slider {...config}>
                {prodList.map((x, i) => {
                    return <div key={i}>
                        <div>
                            <Link to = {{
                                pathname: `/single/${x["name"]}`,
                                params: x
                            }}><img src={x.url}/>
                            <div>{x.name}</div></Link>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    )
}
export default Carousel;

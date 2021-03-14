import { useSelector } from "react-redux";
import React from 'react';
import SingleCategory from "./SingleCategory";
const CategoryArray = () => {
    const categories =useSelector(state => state?state.categoryReducer.categories:'')

    return (
        <React.Fragment>
          {
              categories.map((category,index)=><SingleCategory key={index} category={category} />)
          }  
        </React.Fragment>
    );
};

export default CategoryArray;
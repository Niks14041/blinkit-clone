import React from 'react';
import "./sort.css"

export const Sort = ({handleChange}) => {

    const handleOnchange = (e) => {
        if(e.target.value=="lowTohigh"){
            handleChange("price",1);
        }
        else if(e.target.value=="highTolow"){
            handleChange("price",-1);
        }
        else if(e.target.value=="discount"){
            handleChange("discount",-1);
        }
        else if(e.target.value=="alphabetical"){
            handleChange("item",1);
        }
    }
  return (
    <div>
         sort by : <select name="" id="sorting" onChange={handleOnchange}>
            <option value="relevance">Relevance</option>
            <option value="lowTohigh">Price(Low to High)</option>
            <option value="highTolow">Price(High to Low)</option>
            <option value="discount">Discount(Low to High)</option>
            <option value="alphabetical">Name(A-Z)</option>
        </select>
    </div>
  )
}

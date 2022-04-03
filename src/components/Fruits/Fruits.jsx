import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./fruits.css"
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material';
import Devider from '../Side_devider/Devider';
import { Sort } from '../SortBy/Sort';

export const Fruits = () => {

  const init = {
    value:"item",
    type:1
  }
  const [fruitData,setFruitData] = useState([]);
  const [sorting,setSorting] = useState(init);
  const [style,setStyle] = useState('add-to-cart-btn') ;

  const Img = styled('img')({
    display: 'block',
    margin:"auto",
    maxWidth: '50%',
    maxHeight: '50%'
  });

  const getFruitData = () => {
    axios.get("https://blinkitcloneapis.herokuapp.com/vegetables&fruits/fruits").then(res=>{
      setFruitData(res.data);
    });
  }

  useEffect(()=>{
    getFruitData();
  },[]);

  const handleChange = (value,type) => {
    setSorting({value,type})
  }

  const addToCart = (e) =>{
    alert("Item is added into cart")
    axios.post("https://blinkitcloneapis.herokuapp.com/cart",{
      refer:"Fruits",
      pro_id:e._id
    })
  }

  return (

    <div className='fruit-container'>
      <Devider></Devider>
      <div>
        <Typography variant='h5' ml={10}>Fruits</Typography>
        <div className='sortBy'>
        <Sort handleChange={handleChange}></Sort>
        </div>
        
       
      <div className='grid'>{fruitData.sort((a,b)=>{
        return (sorting.value=="price" ? sorting.type===1 ? a.price - b.price : b.price - a.price : sorting.value=="discount" ? sorting.type === -1 ? b.discount - a.discount : a.discount - b.discount : sorting.value=="item" ? sorting.type==1 ? a.item.localeCompare(b.item):fruitData:fruitData);
      }).map((e,i)=>{   
      return(
          <div key={i} className="grid-box" >
          <Paper elevation={0} >
            <p className='discount-tag'>{e.discount}% OFF</p>
            <Img alt={e.item} src={e.img} />
            <Typography variant='subtitle1'mt={1}>{e.item}</Typography>
            <Typography variant='subtitle2'mt={2}>{e.quantity}</Typography>
            <Typography variend="h3" mt={2}>₹{e.price}</Typography>
            <Typography mb={1} variant="body1" className='preprice'>₹{e.preprice}</Typography>
            <button className={style} key={e.img} onClick={()=>{
              addToCart(e);
            }}>Add To Cart</button>
        </Paper>
        </div>)
    })}
    </div>
      </div>
      
    </div>
    
  )
}
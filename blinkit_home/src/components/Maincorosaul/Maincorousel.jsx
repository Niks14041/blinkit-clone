import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './maincorousel.css'
import { CorouselData } from './MaincorouselData'


const Maincorousel = ({slides}) => {
    const [data, setData] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setData(data ===length-1 ? 0 : data + 1)
       
    }
    const prevSlide = () => {
        setData(data === 0 ? length - 1: data-1)
    }
    // console.log('data:', data)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <ArrowBackIosNewIcon className='back-arrow' onClick={prevSlide} />
            <ArrowForwardIosIcon className='next-arrow'onClick={nextSlide} />
            
            {CorouselData.map((slide, index) => {
                return (
                    <div className={index == data ? 'slide active' : 'slide'} key={index}>
                        {index ===data && (<img src={slide.image} alt="slider image" className='sliderImage' />)}
                    
                    </div>
                
                )
            })}
        </section>
    )
}

export default Maincorousel
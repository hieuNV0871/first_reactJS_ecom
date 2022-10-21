import { useCallback, useEffect, useState } from "react";

import classNames from "classnames/bind";
import styles from './Slider.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import SliderItem from "./SliderItem";

const cx = classNames.bind(styles)

function Slider({items, auto}) {
    const [activeSlide, setActiveSlide] = useState(0)
    const itemsLength = items.length

    const nextSlide = useCallback(()=>{
        const index = activeSlide + 1 === itemsLength ? 0 : activeSlide + 1
        setActiveSlide(index)
    }, [activeSlide, itemsLength])


    
    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? itemsLength - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    useEffect(()=>{
        if(auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
        }, 5000);
        return ()=>(clearInterval(slideAuto))
        }
        
        
    }, [nextSlide, auto])

    return ( 
        <div className={cx('slider-items')}>
            {
                items.map((item, index) => (
                    <SliderItem key={index} data={item} isActive = {index === activeSlide}/>
                ))
            }

            <div className={cx('slider-control')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide}/>
                <span> {activeSlide + 1}/{items.length} </span>
                <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide}/>
            </div>
            
        </div>
     );
}

export default Slider;
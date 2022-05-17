/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import { images } from '../Helpers/CarouselData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'


const Carousel = () => {

    let [currImg, setCurrImg] = useState(0)
    let vari;

    if(currImg === 0){vari = 'lorem lorem lorem lorem lorem'}
    else if(currImg === 1){vari = 'text text text text text'}
    else if(currImg === 2){vari = 'ipsum ipsum ipsum ipsum ipsum'}
    else if(currImg === 3){vari = 'dolor dolor dolor dolor dolor dolor'}

    return (
        <div className='carousel'>
            <div className='carouselInner' style={{backgroundColor: `${images[currImg].img}`}}>

                <div className='left' 
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                        if(currImg <= 0){setCurrImg(currImg + (images.length - 1))}
                        }}
                    >
                    <ArrowBackIosIcon />
                </div>
                <div className='center'>
                </div>
                <div className='right'
                    onClick={() => {
                        currImg < images.length - 1 && setCurrImg(currImg + 1);
                        if(currImg >= 3){setCurrImg(currImg - currImg)}
                        }}
                    >
                    <ArrowForwardIosIcon />
                </div>
            </div>
            <div><h1>Design</h1><p>{vari}</p></div>
        </div>
    )
}

export default Carousel;
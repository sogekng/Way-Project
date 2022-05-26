/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import { images1 } from '../Helpers/CarouselData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'


const Carousel = () => {

    let [currImg, setCurrImg] = useState(0)
    let descricao;

    if(currImg === 0){descricao = images1[currImg].descricao}
    else if(currImg === 1){descricao = images1[currImg].descricao}
    else if(currImg === 2){descricao = images1[currImg].descricao}
    else if(currImg === 3){descricao = images1[currImg].descricao}

    return (
        <div className='carousel'>
            <div className='carouselInner' style={{backgroundColor: `${images1[currImg].img}`}}>

                <div className='left' 
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                        if(currImg <= 0){setCurrImg(currImg + (images1.length - 1))}
                        }}
                    >
                    <ArrowBackIosIcon className='setasEs' />
                </div>
                <div className='center'>
                </div>
                <div className='right'
                    onClick={() => {
                        currImg < images1.length - 1 && setCurrImg(currImg + 1);
                        if(currImg >= 2){setCurrImg(currImg - currImg)}
                        }}
                    >
                    <ArrowBackIosIcon className='setasDi' />
                </div>
            </div>
            <div><p>{descricao}</p></div>
        </div>
    )
}

export default Carousel;
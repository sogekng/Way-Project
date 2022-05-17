import React from 'react'
import Typing from 'react-typing-animation';
import CarouselLeft from './CarouselLeft';
import CarouselRight from './CarouselRight';
import asset1 from '../Images/Asset_1.svg'


const contents = {
    text_one: <p>Em nossa agência, priorizamos o cliente ao máximo,
        trabalhando com agilidade, criativade e inteligência, para
        que seu site tenha um visual melhor do que já é!</p>,
    text_two: <Typing speed={80}><h1><strong>Agência de web design, direcionada em melhorar <mark>ainda</mark> mais o seu site.<Typing.Speed ms={800} /></strong></h1></Typing>,
    text_three: <div><h1>Programador</h1><p>Lorem Lorem Lorem</p></div>,
    text_four: <div><h1>Design</h1><p>Lorem Lorem Lorem</p></div>
  }

const Content = () => {
    return (
        <>
        <div className='content01'>
            <div className='text_content01'>
                {contents.text_two}
                {contents.text_one}
            </div>
            <div className='img_content01'>
                <img src={asset1} alt="asset1" />
            </div>
            {/**/}
        </div>
        <div className='content02'>
            <div className='img_content02'>
                <CarouselLeft />
                {/*{contents.text_three}*/}
            </div>
            <div className='img_content02'>
                <CarouselRight />
            </div>
        </div>
    </>
    )
}

export default Content
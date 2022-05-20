import React from 'react'
import Typing from 'react-typing-animation';
import CarouselLeft from './CarouselLeft';
import CarouselRight from './CarouselRight';
import asset1 from '../Images/Asset_1.svg'
import { CFormCheck } from '@coreui/react'


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
            <div className='teste'>
                <div className='text_content01'>
                    {contents.text_two}
                    <CFormCheck
                    button={{ color: 'primary' }}
                    id="btn-check-2"
                    autoComplete="off"
                    label="FAÇA SEU ORÇAMENTO"
                    defaultChecked
                    />
                </div>
                <div className='img_content01'>
                    <img src={asset1} alt="asset1" />
                </div>
            </div>
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
        <div className='content03'>
            <strong><h1>SOBRE NÓS</h1></strong>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className='content04'>
            <strong><h1 className='textInputTitle'>FALE CONOSCO</h1></strong>
            <form method="get" action="envio_dados.php">
                <label>
                    <strong><p className='textInput'>Nome:</p></strong>
                    <input type="text" name="name" style={{height: '25px', width: '500px'}} className='inputContent04' autocomplete="off"/>
                </label> 
                <label>
                    <strong><p className='textInput'>E-mail:</p></strong>
                    <input type="text" name="name" style={{height: '25px', width: '500px'}} className='inputContent04' autocomplete="off"/>
                </label>
                <label>
                    <strong><p className='textInput'>Assunto:</p></strong>
                    <input type="text" name="name" style={{height: '25px', width: '500px'}} className='inputContent04' autocomplete="off"/>
                </label>
                <strong><p className='textInput'>Sua mensagem:</p></strong>
                <textarea type="textare" name="name" style={{height: '150px', width: '500px', border: '3px solid transparent'}} className='inputContent04' autocomplete="off"></textarea>
                <br></br>
                <input type="submit" value="Enviar formulário!"/>
            </form>
        </div>
    </>
    )
}

export default Content
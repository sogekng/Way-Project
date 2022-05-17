import React from 'react'



const Teste = () => {
    let vari;
    let numero = 1;

    if(numero === 1){vari = 'Design'}
    else if(numero === 2){vari = 'Programador'}

    return (
    <div><h1>{vari}</h1><p>Lorem Lorem Lorem</p></div>
    )
}

export default Teste
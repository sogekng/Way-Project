import React, { useState, useEffect} from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import GlobalTheme from "../globals";
import logo from '../logo.svg';

const DarkTheme = () => {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme = () => {
        if (theme === "light") {
        window.localStorage.setItem("theme", "dark");
        setTheme("dark");
        } else {
        window.localStorage.setItem("theme", "light");
        setTheme("light");
        }
    };
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, []);
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalTheme />
            <header className='header'>
                  <div className='container'>
                  <div className='bloco0'><a href='#logo'><img src={logo} alt="logo" /></a></div>
                  <div className='bloco1'><a href='#home'>HOME</a></div>
                  <div className='bloco2'><a href='#sobre'>SOBRE NÓS</a></div>
                  <div className='bloco3'><a href='#oquesomos'>O QUE SOMOS</a></div>
                  <div className='bloco4'><a href='#oqueoferecemos'>O QUE OFERECEMOS</a></div>
                  <div className='bloco5'>
                    <div className="switch__container">
                      <input id="switch-shadow" class="switch switch--shadow" type="checkbox" onClick={toggleTheme}/>
                    <label for="switch-shadow"></label>
                    </div>
                  </div>
                  </div>
            </header>
        </ThemeProvider>
      );
    }


export default DarkTheme;
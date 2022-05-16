import React, { useState, useEffect} from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import GlobalTheme from "../globals";
import logo from '../logo.svg';

const Header = () => {
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
              <img src={logo} alt="logo"/>
              <div><strong>HOME</strong></div>
              <div><strong>SERVIÇOS</strong></div>
              <div><strong>SOBRE NÓS</strong></div>
              <div><strong>CONTATOS</strong></div>
              <div className="switch__container">
                <input id="switch-shadow" class="switch switch--shadow" type="checkbox" onClick={toggleTheme}/>
                <label for="switch-shadow"></label>
              </div>
            </header>
        </ThemeProvider>
      );
    }


export default Header;
import React, { useState, useEffect} from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import GlobalTheme from "../globals";


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
              <div className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.86 92.58"><defs className='cls-1 cls-2'></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="MAIN"><g id="GROUP_WAY" data-name="GROUP WAY"><path class="cls-1" d="M156.85,45.8a81.68,81.68,0,0,1-2.08,13.07c-.21.92-.38,1.66-.51,2.21l-6.94,31.5h-29L85.18.15h39.47l7.26,40.72c.63,3.58,1.12,6.85,1.45,9.82s.55,5.76.64,8.37h.75a86.33,86.33,0,0,1,2-14.46c.08-.55.17-1,.25-1.33L145.74.15h23.42l8.78,43.19c0,.25.12.67.25,1.26a87.66,87.66,0,0,1,2,14.46h.75q.14-3.91.64-8.37c.33-3,.82-6.24,1.45-9.82L190.25.15l39.49,0-33.18,92.4h-29l-6.94-31.5q-.19-.82-.51-2.28a80.25,80.25,0,0,1-2.08-13Z"/><path class="cls-1" d="M198.61,92.58,231.56.15h37l32.32,92.43H265.15l-3-11.62H237.12l-2.84,11.62ZM242.67,59H256.5c-1.17-10-4-31.52-7.29-31.48S243.61,48.93,242.67,59Z"/><path class="cls-2" d="M345.46.31H378L338.2,92.23H304.48Z"/><path class="cls-1" d="M329.66,27.51,313.34,57.33,282.16.1,312.11,0"/></g><g id="L_-_MENUS" data-name="L - MENUS"><path class="cls-1" d="M78.35,22,10.68,57.39c0-.06-2-3.88-2-4-2.37-4.59-2.83-6.53-4.73-9.16A23.27,23.27,0,0,0,1.17,41.1c7-3.73,12.7-6.88,16.7-9.12L36,21.64c14.7-8.37,15-8.57,18.73-10.66C59.34,8.38,66,4.66,74,.15Q76.2,11.06,78.35,22Z"/><path class="cls-1" d="M74,92.58,0,60.88,1.17,41.1,78.4,69.91Q76.22,81.23,74,92.58Z"/></g><g id="R_-_MAIS" data-name="R - MAIS"><path class="cls-1" d="M382.39,70.18,450.21,34.3c0,.07,2,3.87,2.06,3.93,2.41,4.58,2.88,6.51,4.8,9.13a24.92,24.92,0,0,0,2.78,3.16c-7,3.78-12.64,7-16.63,9.26L425.15,70.26l-16.93,9.83-1.71,1c-2.54,1.47-7.91,4.66-19.23,11.5Z"/><path class="cls-1" d="M386.46.15l74.4,30.58q-.51,9.89-1,19.79L382.39,22.35Z"/></g></g></g></g></svg>
              </div>
              <div className='textMenu'><strong>HOME</strong></div>
              <div className='textMenu'><strong>SERVIÇOS</strong></div>
              <div className='textMenu'><strong>SOBRE NÓS</strong></div>
              <div className='textMenu'><strong>CONTATOS</strong></div>
              <div>
                <input type="checkbox" className="checkbox" id="chk" onClick={toggleTheme}/>
                <label className="label" for="chk">
                  <div className="ball"></div>
                </label>
              </div>
            </header>
        </ThemeProvider>
      );
    }


export default Header;
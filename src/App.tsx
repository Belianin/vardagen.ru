import React from 'react';
import './App.css';
import Carousel from "react-material-ui-carousel";

import './modules.d.ts';
// @ts-ignore
import PreloadImage from "react-preload-image";

const imageLinks = [
    "https://www.instagram.com/p/CBLf4uzjGX5/media?size=l",
    "https://www.instagram.com/p/CBDhNaijfsX/media?size=l",
    "https://www.instagram.com/p/CBC6buMjiNK/media?size=l",
    "https://www.instagram.com/p/CBBeCCujJ5y/media?size=l",
    "https://www.instagram.com/p/CBA_jXcDApF/media?size=l",
    "https://www.instagram.com/p/CA-fCC0DltY/media?size=l",
    "https://www.instagram.com/p/CA9xwXzjBDt/media?size=l",
    "https://www.instagram.com/p/CA8YuyjDr-7/media?size=l"
];

interface IAppProps {

}

interface IAppState {
    images: HTMLImageElement[]
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            images: []
        }
    }

    render () {
    return (
        <div>
          <header>
            <menu className="menu">
              <li><a href="#">главная</a></li>
              <li><a href="#">меню</a></li>
              <li><a href="#">о нас</a></li>
              <li><a href="#">контакты</a></li>
            </menu>
          </header>
          <main>
            <div className="logo-container">
              <div className="logo">
                <b className="title">VÅRDAGEN</b><br /><span>modern fusion kitchen</span>
              </div>
            </div>
            <div className={"gallery-container"}>
              <Carousel autoPlay={true} indicators={false} navButtonsAlwaysVisible={true} interval={4000} animation={"fade"} className={"gallery"} fullHeightHover={false} timeout={200}>
                {imageLinks.map(i => (<PreloadImage className={"gallery-img"} src={i} />))}
            </Carousel>
          </div>
          </main>
          <footer>
            <p className="footer-content">Телефон: <a href="tel:+1234567890">+1234567890</a></p>
          </footer>
        </div>
    );
  }
}

export default App;

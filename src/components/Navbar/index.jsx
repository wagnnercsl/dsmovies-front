import React from 'react';
import { ReactComponent as GithubIcon } from '../../assets/github-icon.svg';
import './styles.css';

const Navbar = () => {
    return(
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovies</h1>
                    <a href="https://github.com/wagnnercsl" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon fontSize={50} />
                            <p className="dsmovie-contact-link">/wagnnercsl</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
import React, { Component } from 'react';
import logo_home from '../assets/images/logo_home.svg'

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className="logo">
                    <img src={logo_home} alt="logo HeartShare" height='400' width='400'/>
                    <div className='connect'>
                        <h3>connexion</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
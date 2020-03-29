import React, { Component } from 'react';
import logo_home from '../assets/images/logo_home.svg'

class Home extends Component {
    render() {
        return (
            <div className='home h-screen' >
                <div>
                    <img className="mx-auto pt-40" src={logo_home} alt="logo HeartShare" height='400' width='400'/>
                    <div>
                        <h2 className='text-2xl text-center mt-20 font-bold'>See you soon <span aria-label="emoji-heart" role="img">😍</span></h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
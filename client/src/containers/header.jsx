import React, { Component } from 'react';
import logo_home from '../assets/images/logo_home.svg'
import Profile from './profile'
var FA = require('react-fontawesome')


class Header extends Component {
    render(){
        return(
            <div className="py-5 px-10 flex justify-between items-center">
                <img src={logo_home} alt="logo HeartShare" height='150' width='150'/>
                <form className='relative w-1/2 lg: w-1/3'>
                    <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search" />
                    <FA name="search" className='search text-2xl text-gray-400 absolute'/>
                </form>
                <Profile />
            </div>
        );
    }
}


export default Header;
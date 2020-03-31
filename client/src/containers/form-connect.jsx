import React, { Component } from 'react';
import logo_home from '../assets/images/logo_home.svg'


class FormConnect extends Component {
    render() {
        return (
            <div>
                <img className="mx-auto pt-5" src={logo_home} alt="logo HeartShare" height='400' width='400'/>
                <div className='mt- mx-auto p-5 bg-red-600 w-1/2 max-w-screen-md rounded-lg '>
                    <p className="text-xl font-bold  text-center">Connexion</p>
                    <div className=" w-3/4 max-w-lg mx-auto">
                        <form className=" px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                            <label className="block  text-sm font-bold mb-2" for="username">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div className="mb-6">
                            <label className="block  text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            </div>
                            <div className="flex items-center justify-between">
                            <button className="bg-white hover:bg-red-200 text-red-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"   type="button">
                                Connexion
                            </button>
                            <a className="ml-5 inline-block align-baseline font-bold text-sm text-white hover:text-red-200" href="/home">
                                Forgot Password?
                            </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormConnect;
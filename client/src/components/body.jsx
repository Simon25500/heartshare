import React, { Component } from 'react';

import Map from '../containers/map';
var FA = require('react-fontawesome')

class Body extends Component {

    render(){
        return(
            <div className=" mt-20 mx-8 flex justify-between">
                <div className="hidden md:block">
                    <div className="block bg-gray-400 w-64 h-64 text-center">
                        <FA name="calendar" className='text-6xl mt-10 opacity-25'/>
                        <p className="p-10 text-gray-700">Connectez vous pour voir vos evenement</p>
                    </div>
                    <div className="actu mt-10 w-64 h-64">
                    </div>
                </div>
                <div className="body  flex-grow md:ml-10 flex flex-col">
                    <div className="w-full bg-gray-400 flex-grow overflow-y-scroll h-64" id="scroll">
                        <div className="flex border-solid border-b border-gray-600 ">
                            <div className="w-24 h-24 bg-gray-700"></div>
                            <div>
                                <p className="text-xs">coucou</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-10 h-64 lg:hidden">
                        <Map />
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/3 ml-10 xl:1/4 ">
                    <Map />
                </div>
            </div>
        );
    }
}

export default Body;
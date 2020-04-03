import React, { Component } from 'react';

import Map from '../containers/map';
import Event from '../containers/event'
import CardList from '../containers/card-list';

class Body extends Component {

    render(){
        return(
            <div className=" mt-20 mx-8 flex justify-between">
                <div className="hidden md:block">
                    <Event />
                    <div className="actu mt-10 w-64 h-64">
                    </div>
                </div>
                <div className="body flex-grow md:ml-10 flex flex-col lg:flex-row">
                    <CardList />
                    <div className="w-full mt-10 h-64 lg:mt-0 lg:ml-10 lg:h-full">
                        <Map />
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
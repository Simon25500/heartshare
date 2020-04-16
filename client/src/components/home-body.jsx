import React, { Component } from 'react';
import Event from '../containers/event';
class HomeBody extends Component {

    render(){
        return(
            <div className=" mt-20 mx-8 flex justify-between">
                <div className="hidden md:block">
                    <Event />
                    <div className="actu mt-10 w-64 h-64">
                    </div>
                </div>
                <div className="flex-grow md:ml-10 flex flex-col lg:flex-row bg-gray-400">
                    {this.props.component}
                </div>
            </div>
        );
    }
}

export default HomeBody;
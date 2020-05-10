import React, { Component } from 'react';
class HomeBody extends Component {

    render(){
        if (this.props.comp === "show"){
            return(
                <div className=" mt-20 mx-8">
                    <div >
                        {this.props.component}
                    </div>
                </div>
            );
        } else {
            return(
                <div className="w-screen mt-5 md:mt-20 mx-2 md:mx-8 flex justify-between">

                    <div className="mx-auto md:w-2/3  flex flex-col lg:flex-row bg-gray-400">
                        {this.props.component}
                    </div>
                </div>
            );
        }
        
    }
}

export default HomeBody;
import React, { Component } from 'react';
import ProfileMenu from './profile-menu';


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
    }
    
    handleClick = () => {
        if (this.state.active === false){
            this.setState({active: true})
        } else {
            this.setState({active: false})            
        }
    }

    render(){
        const style = {backgroundImage: `url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png)`}
        return(
            <div className="relative">
                <div onClick={this.handleClick} className="profile shadow h-16 w-16 bg-gray-400 rounded-full bg-cover bg-bottom " style={style}></div>
                {this.state.active === true ? <ProfileMenu /> : ""}
            </div>
        );
    }
}


export default Profile;
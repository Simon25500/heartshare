import React, { Component } from 'react';

class ProfileMenu extends Component {
    render() {
        return (
            <div className="profilemenu absolute bg-gray-400"
            >
                <div className="p-5 border">
                    <p className="block profile text-center">Connexion</p>
                </div>
                <div className="p-5 border">
                    <p className="block profile text-center" >Inscription</p>
                </div>
            </div>
        );
    }
}

export default ProfileMenu;
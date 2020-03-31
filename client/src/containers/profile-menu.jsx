import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileMenu extends Component {
    render() {
        return (
            <div className="profilemenu absolute bg-gray-400">
                <Link to="/connexion">
                    <div className="p-5 border">
                        <p className="block profile text-center">Connexion</p>
                    </div>
                </Link>
                <Link to="/inscription">
                    <div className="p-5 border">
                        <p className="block profile text-center" >Inscription</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ProfileMenu;
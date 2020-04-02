import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isLog } from "../actions";


class ProfileMenu extends Component {

    componentWillMount() {
        this.props.isLog()
    }


    render() {
        if (this.props.user === null || this.props.user.userId === null){
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
        } else {
            console.log(this.props.user)
            return(
                <div> coucou</div>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {isLog: isLog},
        dispatch
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileMenu);
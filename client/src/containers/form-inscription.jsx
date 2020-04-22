import React, { Component } from 'react';
import logo_home from '../assets/images/logo_home.svg'
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { inscription } from '../actions';


class FormInscription extends Component {

    onSubmit = (values) => {
        this.props.inscription(values, (post) => {
            this.props.history.push('/'); // Navigate after submit
            return post;
        });
    }


    render() {
        return (
            <div className="p-5">
                <img className="mx-auto pt-5" src={logo_home} alt="logo HeartShare" height='400' width='400'/>
                <div className=' mx-auto p-5 bg-red-600 w-full md:w-1/2 max-w-screen-md rounded-lg '>
                    <p className="text-xl font-bold  text-center">Inscription</p>
                    <div className=" w-full sm:w-3/4 max-w-lg mx-auto">
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className=" px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                            <label className="block  text-sm font-bold mb-2" htmlFor="email" >
                                Email
                            </label>
                            <Field
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            label="email"
                            name="email"
                            component="input"
                            />
                            </div>
                            <div className="mb-6">
                            <label className="block  text-sm font-bold mb-2" >
                                Password
                            </label>
                            <Field
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            label="password"
                            name="password"
                            type="password"
                            component="input"
                            placeholder="******************"
                            />
                            </div>
                            <div className="flex items-center justify-between">
                            <button className="bg-white hover:bg-red-200 text-red-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"   type="submit"
                            disabled={this.props.pristine || this.props.submitting}>
                                Inscription
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({ form: 'inscription' })(
    connect(null, { inscription })(FormInscription)
    );

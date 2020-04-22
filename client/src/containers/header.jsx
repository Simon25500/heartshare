import React, { Component } from 'react';
import logo_home from '../assets/images/logo_home.svg'
import Profile from './profile'
import AlgoliaPlaces from 'algolia-places-react';
import { setNear,cardSet, setPosition } from '../actions'
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/stylesheets/search.css'

class Header extends Component {

    change = () => {
        if (this.style === "shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"){
            this.style = "search shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        } else {
          this.style = "search shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        }
    }

    onClick = (position) => {
      this.props.setNear(position).then(()=> {
        this.props.setPosition({center:position,zoom:8})
        this.props.history.push(`/near/lat=${position.lat}&lng=${position.lng}`)
      });
  }

    style = "hidden sm:block shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

    render(){
        return( 
          <div>
            <div className="pt-5 px-10 flex justify-between items-center">
                <Link to="/">
                  <img src={logo_home} alt="logo HeartShare" height='150' width='150'/>
                </Link>
                      <AlgoliaPlaces
        placeholder='Rechercher par villes'
        className={this.style}
        id="address-input" type="search"
        options={{
          appId: 'plU5Y3A0QOV9',
          apiKey: 'b279fc45a0ef9b6d77da799f3dc3ed7f',
          language: 'fr',
          countries: ['fr'],
          type: 'city',
          // Other options from https://community.algolia.com/places/documentation.html#options
        }}

        onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
          console.log(suggestion)
          this.onClick(suggestion.latlng,suggestion.name)}}
  
        onSuggestions={({ rawAnswer, query, suggestions }) => 
          console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}
  
        onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) => 
          console.log('Fired when arrows keys are used to navigate suggestions.')}
  
        onClear={() => console.log("clear")}
  
        onLimit={({ message }) => 
          console.log('Fired when you reached your current rate limit.')}
  
        onError={({ message }) => 
          console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
      />
                  <Profile />
          </div>
          <div className="w-full flex px-10 flex-col items-center">
              <AlgoliaPlaces
            placeholder='Rechercher par villes'
            className= " sm:hidden mb-5  shadow appearance-none border rounded-full w-full  mx py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address-input" type="search"
            options={{
              appId: 'plU5Y3A0QOV9',
              apiKey: 'b279fc45a0ef9b6d77da799f3dc3ed7f',
              language: 'fr',
              countries: ['fr'],
              type: 'city',
              // Other options from https://community.algolia.com/places/documentation.html#options
            }}

            onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
              console.log(suggestion)
              this.onClick(suggestion.latlng,suggestion.name)}}
      
            onSuggestions={({ rawAnswer, query, suggestions }) => 
              console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}
      
            onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) => 
              console.log('Fired when arrows keys are used to navigate suggestions.')}
      
            onClear={() => console.log("clear")}
      
            onLimit={({ message }) => 
              console.log('Fired when you reached your current rate limit.')}
      
            onError={({ message }) => 
              console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
          />
          </div>
        </div>             
        );
    }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setNear: setNear,
      cardSet: cardSet,
      setPosition: setPosition
  },
    dispatch
  )
}

export default withRouter(connect(null, mapDispatchToProps)(Header));
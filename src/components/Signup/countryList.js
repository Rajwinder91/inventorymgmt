import React, { Component } from 'react'
import axios from 'axios';  
import Signup from './signup';
  
export class countryList extends Component {  

    constructor(props) {
        super();
        this.state = {
            countries: [],
        };
    }  
    componentDidMount() {  
        let initialPlanets = [];
        fetch(`http://18.218.124.225:3000/api/countries/country`)
        .then(response => {
            return response.json();
        }).then(data => {
        initialPlanets = data.results.map((country) => {
            return country
        });
        console.log(initialPlanets);
        this.setState({
            countries: initialPlanets,
        })
    })
        .catch(error => {
            //console.log("Error"+error);
            this.setState({errorMessage: error.response.data.message});
        })
    }  
    
    render() {  
        return (             
            <Signup state={this.state}/>
        )  
    }  
}  
  
export default countryList;
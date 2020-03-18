import React, { Component } from 'react'  
import Select from 'react-select';  
import axios from 'axios';  
  
export class countryList extends Component {  
    constructor(props) {  
        super(props)  

        this.state = {  
            country: []  
        }  
    }  
    componentWillMount() {  
        axios.get('http://18.218.124.225:3000/api/Countrylist')
        .then(response => {  
            console.log(response);  
            this.setState({  
                country: response.data  
            })  
        })  
    }  
    Country() {  

        return (this.state.country.map(data => ({ label: data.Name, value: data.Id })))  
    }  
    render() {  
        return (             
            <Select name="country" options={this.Country()} class="form-control" />  
        )  
    }  
}  
  
export default countryList;  
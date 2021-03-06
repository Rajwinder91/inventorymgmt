import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

export class provinceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      province: [],
    };
  }
  componentWillMount() {
    axios
      .get("https://api-tradego.herokuapp.com/api/Provincelist")
      .then((response) => {
        console.log(response);
        this.setState({
          province: response.data,
        });
      });
  }
  Province() {
    return this.state.province.map((data) => ({
      label: data.Name,
      value: data.Id,
    }));
  }
  render() {
    return (
      <Select name="province" options={this.Province()} class="form-control" />
    );
  }
}

export default provinceList;

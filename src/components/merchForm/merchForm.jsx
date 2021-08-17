import React, { Component } from "react";
import "./merchForm.css";
import axios from "axios";

class MerchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      description: "",
      price: "",
      userid: ""            
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  addMerch = async (merch) => {
    const jwt = localStorage.getItem("token");
    const response = await axios
      .post(`https://localhost:44394/api/merches`, merch,{
        headers: { Authorization: "Bearer " + jwt },
      })
      .then((response) => {
        console.log(response);
      
        // this.props.getMerch(merchId)
        this.props.getAllItems()
      })     
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { value, type } = event.target;

    this.setState({
      [event.target.name]:
        type === "number" ? parseFloat(value) : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const merch = {
      name: this.state.name,
      category: this.state.category,
      description: this.state.description,
      price: this.state.price,
      userid: this.state.userid
      };

    console.log(merch);
    this.addMerch(merch);
  };

  render() {
    return (
      <div className="center">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <h2>Add Cards for Sale</h2>
          <br />
          <div className="form-group">
            <select
              className="custom-select custom-select-lg"
              value={this.state.category}
              type="text"
              name="category"
              onChange={this.handleChange}
            >
              <option value>Select a Category</option>
              <option value="Baseball">Baseball</option>
              <option value="Basketball">Basketball</option>
              <option value="Football">Football</option>
              <option value="Hockey">Hockey</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={this.handleChange}
            value={this.state.description}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={this.handleChange}
            value={this.state.price}
          />

          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default MerchForm;

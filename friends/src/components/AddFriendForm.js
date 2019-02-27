import React from "react";

class AddFriendForm extends React.Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>add friend</h1>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input name="age" value={this.state.age} onChange={this.handleChange} />
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button>submit</button>
      </form>
    );
  }
}

export default AddFriendForm;

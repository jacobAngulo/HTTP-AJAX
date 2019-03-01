import React from "react";

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChange = e => {
    e.persist();
    let value = e.target.value;
    if(e.target.name === 'age') {
      value = parseInt(value, 10)
    }
    this.setState((prevState) => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: value
      }
    }));
  };

  render() {
    return (
      <form onSubmit={(e) => this.props.addFriend(e, this.state.friend)}>
        <h1>add friend</h1>
        <input
          name="name"
          value={this.state.friend.name}
          onChange={this.handleChange}
          placeholder='name'
        />
        <input
          name="age"
          value={this.state.friend.age}
          onChange={this.handleChange}
          placeholder='age'
        />
        <input
          name="email"
          value={this.state.friend.email}
          onChange={this.handleChange}
          placeholder='email'
        />
        <button>submit</button>
      </form>
    );
  }
}

export default AddFriendForm;

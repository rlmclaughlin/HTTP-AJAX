import React from 'react';

 export default class Friend extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       newInfo: {
         name: props.friend.name,
         age: props.friend.age,
         email: props.friend.email,
         id: props.friend.id
       }
     }
   }

    inputChange = e => {
      e.preventDefault();
      this.setState({
        newInfo: {
          ...this.state.newInfo,
          [e.target.name]: e.target.value
        }
      });
    };

   numberInputChange = e => {
    e.preventDefault();
    this.setState({
      newInfo: {
        ...this.state.newInfo,
        [e.target.name]: parseInt(e.target.value)
      }
    });
  };
   
   submitUpdate = () => {
     this.props.updateFriend(this.state.newInfo)
   }

   delete = () => {
     this.props.deleteFriend(this.props.friend)
   }

    render() {
      return (
        <div>
          <div onClick={this.delete}>X</div>
          <h1>{this.props.friend.name}</h1>
          <div>
            {`Age: ${this.props.friend.age}`}
          </div>
          <div>
            {`Email: ${this.props.friend.email}`}
          </div>
          
          <form>
            <input 
              placeholder='Name' 
              onChange={this.inputChange} 
              value={this.state.newInfo.name} 
              name='name' />
            <input 
              type='number' 
              placeholder='Age' 
              onChange={this.numberInputChange} 
              value={this.state.newInfo.age} 
              name='age' />
            <input 
              placeholder='Email' 
              onChange={this.inputChange} 
              value={this.state.newInfo.email} 
              name='email' />
            <button type='submit' onClick={this.submitUpdate}>Update Friend</button>
          </form>
        </div> 
        )
    }
}
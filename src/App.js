import React,{Component} from 'react';
import Users from './users';
import Input from './input';
import './DemoStyle.css';

class App extends Component {
  state = {
    users:[
      {id:'A1',name : "Ramesh"},
      {id:'A2',name : "Girish"},
      {id:'A3',name : "Umesh"},
      {id:'A4',name : "Sarita"},
      {id:'A5',name : "Pavani"}
    ],
    input :[
      {size:'0',error:''}
    ]
  }

  deleteItemHandle = (itemIndex) =>{
    const users =  this.state.users;
    users.splice(itemIndex,1);
    this.setState({users:users});
  }

  ContentManageHandler = (event,itemIndex)=>{
    const userIndex = this.state.users.findIndex(p=>{
      return p.id == itemIndex;
    });

    const user = { ...this.state.users[userIndex]};
    user.name = event.target.value;
    const users = [...this.state.users];
    users[userIndex] = user;
    this.setState({users:users});
  }

  inputHandler = (event)=>{
      const inputsize = { ...this.state.input[0]};
      inputsize.size = (event.target.value).length;
      const input = [...this.state.input];
      input[0] = inputsize;
      this.setState({input:input});
  }

  inputValidationHandler = (event)=>{
    const inputsize = { ...this.state.input[0]};
    if((event.target.value).length<5){
      inputsize.error = 'text to short';
    }
    if((event.target.value).length>9){
      inputsize.error = 'text to long enough';
    }
    const input = [...this.state.input];
    input[0] = inputsize;
    this.setState({input:input});
  }

  render(){
    let users = null;
    users = (
     <div>
       {
        this.state.users.map((user,index)=>{
          return <Users name={user.name} changetext={(event) => this.ContentManageHandler(event,user.id)} key={index} click={() => this.deleteItemHandle(index)}/>
        })
       }
     </div> 
    )
    
    //let status = <button className={this.state.statusFlag[0].status=='0'?'offline':'online'} onClick={this.changeStatus}>Go Online</button>;

    return (
      <div>
        <center><h1>2st Assignment </h1>
        <Input click={(event) => this.inputHandler(event)} blur={(event) => this.inputValidationHandler(event)} error={this.state.input[0].error} data={this.state.input[0].size} /></center>
        <br/><br/>
         {users}
      </div>
    );
    }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Messages from "./component/message";
import Input from "./component/send_message";
import Logos from "./component/logo_com"
import axios from 'axios';


class App extends Component {
  state = {
    messages: []
  }


  render() {
    return (
      <div className="App">
        <Logos />
        <Messages className="Message_list_container"
          messages={this.state.messages}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
        
      </div>
    );
  }

  onSendMessage = (message) => {
    const temp_message=this.state.messages
    temp_message.push({text: message,member:"Client",color:"#008000"})
    this.setState({temp_message})
    const body={
      text:message
    }
    axios.post("http://127.0.0.1:8000/chat/api",body)
    .then(res=>{
      const text_message=res.data.text
      const temp_message=this.state.messages
      temp_message.push({text: text_message,member:"Chatbot",color:"#001000"})
      this.setState({temp_message})
    })
    .catch(err=>
      {
        console.log(err)
      })

    
  }

}

export default App;
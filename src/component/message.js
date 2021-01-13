import React,{Component} from "react";

class Messages extends Component {


  renderMessage(message) {
    const { text,member, color} = message;
    const className = member==="Client" ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li className={className}>
      <span
        className="avatar"
        style={{backgroundColor: color}}
      />
        <div className="Message-content">
          <div className="username">
            {member}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }
}

export default Messages;
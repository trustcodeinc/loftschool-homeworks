import React, {Component} from 'react';
import './Chat.css';
import Message from '../Message';

export default class Chat extends Component {

    state = {
        messageInput: '',
        messages: []
    };

    changeInputMessage = e => {
        console.log('changeInputMessage');
        this.setState({
            messageInput: e.target.value
        });
    };

    sendMessageOnEnter = e => {
        if(e.key === 'Enter'){
            if(this.state.messageInput !== ''){
                this.setState({
                    messages : [...this.state.messages, {text: this.state.messageInput}],
                    messageInput: ''
                });
            }else{
                alert('Нельзя отправить пустое сообщение) Заполните поле.');
            }
        }
    };

    render() {
        return (
          <div className="chat">
            <div className="message-list">
              <div className="messages">
                {this.state.messages.map(message => (
                    <Message key={message.text} text={message.text} />
                ))}
              </div>
            </div>
            <input
              className="input-message"
              value={this.state.messageInput}
              onChange={this.changeInputMessage}
              onKeyPress={this.sendMessageOnEnter}
              placeholder="Введите ваше сообщение"
            />
          </div>
        );
      }

}
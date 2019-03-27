import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import firebase from "../../firebase";
import Message from "./Message";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";

class Messages extends React.Component {
  state = {
    messagesRef: firebase.database().ref("messages"),
    messages: [],
    messagesLoading: true,
    channel: this.props.currentChannel,
    user: this.props.currentUser
<<<<<<< HEAD
  }

  componentDidMount() {
    const { channel, user } = this.state;
    if (channel && user) {
      this.addListeners(channel.id);
    }
  }


  addListeners = channelId => {
    this.addMessageListeners(channelId);
  }

  addMessageListeners = channelId => {
    let loadedMessages = [];
    this.state.messagesRef.child(channelId).on('child_added', snap => {
      loadedMessages.push(snap.val())
      console.log(loadedMessages)
    })
  }



  render() {
    const { messagesRef, channel, user } = this.state;
=======
  };

  componentDidMount() {
    const { channel, user } = this.state;

    if (channel && user) {
      this.addListeners(channel.id);
    }
  }

  addListeners = channelId => {
    this.addMessageListener(channelId);
  };

  addMessageListener = channelId => {
    let loadedMessages = [];
    this.state.messagesRef.child(channelId).on("child_added", snap => {
      loadedMessages.push(snap.val());
      // console.log(loadedMessages + loadedMessages.length)
      this.setState({
        messages: loadedMessages,
        messagesLoading: false
      });
    });
  };

  displayMessages = messages =>
    messages.length > 0 &&
    messages.map(message => (
      <Message
        key={message.timestamp}
        message={message}
        user={this.state.user}
      />
    ));

  render() {
    const { messagesRef, messages, channel, user } = this.state;

>>>>>>> 8e07dd932829ca28dd958cd61d783298d9b5cfe7
    return (
      <React.Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className="messages">
            {this.displayMessages(messages)}
            
          </Comment.Group>
        </Segment>
<<<<<<< HEAD
        <MessageForm messagesRef={messagesRef}
          currentChannel={channel} currentUser={user} />
=======
        <MessageForm
          messagesRef={messagesRef}
          currentChannel={channel}
          currentUser={user}
        />
>>>>>>> 8e07dd932829ca28dd958cd61d783298d9b5cfe7
      </React.Fragment>
    );
  }
}

export default Messages;

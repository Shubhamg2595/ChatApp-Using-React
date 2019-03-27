import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import firebase from '../../firebase'
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";


class Messages extends React.Component {

  state = {
    messagesRef: firebase.database().ref('messages'),
    channel: this.props.currentChannel,
    user: this.props.currentUser
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
    return (
      <React.Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className="messages">{/* messages */}</Comment.Group>
        </Segment>
        <MessageForm messagesRef={messagesRef}
          currentChannel={channel} currentUser={user} />
      </React.Fragment>
    );
  }
}

export default Messages;

import React from "react";
import { Segment, Accordion, Header, Icon,Image } from "semantic-ui-react";
class MetaPanel extends React.Component {
  state = {
    channel:this.props.currentChannel,
    privateChannel:this.props.isPrivateChannel,
    activeIndex: 0
  };

  setActiveIndex = (event, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex,privateChannel,channel } = this.state;

      if(privateChannel || !channel) return null
    return (
      <Segment>
        <Header as="h2" attached="top">
          About # {channel.name}
        </Header>
        <Accordion styled attached="true">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="info" />
            Channel Details
            
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
          
          {channel.details}
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="user circle" />
            Top Poster
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            posters
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="pencil alternate" />
            Created By
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Image src={channel.createdBy.avatar}/>{channel.createdBy.name}
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}

export default MetaPanel;

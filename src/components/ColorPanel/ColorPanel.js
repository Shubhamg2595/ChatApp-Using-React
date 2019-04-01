import React from "react";
import { Sidebar, Menu, Divider, Button, Modal, Icon, Label, Segment } from "semantic-ui-react";
import { GithubPicker } from 'react-color'
class ColorPanel extends React.Component {

  state = {
    modal: false,
    primary: '',
    secondary: ''
  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  handleChangePrimary = color => { this.setState({ primary: color.hex }) }
  handleChangeSecondary = color => { this.setState({ secondary: color.hex }) }


  render() {
    const { modal, primary, secondary } = this.state;
    return (
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        vertical
        visible
        width="very thin"
      >
        <Divider />
        <Button icon="add" size="small" color="blue" onClick={this.openModal} />
        {/* ColorPicker Modal*/}
        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Choose App Colors</Modal.Header>
          <Modal.Content>
            <Segment inverted>
              <Label content="Primary Color" />
              <GithubPicker onChange={this.handleChangePrimary} color={primary} />
            </Segment>

            <Segment inverted>
              <Label content="Secondary Color" />
              <GithubPicker onChange={this.handleChangeSecondary} color={secondary} />
            </Segment>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted>
              <Icon name="checkmark" /> Save Colors
        </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
        </Button>


          </Modal.Actions>
        </Modal>

      </Sidebar>
    );
  }
}

export default ColorPanel;

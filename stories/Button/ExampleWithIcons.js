import React, {Component} from 'react';
import {X} from 'wix-style-react/new-icons';
import {Button} from 'wix-style-react/Backoffice';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px'
};

class IconsExample extends Component {
  render() {
    return (
      <div>
        <div className="ltr" style={style}>
          Prefix<br/>
          <Button id="button" dataHook="story-button-prefix" prefixIcon={<X/>}>Prefix</Button>
        </div>

        <div className="ltr" style={style}>
          Suffix<br/>
          <Button id="button" dataHook="story-button-suffix" suffixIcon={<X/>}>Suffix</Button>
        </div>
      </div>
    );
  }
}

export default () =>
  <IconsExample/>;




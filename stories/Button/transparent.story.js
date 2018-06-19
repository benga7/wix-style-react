import React from 'react';

import Button from 'wix-style-react/Button';

import * as Icons from 'wix-style-react/new-icons';

const icons = Object.values(Icons).map(icon => React.createElement(icon));

export default {
  category: '5. Buttons',
  storyName: '5.6 Transparent',
  component: Button,
  componentPath: '../../src/Backoffice/Button',

  componentProps: {
    height: 'small',
    theme: 'transparent',
    children: 'Click Me'
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    onMouseEnter: () => 'Mouse Enter!',
    onMouseLeave: () => 'Mouse Leave!',
    prefixIcon: icons,
    suffixIcon: icons
  }
};

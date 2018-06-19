import React from 'react';

import Button from 'wix-style-react/Button';

import * as Icons from 'wix-style-react/new-icons';

const icons = Object.values(Icons)
  .map(icon => React.createElement(icon));

export default {
  category: '5. Buttons',
  storyName: '5.3 Icon',
  component: Button,
  componentPath: '../../src/Backoffice/Button',

  componentProps: {
    theme: 'icon-standard',
    children: <Icons.X/>
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    onMouseEnter: () => 'Mouse Enter!',
    onMouseLeave: () => 'Mouse Leave!',
    children: icons
  }
};

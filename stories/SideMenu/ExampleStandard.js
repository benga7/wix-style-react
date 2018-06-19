import React from 'react';

import {
  SideMenu,
  Button
} from 'wix-style-react';

import {
  InfoCircle as HelpIcon,
  Chat as ChatIcon,
  Delete as TrashIcon
} from 'wix-style-react/new-icons';

export default () =>
  <div style={{width: 220, height: 700}}>
    <SideMenu>
      <SideMenu.Header onClick={() => console.log('Header clicked')}>
        <TrashIcon/>
        <h2 style={{color: '#fff'}}>My Application</h2>
      </SideMenu.Header>

      <SideMenu.Navigation>
        <SideMenu.NavigationLink onClick={() => console.log('#1 clicked')} href="//wix.com">
          Link #1
        </SideMenu.NavigationLink>
        <SideMenu.NavigationLink withArrow onClick={() => console.log('#2 clicked')}>
          Link #2
        </SideMenu.NavigationLink>

        <SideMenu.NavigationSeparator/>

        <SideMenu.NavigationLink badge={<SideMenu.NavigationBadge/>} isActive onClick={() => console.log('#3 clicked')}>
          Link #3
        </SideMenu.NavigationLink>

        <SideMenu.NavigationLink
          href="https://academy.wix.com/en/seo"
          target="_blank"
          isDiminishedHover
          >
          Dim Hover link #1
        </SideMenu.NavigationLink>
      </SideMenu.Navigation>

      <SideMenu.Promotion>
        <Button
          theme="fullpurple"
          onClick={() => console.log('Promotion button clicked!')}
          >
          Buy 1 for price of 2!
        </Button>
      </SideMenu.Promotion>

      <SideMenu.Footer>
        <SideMenu.FooterLink
          href="https://support.wix.com/"
          target="_blank"
          icon={<HelpIcon/>}
          >
          Help Me!
        </SideMenu.FooterLink>

        <SideMenu.FooterTinyLink
          href="https://support.wix.com/en/article/wix-seo-wiz-suggestions-and-feedback"
          target="_blank"
          icon={<div style={{marginTop: 2}}><ChatIcon/></div>}
          tooltip="Hey, come talk to me!"
          onClick={() => console.log('clicked on tiny link yay!')}
          />
      </SideMenu.Footer>
    </SideMenu>
  </div>;


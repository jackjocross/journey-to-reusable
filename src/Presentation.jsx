/* eslint-disable import/no-extraneous-dependencies, global-require, react/jsx-filename-extension */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Heading, Slide, Text, List, ListItem, CodePane, Image } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import Deck from './Deck';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
).screen;

render(
  <Deck theme={theme}>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        React Albus
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Journey to a Reusable Component
      </Text>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Journey explanation
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What is a Wizard?
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Image width="100%" src="https://www.thurrott.com/wp-content/uploads/2015/06/setup-wiz.jpg" />
    </Slide>
    <Slide bgColor="primary">
      <Image
        width="100%"
        src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/osx/wifi_working_correct.png"
      />
    </Slide>
    <Slide bgColor="primary">
      <Image width="100%" src={require('./assets/payment.png')} />
    </Slide>
    <Slide bgColor="primary">
      <Image width="100%" src={require('./assets/dispute.png')} />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Declarative
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What Was Out There
      </Heading>
      <CodePane lang="jsx" source={require('./assets/WhatWasOutThere')} margin="20px" fit />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        We Have a Declarative Wizard!
      </Heading>
      <CodePane lang="jsx" source={require('./assets/DeclarativeWizard')} margin="20px" fit />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Flexibile
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What About Flexibility?
      </Heading>
      <List>
        <ListItem>How can we make this adaptable to Amex use cases?</ListItem>
        <ListItem>How can we make this adaptable to non-Amex use cases?</ListItem>
        <ListItem>Develop against your API</ListItem>
      </List>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Inverted
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Give Control Back
      </Heading>
      <List>
        <ListItem>Take advantage of what the framework already provides</ListItem>
        <ListItem>Allow an escape hatch with render callbacks</ListItem>
      </List>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Scoped
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        We Were Doing Too Much
      </Heading>
      <CodePane lang="jsx" source={require('./assets/DoingTooMuch')} margin="20px" fit />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Draw the Right Lines
      </Heading>
      <List>
        <ListItem>
          Solve a specific purpose and allow the developer to wrap more
          functionality if they need it
        </ListItem>
        <ListItem>Examples: react-router for routing and react-motion for animations</ListItem>
      </List>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What We Have Today
      </Heading>
      <CodePane lang="jsx" source={require('./assets/WhatWeHaveToday')} margin="20px" fit />
    </Slide>
    <Slide bgColor="secondary" maxHeight="100vw" maxWidth="100vw">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Keyboard Navigation Demo
      </Heading>
      <iframe
        src="https://codesandbox.io/embed/ERDnK3j8K"
        style={{
          width: '100%',
          height: '70vh',
          border: 0,
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Slide>
    <Slide bgColor="secondary" maxHeight="100vw" maxWidth="100vw">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Progress Bar Demo
      </Heading>
      <iframe
        src="https://codesandbox.io/embed/zKWgwj0vm"
        style={{
          width: '100%',
          height: '70vh',
          border: 0,
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Slide>
    <Slide bgColor="secondary" maxHeight="100vw" maxWidth="100vw">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Modal Demo
      </Heading>
      <iframe
        src="https://codesandbox.io/embed/new"
        style={{
          width: '100%',
          height: '70vh',
          border: 0,
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Slide>
  </Deck>,
  document.getElementById('root'),
);

/* eslint-disable import/no-extraneous-dependencies, global-require, react/jsx-filename-extension */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Heading, Slide, Text, List, ListItem } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import Deck from './src/Deck';

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
        Important Stuff
      </Heading>
      <List ordered start={1} type="A">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        More Important Stuff
      </Heading>
      <List ordered start={1} type="A">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
    </Slide>
  </Deck>,
  document.getElementById('root'),
);

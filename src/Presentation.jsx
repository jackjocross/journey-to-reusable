/* eslint-disable import/no-extraneous-dependencies, global-require, react/jsx-filename-extension */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Heading, Slide, Text, CodePane, Image, Link } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import Progress from './Progress';
import Deck from './Deck';

const checkpoints = [1, 7, 10, 13, 16, 19];
const checkpointTitles = ['🤔', 'Declarative', 'Composable', 'Inverted Control', 'Scoped', '< />'];

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

// eew
theme.components.codePane.code.fontSize = '1.5rem';
theme.components.codePane.pre.maxWidth = '80vw';

render(
  <Deck theme={theme}>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        React Albus
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} lineHeight={1} fit bold>
        Journey to a Reusable Component
      </Text>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=americanexpress&repo=react-albus&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="120px"
        height="30px"
        style={{ marginTop: '25px' }}
      />
      <div>
        <Image src={require('./assets/amex.png')} margin="20px" width="300px" />
      </div>
    </Slide>
    <Slide bgColor="primary">
      <Text>
        <Progress checkpoints={checkpoints} checkpointTitles={checkpointTitles} />
      </Text>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What are we building?
      </Heading>
      <Text>
        <Progress checkpoints={checkpoints} checkpointTitles={checkpointTitles} />
      </Text>
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
      <Image width="100%" src={require('./assets/ocr.jpg')} />
    </Slide>
    <Slide bgColor="primary">
      <Image width="100%" src={require('./assets/address.png')} />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Declarative
      </Heading>
      <Text>
        <Progress checkpoints={checkpoints} checkpointTitles={checkpointTitles} />
      </Text>
    </Slide>
    <Slide bgColor="primary" maxHeight="100vw">
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Imperative
      </Heading>
      <CodePane lang="jsx" source={require('./assets/ImperativeWizard')} margin="20px" fit />
    </Slide>
    <Slide bgColor="primary" maxHeight="100vw">
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Declarative
      </Heading>
      <CodePane lang="jsx" source={require('./assets/DeclarativeWizard')} margin="20px" fit />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Composable
      </Heading>
      <Text>
        <Progress checkpoints={checkpoints} checkpointTitles={checkpointTitles} />
      </Text>
    </Slide>
    <Slide bgColor="primary" maxHeight="100vw">
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Configurable
      </Heading>
      <CodePane lang="jsx" source={require('./assets/ConfigurableWizard')} margin="20px" fit />
    </Slide>
    <Slide bgColor="primary" maxHeight="100vw">
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Composable
      </Heading>
      <CodePane lang="jsx" source={require('./assets/ComposableWizard')} margin="20px" fit />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Inverted Control
      </Heading>
      <Text>
        <Progress checkpoints={checkpoints} checkpointTitles={checkpointTitles} />
      </Text>
    </Slide>
    <Slide bgColor="primary" maxHeight="100vw">
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Library Has Control
      </Heading>
      <CodePane lang="jsx" source={require('./assets/LibraryControl')} margin="20px" fit />
    </Slide>
    <Slide bgColor="primary" maxHeight="100vw">
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Developer Has Control
      </Heading>
      <CodePane lang="jsx" source={require('./assets/InvertedControl')} margin="20px" fit />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Scoped
      </Heading>
      <Text>
        <Progress checkpoints={checkpoints} checkpointTitles={checkpointTitles} />
      </Text>
    </Slide>
    <Slide bgColor="primary" maxHeight="100vw">
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Doing Too Much
      </Heading>
      <CodePane lang="jsx" source={require('./assets/Unscoped')} margin="20px" fit />
    </Slide>
    <Slide bgColor="primary" maxHeight="100vw">
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Solving a Specific Problem
      </Heading>
      <CodePane lang="jsx" source={require('./assets/Scoped')} margin="20px" fit />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What We Have Today
      </Heading>
      <Text>
        <Progress checkpoints={checkpoints} checkpointTitles={checkpointTitles} />
      </Text>
    </Slide>
    <Slide bgColor="secondary" maxHeight="100vw" maxWidth="100vw">
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Start Simple
      </Heading>
      <iframe
        src="https://codesandbox.io/embed/lwWyXOj"
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
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Add Keyboard Navigation
      </Heading>
      <iframe
        src="https://codesandbox.io/embed/D99PVGm4B"
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
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Add a Progress Bar
      </Heading>
      <iframe
        src="https://codesandbox.io/embed/59Ym08vrv"
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
      <Heading size={4} lineHeight={2} textColor="tertiary">
        Add a Confirmation Screen
      </Heading>
      <iframe
        src="https://codesandbox.io/embed/jqQE7p7Jy"
        style={{
          width: '100%',
          height: '70vh',
          border: 0,
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        className="CodeMirror-inverted"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={3}>
        Questions?
      </Heading>
      <Text>
        <Link href="https://twitter.com/forcetheissue" textColor="tertiary">@ForceTheIssue</Link>
      </Text>
      <Text>
        <Link href="https://twitter.com/jayjaycross" textColor="tertiary">@jayjaycross</Link>
      </Text>
      <Image width="30%" src={require('./assets/qr.png')} />
    </Slide>
  </Deck>,
  document.getElementById('root'),
);

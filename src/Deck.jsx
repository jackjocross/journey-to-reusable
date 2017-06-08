import React, { Component } from 'react';
import PropTypes from 'prop-types';
// For transitions between slides
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// For keeping the URL in sync with the slides
import { HashRouter, Route } from 'react-router-dom';
import { Wizard, Steps, Step, Navigation } from 'react-albus';

import KeyboardNavigation from './KeyboardNavigation';
import './transitions.scss';
import './CodeMirror.scss';

export default class Deck extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.shape({
      colors: PropTypes.object,
      components: PropTypes.object,
      controls: PropTypes.object,
      fonts: PropTypes.object,
      fullscreen: PropTypes.object,
      global: PropTypes.object,
      googleFonts: PropTypes.object,
      progress: PropTypes.object,
    }).isRequired,
  };

  static defaultProps = {
    children: null,
  };

  static childContextTypes = {
    styles: PropTypes.object,
  };

  getChildContext() {
    return {
      styles: this.props.theme,
    };
  }

  render() {
    return (
      <HashRouter>
        <Route
          path="/"
          render={({ history, match: { url } }) =>
            <Wizard
              basename={url}
              history={history}
              render={({ step }) =>
                <div>
                  <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                  >
                    <Steps key={step.path} step={step}>
                      {React.Children.map(this.props.children, (child, index) =>
                        <Step path={`${index}`} className="fade-step">{child}</Step>,
                      )}
                    </Steps>
                  </ReactCSSTransitionGroup>
                  <Navigation>
                    <KeyboardNavigation />
                  </Navigation>
                </div>}
            />}
        />
      </HashRouter>
    );
  }
}

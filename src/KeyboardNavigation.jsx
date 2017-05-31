import { Component, PropTypes } from 'react';

export default class KeyboardNavigation extends Component {
  static propTypes = {
    next: PropTypes.func.isRequired,
    previous: PropTypes.func.isRequired,
    step: PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }).isRequired,
    steps: PropTypes.arrayOf({
      name: PropTypes.string,
      path: PropTypes.string,
    }).isRequired,
  };

  componentWillMount() {
    window.addEventListener('keydown', this.navigate);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.navigate);
  }

  navigate = ({ keyCode }) => {
    const { next, previous, step, steps } = this.props;
    const index = steps.map(s => s.path).indexOf(step.path);
    const first = index === 0;
    const last = index === steps.length - 1;

    switch (keyCode) {
      case 32:
      case 39:
        if (!last) {
          next();
        }
        break;
      case 37:
        if (!first) {
          previous();
        }
        break;
      default:
    }
  };

  render() {
    return null;
  }
}

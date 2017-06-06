import React from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { withWizard } from 'react-albus';

const Progress = ({ step, steps, checkpoints, checkpointTitles }) => {
  const index = steps.indexOf(step);
  const activeStep = [index, ...checkpoints].sort((a, b) => a - b).lastIndexOf(index) - 1;

  return (
    <Stepper
      circleFontSize={0}
      activeColor="#03A9FC"
      completeColor="#03A9FC"
      steps={checkpointTitles.map(title => ({ title }))}
      activeStep={activeStep}
    />
  );
};

Progress.propTypes = {
  step: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  checkpoints: PropTypes.arrayOf(PropTypes.number).isRequired,
  checkpointTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withWizard(Progress);

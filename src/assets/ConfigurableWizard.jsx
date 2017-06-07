return (
  <Wizard
    showNavigation={true}
    showProgress={true}
  >
    <Steps>
      <Step path="gandalf">
        <Gandalf />
      </Step>
      <Step path="dumbledore">
        <Dumbledore />
      </Step>
    </Steps>
  </Wizard>
);

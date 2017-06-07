return (
  <Wizard history={createBrowserHistory()}>
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

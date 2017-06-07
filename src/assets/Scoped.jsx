return (
  <HashRouter>
    <Route
      path="/"
      render={({ history }) => (
        <Wizard history={history}>
          <Steps>
            <Step path="gandalf">
              <Gandalf />
            </Step>
            <Step path="dumbledore">
              <Dumbledore />
            </Step>
          </Steps>
        </Wizard>
      )}
    />
  </HashRouter>
);

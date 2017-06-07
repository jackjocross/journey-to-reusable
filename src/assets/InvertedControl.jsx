return (
  <Wizard>
    <Steps>
      <Step path="gandalf">
        <Gandalf />
      </Step>
      <Step path="dumbledore">
        <Dumbledore />
      </Step>
    </Steps>
    <Navigation
      render={({ next, previous }) =>
        <div>
          <button onClick={next}>Next</button>
          <button onClick={previous}>Previous</button>
        </div>}
    />
  </Wizard>
);

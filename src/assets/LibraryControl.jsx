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
      nextLabel="Next"
      previousLabel="Back"
      showNext={this.showNext}
      showPrevious={this.showPrevious}
    />
  </Wizard>
);

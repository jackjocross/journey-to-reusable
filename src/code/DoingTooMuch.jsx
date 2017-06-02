return (
  <Wizard routed>
    <Progress>
      <BarNav />
    </Progress>
    <Steps>
      <Step path="merlin">
        <Content>
          <Merlin />
        </Content>
        <Navigation>
          <Continue />
        </Navigation>
      </Step>
    </Steps>
  </Wizard>
);

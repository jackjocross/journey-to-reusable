const steps = [
  { name: 'Merlin', step: <Merlin /> },
  { name: 'Gandalf', step: <Gandalf /> },
  { name: 'Dumbledore', step: <Dumbledore /> }
];

return (
  <Wizard steps={steps} showNavigation={true} showProgress={true} />
);

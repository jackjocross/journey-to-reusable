const steps = [
  { name: 'Merlin', step: <Merlin /> },
  { name: 'Gandalf', step: <Gandalf /> },
  { name: 'Dumbledore', step: <Dumbledore /> }
];

return (
  <Wizard steps={steps} optionA={true} optionB={[1]} optionC={() => true} />
);

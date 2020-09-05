export function getSteps() {
  return [
    "Settings",
    "Select Items",
    "Select Templates",
    "Organize Items",
  ];
}

export function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Add menu settings...";
    case 1:
      return "Pick Items from catalog";
    case 2:
      return "Select menu templates";
    case 1:
      return "Orgamize catalog Items";
    default:
      return "Unknown stepIndex";
  }
}

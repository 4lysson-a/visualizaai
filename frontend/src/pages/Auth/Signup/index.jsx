import React from "react";

import StepViewer from "./StepViewer";

import {
  Finish,
  CreateAccount,
  CreateCompany,
} from "./Steps";

function StepChoise({ steps, setSteps }) {
  switch (steps.current) {
    case 1:
      return <CreateAccount setSteps={setSteps} />;
    case 2:
      return <CreateCompany steps={steps} setSteps={setSteps} />;
    case 3:
      return <Finish />;
    default:
      return <></>;
  }
}

export default function Signup() {
  React.useEffect(() => {
    localStorage.clear();
  }, []);

  const [steps, setSteps] = React.useState({
    current: 1,
    total: 3,
  });

  return (
    <>
      <StepChoise setSteps={setSteps} steps={steps} />
      <StepViewer steps={steps} />
    </>
  );
}

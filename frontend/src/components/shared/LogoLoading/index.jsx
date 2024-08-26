import React from "react";
import Rive from "@rive-app/react-canvas";

export default function LogoLoading() {
  const localStorageExit = JSON.parse(localStorage.getItem("exit"));
  const isExitValid =
    localStorageExit && localStorageExit.expire > new Date().getTime();

  const [exit, setExit] = React.useState(isExitValid);

  React.useEffect(() => {
    setTimeout(() => {
      setExit(true);
      localStorage.setItem(
        "exit",
        JSON.stringify({
          exit: true,
          expire: new Date().getTime() + 1000 * 60 * 60 * 24,
        })
      );
    }, 5000);
  }, []);

  if (exit) {
    return null;
  }

  return (
    <div className="h-full w-full z-50 fixed top-0 left-0 flex items-center justify-center bg-background">
      <Rive src="/rive/visualizaai.riv" />
    </div>
  );
}

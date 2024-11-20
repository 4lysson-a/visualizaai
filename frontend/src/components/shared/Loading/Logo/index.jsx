import React from 'react';
import ReactDOM from 'react-dom';
import Rive from '@rive-app/react-canvas';
import { LocalStorage } from '@/helpers/LocalStorage';

export default function LogoLoading() {
  const localExit = LocalStorage.get('initial_loading');
  const isExitValid = localExit && localExit.expire > new Date().getTime();

  const [exit, setExit] = React.useState(isExitValid);

  React.useEffect(() => {
    setTimeout(() => {
      setExit(true);
      LocalStorage.set('initial_loading', {
        exit: true,
        expire: new Date().getTime() + 1000 * 60 * 60 * 24
      });
    }, 5000);
  }, []);

  if (exit) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="h-screen w-full !z-[999999999999] fixed top-0 left-0 flex items-center justify-center bg-background">
      <Rive src="/rive/visualizaai.riv" />
    </div>,
    document.getElementById('loading')
  );
}

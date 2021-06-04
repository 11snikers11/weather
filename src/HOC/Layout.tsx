import './Layout.css';
import { ReactNode } from 'react';

type AppProps = {
  children: ReactNode;
};
function Layout(props: AppProps) {
  const { children } = props;
  return <div className="dk-weather-main-container">{children}</div>;
}

export default Layout;

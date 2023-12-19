import {Outlet} from 'react-router-dom';

function Layout() {
  return <div className="layout">
    layout
    <Outlet />
  </div>
}

export default Layout;

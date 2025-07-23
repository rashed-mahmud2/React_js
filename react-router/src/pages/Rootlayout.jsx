import Nav from "../components/Nav";
import {Outlet} from 'react-router'

export default function RootLayout() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <Nav />
      </div>
      <div id="detail">
        <Outlet />
        <footer>
          <p>All rights reserved by &copy;Rashed Mahmud</p>
        </footer>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to='/about' >About</Link>
        </li>
        <li>
          <Link to='/team' >Team</Link>
        </li>
        <li>
          <Link to='/posts'>All Post</Link>
        </li>
      </ul>
    </nav>
  );
}

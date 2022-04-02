import React from "react";

export default function Navbar() {
  return (
    <>
      <header class="header">
        <div class="search center">
          <form action="">
            <input type="text" placeholder="Search" />
            <button>
              <i class="material-icons">search</i>
            </button>
          </form>
          <i class="material-icons mic">mic</i>
        </div>

        <div className="btn">
          <button type="button" class="btn btn-primary">
            Login
          </button>
          <button class="btn btn-primary">SignUp</button>
        </div>
      </header>
      <hr />
    </>
  );
}

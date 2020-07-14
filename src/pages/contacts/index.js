import React from "react";

function Contacts() {
  return (
    <div>
      <div className="container content mt-4">
        <div className="row mt-2">
          <div className="col-md-12">
            <div id="contentHeader">
              <h2>Contact</h2>
            </div>
          </div>
        </div>
        <form id="frmContact" action="/my-handling-form-page" method="post">
          <div>
            <label for="name">Name:</label>
            <br />
            <p> Jomain Daniel Rouser II</p>
          </div>
          <div>
            <label for="mail">Email:</label>
            <br />
            <p> jomainrouser12@gmail.com</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacts;

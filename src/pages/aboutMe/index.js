import React from "react";

function Portfolio() {
  return (
    <div>
      <div className="container content mt-4">
        <div className="row mt-2">
          <div className="col-md-12">
            <div id="contentHeader">
              <h2>About Me</h2>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 col-md-4">
            <img
              className="myPicture img-fluid"
              src="./images/MeBenji.jpg"
              alt=""
            />
          </div>
          <div className="col-12 col-md-8 pt-2 pt-md-0">
            <p>I currently live and work in Lawrence Kansas.</p>
            <p>
              Some (not all) of the technologies and languages I have experience
              with are listed below.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ul id="skills">
              <li>HTML/CSS</li>
              <li>Javascript/jQuery</li>
              <li>Microsoft Access/MySQL/SQL Server/Oracle/Postgres</li>
              <li>Visual Basic</li>
              <li>Visual Studio</li>
            </ul>
          </div>
          <div className="col-md-6">
            <p>Links:</p>
            <ul id="Links">
              <li>
                <a
                  href="https://docs.google.com/document/d/1OY3z_M6lOyJ_OXBNfGGpXldhowNiqnVOm4MK7xUK2Fc/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jomain12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jomain-rouser-619166146/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

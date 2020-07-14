import React from "react";

function AboutMe() {
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
              height="200px"
              width="200px"
              className="myPicture img-fluid"
              src="./images/jomain!.jpg"
              alt=""
            />
          </div>
          <div className="col-12 col-md-8 pt-2 pt-md-0">
            <p>
              I currently live and work in Lawrence Kansas. I went to Johnson
              County Community college for a 2 years trying to earn a degree in
              computer science.
            </p>
            <p>
              {" "}
              Graduate of Kansas University with a Certificate in Full Stack Web
              Development and a strong dedication to learning everything there
              is to know about computers. Great at combining problem solving
              with an unstoppable work ethic to build user-friendly
              applications.
            </p>
            <p>Please contact me at jomainrouser12@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ul id="skills">
              <p>Skills:</p>
              <li>HTML/CSS</li>
              <li>Javascript/jQuery</li>
              <li>Microsoft Access/MySQL/SQL Server/Postgres</li>
              <li>MongoDb atlas/cloud/server</li>
              <li>Visual Studio</li>
              <li>React</li>
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

export default AboutMe;

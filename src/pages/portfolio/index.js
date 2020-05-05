import React from "react";
import Project from "../../components/Project";

function Portfolio() {
  return (
    <div>
      <div className="container content mt-4">
        <div className="row">
          <div className="col-md-12">
            <div id="contentHeader">
              <h2>Portfolio</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Project
            imgSrc="./images/offender.jpg"
            imgTitle="O-ffender?"
            description="Time to find out if your favorite NFL player is as much of a star off of the field as they are on the field. With this application you are able to look through all nfl teams and then pick a player and then after following
            the prompts you will find out if that player has committed any crimes and be given specific details on what happened. This is a great drinking game! only works with offensive players currently"
            authors="Jomain Rouser, Joe Huelsman, Nick Algarra, Mark spells"
            repoLink="https://github.com/KCGooner/Project_1"
            appLink="https://kcgooner.github.io/Project_1"
          />
          <Project
            imgSrc="./images/blogger.jpg"
            imgTitle="Animal Blogging App"
            description="This application validates users through a log in and then allows them to post blogs about animals."
            authors="Jomain Rouser, Avery Rouser, Kevin Ngo"
            repoLink="https://github.com/Jomain12/blogger_proj2"
            appLink="https://blogger1221.herokuapp.com/"
          />
          <Project
            imgSrc="./images/burger-icon.jpg"
            imgTitle="Eat the Burger"
            description="Node Express Handlebars application with MySQL to Log Burgers to eat."
            authors="Jomain Rouser"
            repoLink="https://github.com/Jomain12/burger"
            appLink="https://calm-ocean-92878.herokuapp.com/"
          />
        </div>
        <div className="row">
          <Project
            imgSrc="./images/weather.jpg"
            imgTitle="Weather Dashboard"
            description="This applicaiton will use an API to OpenWeatherMap.org to get and display Weather information for the City entered or chosen by the user."
            authors="Jomain Rouser"
            repoLink="https://github.com/Jomain12/weather_api"
            appLink="https://jomain12.github.io/weather_api/"
          />
          <Project
            imgSrc="./images/notetaker.jpg"
            imgTitle="Note Taker"
            description="This application allows the user to Create, Save, Display, and Delete Notes."
            authors="Jomain Rouser"
            repoLink="https://github.com/Jomain12/note_taker"
            appLink="https://quiet-garden-96214.herokuapp.com/"
          />
          <Project
            imgSrc="./images/codequiz.jpg"
            imgTitle="JavaScript Code Quiz"
            description="Timed Code Quiz that stores the users scores in the Local Storage as well as on the display page."
            authors="Jomain Rouser"
            repoLink="https://github.com/Jomain12/codeQuiz"
            appLink="https://jomain12.github.io/codeQuiz/"
          />
        </div>
        <div className="row">
          <Project
            imgSrc="./images/passwordgenerator.jpg"
            imgTitle="Password Generator"
            description="An application that generates a random password based on user-selected criteria."
            authors="Jomain Rouser"
            repoLink="https://github.com/Jomain12/passwordGenerator"
            appLink="https://jomain12.github.io/passwordGenerator/"
          />
          <Project
            imgSrc="./images/directory.jpg"
            imgTitle="React Employee Directory"
            description="Allows you to look through a list of employees and filter then by first name."
            authors="Jomain Rouser"
            repoLink="https://github.com/Jomain12/reactEmployeeDirectory"
            appLink="https://radiant-caverns-51458.herokuapp.com/"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

import React from "react";
import Project from "../../components/Project";

function Portfolio() {
  return (
    <div className="background">
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
            imgSrc="./images/covid19.jpg"
            imgTitle="Covid19 Tracker"
            description="This is a covid-19 tracking application that shows how the coronavirus has affected specific Countries. This is valuable because it allows people to keep track 
            of the most dangerous places that have high levels of coronavirus and learn about how to stay safe from it."
            authors="Jomain Rouser, Avery Rouser, Kevin Ngo, Jeffrey Bell"
            repoLink="https://github.com/Jomain12/SoloCovid19Tracker"
            appLink="https://jomain-covid19.herokuapp.com/#/"
          />
          <Project
            imgSrc="./images/books.jpg"
            imgTitle="React Books Search"
            description="Allows you to search for books based off of several different criteria then provides you a link to look at that book or allows you to save the book for later so you can come back if you're not sure if you want it."
            authors="Jomain Rouser"
            repoLink="https://github.com/Jomain12/GoogleBooksReact"
            appLink="https://react-books-search1221.herokuapp.com/"
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
            imgSrc="./images/codequiz.jpg"
            imgTitle="JavaScript Code Quiz"
            description="Timed Code Quiz that stores the users scores in the Local Storage as well as on the display page."
            authors="Jomain Rouser"
            repoLink="https://github.com/Jomain12/codeQuiz"
            appLink="https://jomain12.github.io/codeQuiz/"
          />
          <Project
            imgSrc="./images/directory.jpg"
            imgTitle="React Employee Directory"
            description="Allows you to look through a list of employees and filter then by first name."
            authors="Jomain Rouser"
            repoLink="https://github.com/Jomain12/reactEmployeeDirectory"
            appLink="https://git.heroku.com/jomain-employeedirectory.git"
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
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

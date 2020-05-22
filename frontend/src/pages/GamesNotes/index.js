import React from 'react';
import './styles.css';
import DataTeams from '../../data/data-teams.json';

export default function GameNotes () {
  let teamsJSON;
  
  try {
    teamsJSON = JSON.stringify (DataTeams);
    teamsJSON = JSON.parse (teamsJSON);
  } catch (error) {
    console.log (error);
  }

  return (
    <div className="container">
      <p className="title-choose-PDF">Select a Game Notes</p>
      <div className="card-grouping">
        {teamsJSON.map ((team,index) => (
          <div
            className="card-PDF"
            key={index}
            onClick={() => window.open (team.PDFURL, '_blank')}
          >
            <img className="logo-team" src={team.imageURL} alt={"Logo " + team.name} />
            <p className="title-team">{team.name}</p>
          </div>
        ))};
      </div>
    </div>
  );
}

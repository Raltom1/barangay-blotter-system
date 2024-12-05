import React from 'react';

const BlotterList = ({ blotters }) => {
  return (
    <div>
      <h2>Blotter Records</h2>
      <ul>
        {blotters.map((blotter, index) => (
          <li key={index}>
            <strong>Complainant:</strong> {blotter.complainant} <br />
            <strong>Respondent:</strong> {blotter.respondent} <br />
            <strong>Details:</strong> {blotter.details} <br />
            <strong>Date:</strong> {blotter.date} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlotterList;

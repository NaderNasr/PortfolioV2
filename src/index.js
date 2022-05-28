import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const me = {
  Name: "Nader Nasr",
  Location: "Toronto, Ontario",
  github: "https://github.com/NaderNasr",
  LinkedIn: "https://www.linkedin.com/in/nnasr/",
  YearsOfExperience: 4,
  Resume: "https://resume.creddle.io/resume/3yknjwdt649"
};

const skills =
{
  Languages: ["JavaScript (ES6+)", "Ruby", "Ruby on Rails"],
  FrontEnd: ["ReactJS", "React Native", "Axios", "Webpack", "CSS", "HTML", "Svelte"],
  BackEnd: ["Express", "Node.js", "PostgreSQL", "AWS"],
  UnitTesting: ["Jest", "Cypress", "Mocha/Chai", "StoryBook"],
  UI: ["Adobe Suit", "Figma", "Adobe XD"]
};





console.log('TL:DR');
console.table(me);
console.table(skills);




console.log = console.warn = console.error = () => {  };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

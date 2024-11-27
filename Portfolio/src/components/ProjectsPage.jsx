import React from 'react';

const projects = [
  // Add your project data here
  { title: 'Project 1', description: 'Description for project 1' },
  { title: 'Project 2', description: 'Description for project 2' },
];

const ProjectsPage = () => (
  <main>
    <h1>My Projects</h1>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  </main>
);

export default ProjectsPage;

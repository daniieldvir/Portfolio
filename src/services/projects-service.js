const fs = require('fs');

export const projectsService = {
  query,
};

var projects = _createProj();

function query() {
  return Promise.resolve(projects);
}

function _createProj() {
  projects = require('../assets/data/projects.json');
  return projects;
}

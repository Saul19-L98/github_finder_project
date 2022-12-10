import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project was created by
        <strong>
          <a href="https://www.linkedin.com/in/sa%C3%BAl-la%C3%ADnez-764a131a8/">
            {" "}
            Saúl Laínez
          </a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Github repo: 👉
        <a
          className="text-white"
          href="https://github.com/Saul19-L98/github_finder_project"
        >
          information
        </a>
      </p>
    </div>
  );
}

export default About;

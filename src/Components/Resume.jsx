// Components/Resume.js
import React from 'react';

function Resume() {
  return (
    
    <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
    
    <div class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Career Objective</h2>
        <p class="text-gray-700 leading-relaxed">
            As a highly motivated and detail-oriented computer science student, I am seeking a challenging position in the field of software development where I can apply my strong analytical and problem-solving skills. Eager to contribute my programming expertise in languages such as Java and Python, along with my solid understanding of data structures and algorithms, to create innovative and efficient software solutions. Committed to continuous learning and staying abreast of emerging technologies, I aim to contribute effectively to a dynamic team and grow as a professional in a collaborative and stimulating work environment.
        </p>
    </div>

    
    <div class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Programming/Tools: Python, C/C++, HTML, CSS, JavaScript & MySQL</li>
            <li>Courses: Database Management System, Object Oriented Programming, Data Structures & Algorithms, Operating System, Artificial Intelligence</li>
            <li>Soft Skills: Problem Solving, Interpersonal skills, Research, Teamwork, Analytical thinking, Avid learner, Adaptability & Continuous learning</li>
        </ul>
    </div>

    
    <div class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
        <ul class="text-gray-700 leading-relaxed">
            <li>Bachelor’s Degree in Computer Science Engineering, Allenhouse Institute of Technology (2021-Present)</li>
            <li>Senior Secondary (UP Board, 2021)</li>
            <li>Secondary (UP Board, 2019)</li>
        </ul>
    </div>

    
    <div class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
                <strong>Weather Forecasting Application:</strong> Developed using the OpenWeather API, offering real-time weather data and user-friendly alert for accurate city inputs.
            </li>
            <li>
                <strong>Alien Invasion Game:</strong> Technologies Used: Python & PyGame Library. Implemented player controls for spaceship movement and shooting, created dynamic alien movement patterns, and designed progressively challenging levels to engage players.
            </li>
            <li>
                <strong>To-Do Web Application:</strong> Technologies Used: HTML & CSS. A note-taking app that allows users to create, edit, save, and delete notes.
            </li>
            <li>
                <strong>Hotel Management System:</strong> Developed a system using Python, SQL, HTML & CSS for managing hotel operations, including room booking, check-in/check-out, and automated billing.
            </li>
        </ul>
    </div>

    
    <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Professional Experience</h2>
        <ul class="text-gray-700 leading-relaxed">
            <li>Bharat Intern | Nov 2023-Present</li>
            <li>Oasis Infobyte | Oct 2023-Nov 2023 (Data Science Intern)</li>
            <li>Celebal Technology | May 2024-July 2024 (MySQL Intern)</li>
        </ul>
    </div>
</div>

  );
}

export default Resume;

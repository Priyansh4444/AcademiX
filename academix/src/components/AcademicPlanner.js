import React from 'react';
import '../App.css';

function AcademicPlanner() {
  return (
    <div className="app">
      <header className="header">
        <h1>AcademiX</h1>
        <p>For UCI Computer Science Students</p>
      </header>
      <main className="main-content">
        <section className="task-section">
          <h2>Tasks for Today</h2>
          <ul>
            <li>Complete CS Assignment</li>
            <li>Study for Math Exam</li>
            <li>Attend Networking Event</li>
          </ul>
        </section>
        <section className="schedule-section">
          <h2>Today's Schedule</h2>
          <ul>
            <li>9:00 AM - CS Lecture</li>
            <li>1:00 PM - Lunch</li>
            <li>3:00 PM - Study Group</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>© 2023 AcademiX. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AcademicPlanner;

import React from "react";

const Exams = () => (
  <div className="pt-4">
    <h2 className="mb-4">Exam Preparation</h2>

    {/* Existing offerings */}
    <ul className="list-group mb-5">
      <li className="list-group-item">Mock tests for JEE Main & Advanced</li>
      <li className="list-group-item">Mock tests for NEET UG</li>
      <li className="list-group-item">Mock tests for UPSC Civil Services</li>
      <li className="list-group-item">Live quizzes and interactive doubt sessions</li>
      <li className="list-group-item">Past year paper analysis and performance tracking</li>
    </ul>

    {/* New list of other exams with official links */}
    <h3 className="mb-3">Other Important Exams</h3>
    <div className="list-group">
      <a href="https://www.ets.org/toefl" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
        TOEFL - Test of English as a Foreign Language
      </a>
      <a href="https://www.ets.org/gre" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
        GRE - Graduate Record Examination
      </a>
      <a href="https://www.cmgecat.com/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
        GATE - Graduate Aptitude Test in Engineering
      </a>
      <a href="https://www.icai.org/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
        CA Foundation & Intermediate Exams
      </a>
      <a href="https://www.upsc.gov.in/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
        CDS - Combined Defence Services Examination
      </a>
    </div>
  </div>
);

export default Exams;
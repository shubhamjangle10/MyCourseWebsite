import React from "react";

const institutions = [
  { name: "FutureThought Academy", desc: "Premier online education platform since 2020", img: "/images/course3.jpg" },
  { name: "SkillForge Labs", desc: "Hands-on labs for real-world practice", img: "/images/course1.jpg" }
];

const successStories = [
  { student: "Anita Sharma", result: "Cleared JEE Advanced with AIR 120", quote: "FutureThought's mock tests were a game-changer!" },
  { student: "Rohit Verma", result: "Placed at Google as SDE", quote: "The projects and mentorship propelled my skills." }
];

const About = () => (
  <div className="pt-4">
    <h2 className="mb-4 text-center">About Us</h2>

    {/* Institutions */}
    <h3 className="mt-5 mb-3">Our Institutions</h3>
    <div className="row g-4 mb-5">
      {institutions.map((inst, idx) => (
        <div className="col-md-6" key={idx}>
          <div className="card h-100 shadow-sm">
            <div className="row g-0">
              <div className="col-4 d-flex align-items-center">
                <img src={inst.img} className="img-fluid rounded-start p-2" alt={inst.name} />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h5 className="card-title">{inst.name}</h5>
                  <p className="card-text">{inst.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Success Stories */}
    <h3 className="mt-5 mb-3">Success Stories</h3>
    <div className="row g-4 mb-5">
      {successStories.map((s, i) => (
        <div className="col-md-6" key={i}>
          <div className="card h-100 border-success shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-success">{s.student}</h5>
              <h6 className="card-subtitle mb-2">{s.result}</h6>
              <p className="card-text fst-italic">“{s.quote}”</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Overview */}
    <h3 className="mt-5 mb-3">What We Offer</h3>
    <p>At FutureThought, we provide comprehensive courses and exam preparation for:</p>
    <ul>
      <li><strong>Web Development:</strong> From HTML basics to advanced React applications.</li>
      <li><strong>Data Structures & Algorithms:</strong> In-depth theory and coding practice.</li>
      <li><strong>Network Security:</strong> Ethical hacking, firewalls, and secure design.</li>
      <li><strong>DevOps:</strong> CI/CD pipelines, Docker, Kubernetes, and monitoring.</li>
      <li><strong>Exam Prep:</strong> JEE, NEET, UPSC, GRE, TOEFL mock tests and strategy sessions.</li>
    </ul>

    <p className="mt-4">
      Our mission is to empower learners with the skills and confidence needed to excel in their careers and competitive exams.
    </p>
  </div>
);

export default About;

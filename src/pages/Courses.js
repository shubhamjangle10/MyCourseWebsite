import React from "react";

const courseList = [
  { id: "webdev", title: "Web Development", text: "HTML, CSS, JavaScript & React", img: "/images/course2.jpeg", btnClass: "btn-primary" },
  { id: "ds", title: "Data Structures", text: "Algorithms & Problem Solving", img: "/images/course3.jpg", btnClass: "btn-primary" },
  { id: "netsec", title: "Network Security", text: "Ethical Hacking & Secure Protocols", img: "/images/course1.jpg", btnClass: "btn-primary" },
  { id: "devops", title: "DevOps Fundamentals", text: "CI/CD, Docker, Kubernetes & Monitoring", img: "/images/course4.webp", btnClass: "btn-primary" },
];

const additionalTracks = [
  { id: "ml", name: "Machine Learning Basics", img: "/images/course1.jpg", btnClass: "btn-success" },
  { id: "cloud", name: "Cloud Computing", img: "/images/course2.jpeg", btnClass: "btn-info" },
  { id: "uiux", name: "UI/UX Design", img: "/images/course3.jpg", btnClass: "btn-warning" }
];

const Courses = () => (
  <div className="pt-4">
    <h2 className="mb-4 text-center">Our Courses</h2>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
      {courseList.map(course => (
        <div className="col" key={course.id}>
          <div className="card h-100 shadow-sm border-0">
            <img src={course.img} className="card-img-top rounded-top" alt={course.title} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text flex-grow-1">{course.text}</p>
              <a href={`/courses#${course.id}`} className={`btn ${course.btnClass} mt-3`}>Start Learning</a>
            </div>
          </div>
        </div>
      ))}
    </div>

    <h3 className="mb-4 text-center">Additional Tracks</h3>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {additionalTracks.map(track => (
        <div className="col" key={track.id}>
          <div className="card h-100 shadow-sm border-0">
            <img src={track.img} className="card-img-top rounded-top" alt={track.name} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{track.name}</h5>
              <a href={`/courses#${track.id}`} className={`btn ${track.btnClass} mt-3`}>Start Learning</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Courses;

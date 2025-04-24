import React from "react";

const Home = () => (
  <div>
    {/* Carousel */}
    <div id="homeCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
      </div>
      <div className="carousel-inner rounded">
        <div className="carousel-item active">
          <img src="images/slider4.png" className="d-block w-100" alt="Web Dev" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Web Development</h5>
            <p>Build modern, responsive websites with React & Bootstrap.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/slider2.webp" className="d-block w-100" alt="Data Structures" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Data Structures</h5>
            <p>Sharpen your algorithms skills for top tech interviews.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/slider3.jpg" className="d-block w-100" alt="Network Security" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Network Security</h5>
            <p>Learn to protect systems and data from cyber threats.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    {/* Courses Cards */}
    <h2 className="mb-4">Featured Courses</h2>
    <div className="row g-4 mb-5">
      {[
        { title: "Web Development", text: "HTML, CSS, JavaScript & React", img: "/images/home1.jpg" },
        { title: "Data Structures", text: "Algorithms & Problem Solving", img: "/images/home2.jpg" },
        { title: "Network Security", text: "Ethical Hacking & Defense", img: "/images/home4.jpg" },
      ].map((c, i) => (
        <div className="col-md-4" key={i}>
          <div className="card h-100 shadow-sm">
            <img src={c.img} className="card-img-top" alt={c.title} />
            <div className="card-body">
              <h5 className="card-title">{c.title}</h5>
              <p className="card-text">{c.text}</p>
              <a href="/courses" className="btn btn-primary">View Courses</a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Exams Section */}
    <h2 className="mb-4">Prepare for These Exams</h2>
    <div className="list-group mb-5">
      <a href="/exams#jee" className="list-group-item list-group-item-action">JEE Main & Advanced</a>
      <a href="/exams#neet" className="list-group-item list-group-item-action">NEET UG</a>
      <a href="/exams#upsc" className="list-group-item list-group-item-action">UPSC Civil Services</a>
      <a href="/exams#gmat" className="list-group-item list-group-item-action">GMAT & GRE</a>
    </div>
  </div>
);

export default Home;

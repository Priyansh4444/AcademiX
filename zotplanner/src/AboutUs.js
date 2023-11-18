import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamMember = ({ name, role, bio }) => (
  <div className="team-member">
    <h3>{name}</h3>
    <p>{role}</p>
    <p>{bio}</p>
  </div>
);

const AboutUs = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Founder', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    // Add more team members as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
  };

  return (
    <div className="about-us">
      <header>
        <h1>About Us</h1>
      </header>
      <section className="carousel">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </Slider>
      </section>
      <section className="mission-values">
        {/* Add mission and values content */}
      </section>
      <section className="achievements">
        {/* Add achievements or milestones content */}
      </section>
      <section className="testimonials">
        {/* Add testimonials content (optional) */}
      </section>
      <section className="contact">
        {/* Add contact information content */}
      </section>
      <footer>
        {/* Add standard footer elements */}
      </footer>
    </div>
  );
};

export default AboutUs;

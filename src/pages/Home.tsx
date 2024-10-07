import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to AITK Hospital</h1>
        <p className="text-xl">Providing compassionate care for a healthier tomorrow</p>
      </section>
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          At AITK Hospital, we are committed to delivering exceptional healthcare services
          with compassion, integrity, and innovation. Our team of dedicated professionals strives
          to improve the health and well-being of our community through personalized care and
          cutting-edge medical treatments.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
          <p>24/7 emergency services for immediate medical attention</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Specialized Treatments</h3>
          <p>Advanced medical care across various specialties</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Patient-Centered Approach</h3>
          <p>Tailored care plans to meet individual needs</p>
        </div>
      </section>
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
          Schedule an Appointment
        </button>
      </section>
    </div>
  );
};

export default Home;
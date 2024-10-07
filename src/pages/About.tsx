import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About AITK Hospital</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-4">Our History</h3>
        <p className="mb-4">
          Founded in 1997, AITK Hospital has been serving our community for over 25 years. 
          What started as a small clinic has grown into a state-of-the-art medical facility, 
          consistently at the forefront of medical innovation and patient care.
        </p>
        <p>
          Throughout our history, we have remained committed to our founding principles of 
          providing compassionate, high-quality healthcare to all members of our community.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p>
          At AITK Hospital, our mission is to enhance the health and well-being of our 
          community through compassionate care, innovative treatments, and continuous improvement. 
          We strive to:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Provide patient-centered care that respects individual needs and preferences</li>
          <li>Advance medical knowledge through research and education</li>
          <li>Promote health and wellness through community outreach programs</li>
          <li>Maintain the highest standards of quality and safety in healthcare delivery</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
        <p>
          Our dedicated team of healthcare professionals includes board-certified physicians, 
          skilled nurses, and support staff who are committed to providing exceptional care. 
          We work collaboratively to ensure that each patient receives personalized attention 
          and the best possible outcomes.
        </p>
      </div>
    </div>
  );
};

export default About;
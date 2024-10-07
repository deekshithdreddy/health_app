import React, { useState } from 'react';
import Modal from '../components/Modal';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Ganesh Kumar',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    bio: 'Dr. Ganesh Kumar is a board-certified cardiologist with over 15 years of experience in treating heart diseases.',
  },
  {
    id: 2,
    name: 'Dr. Gitendra Singh',
    specialty: 'Neurology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    bio: 'Dr. Gitendra Singh is a renowned neurologist specializing in the treatment of complex neurological disorders.',
  },
  {
    id: 3,
    name: 'Dr. Gani Patel',
    specialty: 'Oncology',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    bio: 'Dr. Gani Patel is a compassionate oncologist dedicated to providing personalized cancer care and treatment.',
  },
];

const Doctors: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedDoctor(doctor)}
          >
            <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedDoctor && (
        <Modal
          title={selectedDoctor.name}
          onClose={() => setSelectedDoctor(null)}
        >
          <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <p className="text-lg font-semibold mb-2">{selectedDoctor.specialty}</p>
          <p>{selectedDoctor.bio}</p>
        </Modal>
      )}
    </div>
  );
};

export default Doctors;
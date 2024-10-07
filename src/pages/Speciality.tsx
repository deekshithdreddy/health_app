import React, { useState } from 'react';
import Modal from '../components/Modal';

interface Speciality {
  id: number;
  name: string;
  description: string;
  image: string;
}

const specialities: Speciality[] = [
  {
    id: 1,
    name: 'Cardiology',
    description: 'Specialized care for heart and cardiovascular system',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    name: 'Neurology',
    description: 'Expert care for brain, spine, and nervous system disorders',
    image: 'https://images.unsplash.com/photo-1559757175-7b46e779e5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
  {
    id: 3,
    name: 'Oncology',
    description: 'Comprehensive cancer care and treatment',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];

const Speciality: React.FC = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState<Speciality | null>(null);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Specialities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specialities.map((speciality) => (
          <div
            key={speciality.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedSpeciality(speciality)}
          >
            <img src={speciality.image} alt={speciality.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{speciality.name}</h3>
              <p className="text-gray-600">{speciality.description}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedSpeciality && (
        <Modal
          title={selectedSpeciality.name}
          onClose={() => setSelectedSpeciality(null)}
        >
          <img src={selectedSpeciality.image} alt={selectedSpeciality.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <p>{selectedSpeciality.description}</p>
          <p className="mt-4">
            Our {selectedSpeciality.name} department is equipped with state-of-the-art technology and staffed by highly skilled specialists. We offer comprehensive diagnostic and treatment services to ensure the best possible outcomes for our patients.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Speciality;
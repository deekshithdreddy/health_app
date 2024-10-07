import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  image: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    text: 'The care I received at HealthCare Hospital was exceptional. The staff was attentive and professional throughout my stay.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    text: "I'm grateful for the compassionate care provided by the doctors and nurses. They made a difficult time much easier to bear.",
  },
  {
    id: 3,
    name: 'Mike Johnson',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    text: "The facilities at HealthCare Hospital are top-notch, and the staff's expertise is truly impressive. I highly recommend their services.",
  },
];

const Reviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Patient Reviews</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <img
            src={reviews[currentReview].image}
            alt={reviews[currentReview].name}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <h3 className="text-xl font-semibold">{reviews[currentReview].name}</h3>
        </div>
        <p className="text-gray-600 mb-6">{reviews[currentReview].text}</p>
        <div className="flex justify-between">
          <button
            onClick={prevReview}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextReview}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
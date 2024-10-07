import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Home from './pages/Home';
import Speciality from './pages/Speciality';
import Doctors from './pages/Doctors';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'speciality':
        return <Speciality />;
      case 'doctors':
        return <Doctors />;
      case 'reviews':
        return <Reviews />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-blue-500 text-white"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
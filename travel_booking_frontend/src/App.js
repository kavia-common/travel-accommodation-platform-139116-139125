import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './styles/common.css';
import Homepage from './pages/Homepage';
import CreatePackage from './pages/CreatePackage';
import PackagesArchive from './pages/PackagesArchive';
import PackageDetail from './pages/PackageDetail';

/**
 * PUBLIC_INTERFACE
 * App entry: sets up client-side routing for the screens.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePackage />} />
        <Route path="/packages" element={<PackagesArchive />} />
        <Route path="/packages/:slug" element={<PackageDetail />} />
        {/* basic placeholders for nav items not in scope */}
        <Route path="/about" element={<Homepage />} />
        <Route path="/services" element={<Homepage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

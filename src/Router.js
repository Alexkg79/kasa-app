import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ProjectsHome from './components/ProjectsHome.jsx';
import ProjectsLayout from './layouts/ProjectsLayout.jsx';
import Project from './components/Project.jsx';
import EditProject from './components/EditProject.jsx';
import MarketingLayout from './layouts/MarketingLayout.jsx';
import MarketingHome from './components/MarketingHome.jsx';
import Dashboard from './layouts/Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      {/* Marketing Routes */}
      <Route element={<MarketingLayout />}>
        <Route index element={<MarketingHome />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Projects Routes */}
      <Route path="projects">
        <Route index element={<ProjectsHome />} />
        <Route element={<ProjectsLayout />}>
          <Route path=":pid" element={<Project />} />
          <Route path=":pid/edit" element={<EditProject />} />
        </Route>
      </Route>

      {/* Dashboard Layout */}
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<div>Dashboard Home</div>} />
        <Route path="admin" element={<div>Admin Panel</div>} />
        <Route path="user" element={<div>User Profile</div>} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>

  </BrowserRouter>,
)

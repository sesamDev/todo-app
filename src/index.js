import { initSidePanel, PROJECTS, active_project } from './components/side-panel';
import { initMainContent } from './components/main-content';
import { initHeader } from './components/header';
import './style.css';

// Create and add main elements to webpage
initHeader();
initMainContent();
initSidePanel();

// ### SET CONTENT TITLE AFTER ACTIVE PROJECT ###

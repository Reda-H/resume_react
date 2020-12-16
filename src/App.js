import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutMePage from './pages/AboutMePage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Herradi Reda',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Herradi Reda',
        subTitle: 'Lorem Ipsum Dolor Sit Amet',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      about: {
        title: 'About Me',
        subTitle: 'About me Subtitle',
        subText: 'About me text'
      },
      projects: {
        title: 'My Experience',
        subTitle: 'My Projects subtitle !',
        subText: 'My Projects text',
      },
      contact: {
        title: 'Contact',
        subTitle: 'Contacts subtitle !',
        subText: 'Contacts text'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="app-container p-0" fluid>
          <Navbar sticky="top" className="justify-content-center" bg="transparent" expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-center">
              <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                  <Link activeClass="active" className="nav-link" to="home-page" spy smooth offset={-70}><span className="second-color">HOME</span></Link>
                </Nav.Item>
                <Nav.Item>
                  <Link activeClass="active" className="nav-link" to="about-me-page" spy smooth offset={-50}><span className="second-color">ABOUT</span></Link>
                </Nav.Item>
                <Nav.Item>
                  <Link activeClass="active" className="nav-link" to="projects-page" spy smooth offset={-45}><span className="second-color">EXPERIENCE</span></Link>
                </Nav.Item>
                <Nav.Item>
                  <Link activeClass="active" className="nav-link" to="contact-page" spy smooth offset={-30}><span className="second-color">CONTACT</span></Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <HomePage id="home-page" data={this.state.home} />
          <AboutMePage id="about-me-page" data={this.state.about} />
          <ProjectsPage id="projects-page" data={this.state.projects} />
          <ContactPage id="contact-page" data={this.state.contact} />

          <Footer username={this.state.title} />

        </Container>
      </Router>
    );
  }
}

export default App;

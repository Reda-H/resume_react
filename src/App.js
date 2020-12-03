import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
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
        title: 'My Projects',
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
        <Container className="p-0" fluid>
          <Navbar sticky="top" className="justify-content-center" bg="light" expand="lg">
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Link activeClass="active" className="nav-link" to="home-page" spy smooth offset={-70}>Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link activeClass="active" className="nav-link" to="about-me-page" spy smooth offset={-70}>About Me</Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Link activeClass="active" className="nav-link" to="about-page" spy smooth offset={-70}>About</Link>
              </Nav.Item> */}
              <Nav.Item>
                <Link activeClass="active" className="nav-link" to="projects-page" spy smooth offset={-70}>Projects</Link>
              </Nav.Item>
              <Nav.Item>
                <Link activeClass="active" className="nav-link" to="contact-page" spy smooth offset={-70}>Contact</Link>
              </Nav.Item>
            </Nav>
          </Navbar>

          <HomePage id="home-page" data={this.state.home} />
          <AboutMePage id="about-me-page" data={this.state.about}/>
          {/* <AboutPage id="about-page" data={this.state.about} /> */}
          <ProjectsPage id="projects-page" data={this.state.projects} />
          <ContactPage id="contact-page" data={this.state.contact} />
          {/* <Route path="/" exact render={() => <HomePage data={this.state.home} />} />
          <Route path="/about" exact render={() => <AboutPage data={this.state.about} />} />
          <Route path="/projects" exact render={() => <ProjectsPage data={this.state.projects} />} />
          <Route path="/contact" exact render={() => <ContactPage data={this.state.contact}/>} /> */}

          <Footer username={this.state.title} />

        </Container>
      </Router>
    );
  }
}

export default App;

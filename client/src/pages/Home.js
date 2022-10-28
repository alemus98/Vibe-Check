import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_MOODS, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const Home = () => {
  const { loading, data } = useQuery(QUERY_MOODS);
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/me">Profile</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <h2 className="welcome">Hello! How are you feeling today?</h2>
      <div className="selectmood">
        <label className="iconImg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/187/187159.png"
            alt="happy"
            height="150"
            width="150"
            class="sc-AxgMl cVmQYF"
          ></img>
          <input
            name="pickedMood"
            type="radio"
            className="hidecheckbox"
            value="happy"
          ></input>
          <span>Happy</span>
        </label>
        <label class="iconImg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/260/260171.png"
            alt="angry"
            height="150"
            width="150"
            class="sc-AxgMl cVmQYF"
          ></img>
          <input
            name="pickedMood"
            type="radio"
            className="hidecheckbox"
            value="angry"
          ></input>
          <span>Angry</span>
        </label>

        <label class="iconImg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2164/2164329.png"
            alt="sad"
            height="150"
            width="150"
            class="sc-AxgMl cVmQYF"
          ></img>
          <input
            name="pickedMood"
            type="radio"
            className="hidecheckbox"
            value="sad"
          ></input>
          <span>Sad</span>
        </label>
        <label class="iconImg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2341/2341880.png"
            alt="anxious"
            height="150"
            width="150"
            class="sc-AxgMl cVmQYF"
          ></img>
          <input
            name="pickedMood"
            type="radio"
            className="hidecheckbox"
            value="anxious"
          ></input>
          <span>Anxious</span>
        </label>
      </div>
      <div class="thoughtsContainer">
        <h2 class="message"> Have some toughts? </h2>
        <textarea
          name="note"
          id="note"
          placeholder="It was an awesome day!"
          rows="3"
          class="feelingsInput"
        ></textarea>
        <div class="savefeeling">
          <button type="submit" class="submitInput">
            <span class="bttnTxt"> Save mood </span>
          </button>
          <button type="submit" class="submitInput">
            <span class="bttnTxt"> Visit Profile</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Home;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_MOODS, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { ADD_MOOD } from "../utils/mutations";

const Home = () => {
  const [formState, setFormState] = useState({
    moodType: "",
    moodText: ""
  });

  const [solution, setSolution] = useState(null);

  const { loading, data } = useQuery(QUERY_MOODS);

  const [createMood, { error }] = useMutation(ADD_MOOD);

  const handleMoodChange = (e) => {
    const { value } = e.target;

    setFormState({ ...formState, moodType: value })
  }

  const handleInputChange = (e) => {
    const { value } = e.target;
    // console.log(formState.moodText);
    setFormState({ ...formState, moodText: value })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!formState.moodText || !formState.moodType) {
      return alert("You need to select a mood and input a thought.")
    }
    const { data } = await createMood({
      variables: { ...formState }
    });
    console.log(data);
    setSolution(data.addMood.solutionBody)
    // console.log(value);
  }

  console.log(formState.moodType);


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">Vibe Check</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick="window.location.reload();" as={Link} to="/me">Profile</Nav.Link>
              <Nav.Link as={Link} to="/" >Logout</Nav.Link>
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

            ></img>
            <input
              name="pickedMood"
              type="radio"
              onChange={handleMoodChange}
              className="radiobttn"
              value="happy"

            ></input>
            <span>Happy</span>
          </label>
          <label className="iconImg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/260/260171.png"
              alt="angry"
              height="150"
              width="150"

            ></img>
            <input
              name="pickedMood"
              type="radio"
              onChange={handleMoodChange}
              className="radiobttn"
              value="angry"
            ></input>
            <span>Angry</span>
          </label>

          <label className="iconImg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2164/2164329.png"
              alt="sad"
              height="150"
              width="150"

            ></img>
            <input
              name="pickedMood"
              type="radio"
              onChange={handleMoodChange}
              className="radiobttn"
              value="sad"
            ></input>
            <span>Sad</span>
          </label>
          <label className="iconImg">
            <img
              src="https://cdn.icon-icons.com/icons2/1865/PNG/512/nervous_119559.png"
              alt="anxious"
              height="150"
              width="150"

            ></img>
            <input
              name="pickedMood"
              type="radio"
              onChange={handleMoodChange}
              className="radiobttn"
              value="anxious"
            ></input>
            <span>Anxious</span>
          </label>
        </div>
        {!solution ?
          <form onSubmit={handleFormSubmit} className="thoughtsContainer">
            <h2 className="message"> Have some thoughts? </h2>
            <textarea
              onChange={handleInputChange}
              value={formState.moodText}
              name="note"
              id="note"
              placeholder="It was an awesome day!"
              rows="3"
              className="feelingsInput"
            ></textarea>
            <div className="savefeeling">
              <button type="submit" className="submitInput">
                <span className="bttnTxt"> Save mood </span>
              </button>
              {/* <button type="submit" class="submitInput">
            <span class="bttnTxt"> Visit Profile</span>
          </button> */}
            </div>
          </form>
          : (
            <section className="thoughtsContainer">
            <p>{solution}</p>
            </section>
          )
        }
      </div>
    </div>
  );
};
export default Home;

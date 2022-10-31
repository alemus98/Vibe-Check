import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
  Navbar,
  Nav
} from 'react-bootstrap';
import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MOODS, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_MOODS : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">Vibe Check</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Moods Home</Nav.Link>
              <Nav.Link as={Link} to="/" >Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing {user.username}'s moods!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {user.moods?.length
            ? `Viewing ${user.moods.length} saved ${user.moods.length === 1 ? 'mood' : 'moods'
            }:`
            : 'You have no saved moods!'}
        </h2>
        <CardColumns>
          {user.moods?.map((mood) => {
            return (
              <Card key={mood.moodId} border="dark">
                {mood.moodType}
                <Card.Body>
                  <Card.Title>{mood.moodText}</Card.Title>
                  <Card.Text>{mood.createdAt}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  )
};
export default Profile;

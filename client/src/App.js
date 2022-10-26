import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

function App() {
    return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/me" 
                element={<Profile />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
    );
}

export default App;

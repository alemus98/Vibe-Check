import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./componets/Signup";
import Login from "./componets/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { setContext } from "@apollo/client/link/context";
import LoginSignup from "./pages/LoginSignup";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
        {/* <Header /> */}
        <div className="container min-100-vh">
          <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/me" element={<Profile />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;

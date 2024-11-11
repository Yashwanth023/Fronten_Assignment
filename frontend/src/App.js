import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const MainContent = styled.main`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>User Registration Application</Header>
        <MainContent>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/add" element={<UserForm />} />
            <Route path="/edit/:id" element={<UserForm />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #0074d9;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
`;

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${id}`);
      const user = response.data;
      setName(user.name);
      setEmail(user.email);
      setDateOfBirth(new Date(user.dateOfBirth).toISOString().split('T')[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id, fetchUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:5000/api/users/${id}`, { name, email, dateOfBirth });
      } else {
        await axios.post('http://localhost:5000/api/users', { name, email, dateOfBirth });
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <FormContainer>
      <h2>{id ? 'Edit User' : 'Add New User'}</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
        <Button type="submit">{id ? 'Update' : 'Add'} User</Button>
      </Form>
    </FormContainer>
  );
}

export default UserForm;
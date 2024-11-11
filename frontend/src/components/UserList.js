import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const UserListContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
`;

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const UserCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const UserInfo = styled.div`
  margin-bottom: 15px;
`;

const UserName = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
`;

const UserEmail = styled.p`
  margin: 0 0 5px 0;
  color: #666;
`;

const UserDOB = styled.p`
  margin: 0;
  color: #888;
  font-size: 0.9em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const Button = styled.button`
  background-color: ${props => props.danger ? '#ff4136' : '#0074d9'};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.danger ? '#d50000' : '#0056b3'};
  }
`;

const AddButton = styled(Link)`
  display: inline-block;
  background-color: #2ecc40;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27ae60;
  }
`;

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <UserListContainer>
      <AddButton to="/add">Add New User</AddButton>
      <UserGrid>
        {users.map(user => (
          <UserCard key={user._id}>
            <UserInfo>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
              <UserDOB>Date of Birth: {new Date(user.dateOfBirth).toLocaleDateString()}</UserDOB>
            </UserInfo>
            <ButtonContainer>
              <Button onClick={() => navigate(`/edit/${user._id}`)}>Edit</Button>
              <Button danger onClick={() => deleteUser(user._id)}>Delete</Button>
            </ButtonContainer>
          </UserCard>
        ))}
      </UserGrid>
    </UserListContainer>
  );
}

export default UserList;
import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { useUserAuth } from '../../context/userAuthContext';
import './Login.css';

export default function Login() {
  const { user, detectMob, googleSignIn, googleSignInWithPopup, githubSignIn, githubSignInWithPopup } = useUserAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleSignIn = async (e, provider) => {
    e.preventDefault();
    try {
      switch (provider) {
        case 'google':
          await (detectMob() ? googleSignIn() : googleSignInWithPopup());
          break;
        case 'github':
          await (detectMob() ? githubSignIn() : githubSignInWithPopup());
          break;
        default:
          break;
      }
      navigate('/chat');
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/chat');
    }
  }, [user, navigate]);

  return (
    <Layout sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Why Chat
          </Typography>
          <form onSubmit={(e) => handleSignIn(e, 'google')}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
             <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
             <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
          or
        </Typography>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login with Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
}

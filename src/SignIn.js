// SignIn.js
import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import googleIcon from './public/google.svg';
import githubIcon from './public/github.svg';
import './SignIn.css';
function SignIn() {
    const theme = createTheme();


    const handleLoginGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;
            const userId = user.uid;


            console.log("User signed in with Google:", user);
            console.log(userId)
            window.location.href = "https://beta.vectrflow.com/"
        } catch (error) {
            console.error("Error during Google sign in:", error);
        }
    };

    const handleLoginGithub = async () => {
        const provider = new firebase.auth.GithubAuthProvider();
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;
            const userId = user.uid;

            console.log("User signed in with GitHub:", user);
            console.log(userId)
            window.location.href = "https://beta.vectrflow.com/"
        } catch (error) {
            console.error("Error during GitHub sign in:", error);
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <Button
                                className="Button-google"  // Add the class name
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1, mb: 2 }}
                                onClick={handleLoginGoogle}
                                startIcon={<img src={googleIcon} alt="Google Icon" className="icon" />}
                            >
                                Sign In with Google
                            </Button>

                            <Button
                                className="Button-github"  // Add the class name
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1, mb: 2 }}
                                onClick={handleLoginGithub}
                                startIcon={<img src={githubIcon} alt="GitHub Icon" className="icon" />}
                            >
                                Sign In with GitHub
                            </Button>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default SignIn;
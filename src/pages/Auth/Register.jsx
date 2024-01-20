import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Container, Grid, Link, Box, CircularProgress } from '@mui/material';
import { strengthColor, strengthIndicator } from '../../Js/passwordStrength';

export default function Register() {
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState({});

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        // Calculate strength
        const strength = strengthIndicator(newPassword);
        const strengthLevel = strengthColor(strength);
        setPasswordStrength(strengthLevel);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        // Further processing like API call to register the user goes here
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ marginTop: 8, padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="full_name"
                                label="Full Name"
                                name="full_name"
                                autoComplete="name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="age"
                                label="Age"
                                name="age"
                                autoComplete="age"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                name="address"
                                autoComplete="address"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="contact"
                                label="Contact"
                                name="contact"
                                autoComplete="mobile"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </Grid>
                        {password && (
                            <Grid item xs={12}>
                                <Box display="flex" alignItems="center">
                                    <Box width="100%" mr={1}>
                                        <Box bgcolor={passwordStrength.color} height="10px" borderRadius="7px" />
                                    </Box>
                                    <Box minWidth={35}>
                                        <Typography variant="body2" color="textSecondary">{passwordStrength.label}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Register
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
}

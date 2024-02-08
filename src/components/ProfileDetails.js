import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

export default function ProfileDetails() {
    const navigate = useNavigate();
    
    const handleSubmit = (e)=> {
        navigate('/dashboard');
    }
    return (
        <Container sx={{

            height: '100vh',
            width: '100vh',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <React.Fragment>
                <Typography sx={{
                    mb : 1
                }} variant="h6" gutterBottom>
                    Profile Details
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 } }>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="state"
                                name="state"
                                label="State/Province/Region"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                    <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                </Box>
            </React.Fragment>

        </Container>

    );
}
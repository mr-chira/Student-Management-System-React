import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { Snackbar, Alert } from '@mui/material';
import CardHeader from '../../components/CardHeader/CardHeader';

export default function ProfileCard({ title, fields, onSubmit }) {
    const [formValues, setFormValues] = useState({});
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        setFormValues(
            fields.reduce((values, field) => ({
                ...values,
                [field.id]: field.value || ''
            }), {})
        );
    }, [fields]);

    const handleChange = (id, value) => {
        setFormValues(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        onSubmit(formValues);

        setOpenSnackbar(true);
    };

    const handleSnackbarClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setOpenSnackbar(false);
    };  

    return (
        <div>
            <Card type="section">
                <CardHeader sx={{ padding: 2 }} title={title} />
                <Stack spacing={6}>
                    <form onSubmit={handleSubmitForm}>
                        <Grid container spacing={3} sx={{ padding: 4 }}>
                            {Array.isArray(fields) && fields.map((field, index) => (
                                <Grid item xs={12} sm={field.sm || 6} md={field.md || 6} key={index}>
                                    {field.type === 'select' ? (
                                        <TextField
                                            select
                                            fullWidth
                                            label={field.label}
                                            variant="outlined"
                                            value={formValues[field.id] || ''}
                                            onChange={(e) => handleChange(field.id, e.target.value)}
                                        >
                                            {Array.isArray(field.options) && field.options.map((option, optionIndex) => (
                                                <MenuItem key={optionIndex} value={option.value}>{option.label}</MenuItem>
                                            ))}
                                        </TextField>
                                    ) : (
                                        <TextField
                                            type={field.type || 'text'}
                                            label={field.label}
                                            variant="outlined"
                                            placeholder={field.placeholder}
                                            fullWidth
                                            multiline={field.multiline || false}
                                            minRows={field.minRows || 1}
                                            value={formValues[field.id] || ''}
                                            onChange={(e) => handleChange(field.id, e.target.value)}
                                            InputProps={{
                                              disabled: field.id === 'id' || field.id === 'userId',
                                          }}
                                        />
                                    )}
                                </Grid>
                            ))}
                            <Grid item xs={12} sm={12} md={12}>
                                <Button disableElevation variant="contained" endIcon={<EditIcon />} sx={{ float: 'right' }} type="submit">
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Stack>
            </Card>
            <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
              <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                  Data Updated
              </Alert>
          </Snackbar>
        </div>
    );
}

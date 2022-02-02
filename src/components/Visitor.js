import React, { useState } from 'react';
import { Button, Card, CardContent, Grid, Icon, MenuItem, TextField, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

const currencies = [
  {
    value: "Ahmed Khan",
    label: "Ahmed Khan",
  },
  {
    value: "Anjum",
    label: "Anjum",
  },
  {
    value: "Shaik Rafiq",
    label: "Shaik Rafiq",
  },
  {
    value: "Sidra",
    label: "Sidra",
  },
  {
    value: "Sufiya",
    label: "Sufiya",
  },
  {
    value: "Tasmiya",
    label: "Tasmiya",
  },
  {
    value: "Uzma",
    label: "Uzma",
  },
];

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Visitor = () => {
    const classes = useStyles();
    const [currency, setCurrency] = useState("EUR");

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  return (
    <Grid style={{ padding: "80px 5px 0 5px" }}>
      <Card style={{ maxWidth: 500, margin: "0 auto" }}>
        <CardContent>
          <Typography variant="h6" color="primary">
            New Visitor Form
          </Typography>
          <form noValidate autoComplete="off">
            <div>
              <Typography variant="body1" align="left" gutterBottom>
                Full Name :
              </Typography>
              <Grid container spacing={1} style={{ marginBottom: "10px" }}>
                <Grid xs={12} sm={6} md={12} variant="outlined" item>
                  <TextField
                    fullWidth="true"
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Typography variant="body1" align="left" gutterBottom>
                Mobile No :
              </Typography>
              <Grid container spacing={1} style={{ marginBottom: "10px" }}>
                <Grid xs={12} sm={6} md={12} variant="outlined" item>
                  <TextField
                    fullWidth="true"
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Typography variant="body1" align="left" gutterBottom>
                Email :
              </Typography>
              <Grid container spacing={1} style={{ marginBottom: "10px" }}>
                <Grid xs={12} sm={6} md={12} variant="outlined" item>
                  <TextField
                    fullWidth="true"
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Typography variant="body1" align="left" gutterBottom>
                Purpose :
              </Typography>
              <Grid container spacing={1} style={{ marginBottom: "10px" }}>
                <Grid xs={12} sm={6} md={12} variant="outlined" item>
                  <TextField
                    fullWidth="true"
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Typography variant="body1" align="left" gutterBottom>
                Select Employee :
              </Typography>
              <Grid container spacing={1} style={{ marginBottom: "10px" }}>
                <Grid xs={12} sm={6} md={12} variant="outlined" item>
                  <TextField
                    id="outlined-select-currency"
                    select
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select employee"
                    variant="outlined"
                    size="small"
                    fullWidth="true"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <Grid container spacing={1} style={{ marginBottom: "10px" }}>
                <Grid xs={12} sm={6} md={12} variant="outlined" item>
                  <Button variant="contained" component="label">
                    Upload File
                    <input type="file" fullWidth="true" hidden />
                  </Button>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}>
                Send
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Visitor;

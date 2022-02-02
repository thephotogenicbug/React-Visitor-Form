import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Icon,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, createVisitorAction } from "../action/visitorActions";

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
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [employee, setEmployee] = useState("");
  const [pic, setPic] = useState(
    "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1631444571/user_1_qy7hlx.png"
  );
  const [picmessage, setPicMessage] = useState("");

  const handleChange = (event) => {
    setEmployee(event.target.value);
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading } = useSelector((state) => state.visitor);

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createVisitorAction(name, mobile, email, purpose, employee, pic));
  };

  const postDetails = (pics) => {
    if (
      pics ===
      "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1631444571/user_1_qy7hlx.png"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "noteszipper");
      data.append("cloud_name", "dv5jjlsd7");
      fetch("https://api.cloudinary.com/v1_1/dv5jjlsd7/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
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
                    value={employee}
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
                    <input
                      type="file"
                      onChange={(e) => postDetails(e.target.files[0])}
                      fullWidth="true"
                      hidden
                    />
                  </Button>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick={SubmitHandler}
              >
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

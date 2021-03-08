import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField, MenuItem, Select } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import useStyles from "./Style";
import { UserContext } from "./../../App";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const preferedClass = [
  { keyId: 0, class: 1 },
  { keyId: 1, class: 2 },
  { keyId: 2, class: 3 },
  { keyId: 3, class: 4 },
  { keyId: 4, class: 5 },
  { keyId: 5, class: 6 },
  { keyId: 6, class: 7 },
  { keyId: 7, class: 8 },
  { keyId: 8, class: 9 },
  { keyId: 9, class: 10 },
  { keyId: 10, class: 11 },
  { keyId: 11, class: 12 },
];

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export default function AddStudent() {
  const { state, dispatch } = React.useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [selected, setSelected] = React.useState("male");
  const [className, setClassName] = React.useState("classtype");
  const [rollNo, setRollNo] = React.useState("");
  const [bloodgroup, setBloodGroup] = React.useState("");
  const [snackbarOpen, setSnackBarOpen] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (ev) => {
    setSelected(ev.target.value);
  };

  useEffect(() => {
    let name = localStorage.getItem("name");
    let age = localStorage.getItem("age");
    let address = localStorage.getItem("address");
    let mobile = localStorage.getItem("mobile");
    let selected = localStorage.getItem("selected");
    let className = localStorage.getItem("className");
    let rollNo = localStorage.getItem("rollNo");
    let bloodgroup = localStorage.getItem("bloodgroup");

    if (name) {
      setName(JSON.parse(name));
    }
    if (age) {
      setAge(JSON.parse(age));
    }
    if (address) {
      setAddress(JSON.parse(address));
    }
    if (mobile) {
      setMobile(JSON.parse(mobile));
    }
    if (selected) {
      setSelected(JSON.parse(selected));
    }
    if (className) {
      setClassName(JSON.parse(className));
    }
    if (rollNo) {
      setRollNo(JSON.parse(rollNo));
    }
    if (bloodgroup) {
      setBloodGroup(JSON.parse(bloodgroup));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("age", JSON.stringify(age));
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("mobile", JSON.stringify(mobile));
    localStorage.setItem("selected", JSON.stringify(selected));
    localStorage.setItem("className", JSON.stringify(className));
    localStorage.setItem("rollNo", JSON.stringify(rollNo));
    localStorage.setItem("bloodgroup", JSON.stringify(bloodgroup));
  }, [name, age, address, mobile, selected, className, rollNo, bloodgroup]);

  const studentDatas = {
    id: uuidv4(),
    name: name,
    age: age,
    address: address,
    mobile: mobile,
    selected: selected,
    className: className,
    rollNo: rollNo,
    bloodgroup: bloodgroup,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || name.length < 6) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError(
        name.length !== 0
          ? "Name must be minimum of 6 characters"
          : "Name is required"
      );
      return snackOpen && snackerror;
    }
    if (!mobile || mobile.length < 10) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError(
        mobile.length !== 0
          ? "Mobile Number must be minimum of 10 characters"
          : "Mobile Number is required"
      );
      return snackOpen && snackerror;
    }

    if (!address || mobile.length < 5) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError(
        address.length !== 0
          ? "Address must be minimum of 5 characters"
          : "Address Number is required"
      );
      return snackOpen && snackerror;
    }
    if (className == "classtype") {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError("Class is required");
      return snackOpen && snackerror;
    }
    if (!rollNo) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError("Roll Number is required");
      return snackOpen && snackerror;
    }
    if (!bloodgroup) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError("Bloodgroup is required");
      return snackOpen && snackerror;
    }

    if (!age) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError(
        age.length !== 0
          ? "Age must be greater than 5 or less than 60"
          : "Age is required"
      );
      return snackOpen && snackerror;
    }

    if (!name) {
      registerFieldsError();
    } else {
      state.studentData.push(studentDatas);
      dispatch({ type: "ADD_STUDENT_KK", payload: "saif" });
      history.push("/");
    }
  };

  const snackbarClose = () => {
    setSnackBarOpen(false);
  };

  const registerFieldsError = () => {
    if (!name) {
      document.querySelector("#names").innerHTML = "Parent Name  is required";
    }
  };

  return (
    <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Add New Student
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container xs spacing={1}>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='name'
                label='name'
                name='name'
                autoComplete='name'
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {!name ? (
                <Typography
                  variant='body2'
                  style={{ color: "#bababa" }}
                  id='names'
                  className={classes.error}
                ></Typography>
              ) : (
                ""
              )}
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='age'
                label='age'
                id='age'
                autoComplete='current-age'
                inputProps={{ maxLength: 3 }}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='address'
                label='address'
                type='address'
                id='address'
                autoComplete='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Box>
                <Typography variant='body2' style={{ color: "#bababa" }}>
                  Gender
                </Typography>
                <span margin='normal' className={classes.genderOptions}>
                  <FormControl
                    component='fieldset'
                    name='method-of-payment'
                    style={{ marginRight: "50px" }}
                    className={
                      selected === "male"
                        ? classes.radioSelected
                        : classes.notSelected
                    }
                  >
                    <RadioGroup onChange={handleChange} value={selected}>
                      <FormControlLabel
                        value='male'
                        control={<Radio />}
                        label='Male'
                      />
                    </RadioGroup>
                  </FormControl>
                  <FormControl
                    component='fieldset'
                    name='method-of-payment'
                    className={
                      selected === "female"
                        ? classes.radioSelected
                        : classes.notSelected
                    }
                  >
                    <RadioGroup onChange={handleChange} value={selected}>
                      <FormControlLabel
                        value='female'
                        control={<Radio />}
                        label='Female'
                      />
                    </RadioGroup>
                  </FormControl>
                </span>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='mobile'
                label='mobile'
                id='mobile'
                autoComplete='mobile'
                inputProps={{ maxLength: 10 }}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />

              <FormControl margin='normal' className={classes.registerInput}>
                <Select
                  variant='outlined'
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  className={classes.singleestudentWeeks}
                  fullWidth
                >
                  <MenuItem value='classtype'>Choose Class</MenuItem>
                  {preferedClass.map((item) => (
                    <MenuItem value={item.class} key={item._id}>
                      {item.class}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='rollno'
                label='rollno'
                id='rollno'
                autoComplete='rollno'
                value={rollNo}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                onChange={(e) => setRollNo(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='bloodgroup'
                label='bloodgroup'
                type='bloodgroup'
                id='bloodgroup'
                autoComplete='bloodgroup'
                inputProps={{ maxLength: 2 }}
                value={bloodgroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              />
            </Grid>
          </Grid>
        </form>
        <Button
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={handleSubmit}
        >
          Add Student
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={classes.submit}
          onClick={() => history.push("/")}
        >
          Back to home
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={snackbarClose}
      >
        <Alert onClose={snackbarClose} severity='error'>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}

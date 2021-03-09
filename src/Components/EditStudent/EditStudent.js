import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField, MenuItem, Select } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CreateIcon from "@material-ui/icons/Create";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import useStyles from "./Style";
import { UserContext } from "./../../App";
import { useHistory, useParams } from "react-router";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

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

export default function EditStudent() {
  const { state, dispatch } = React.useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();
  let { id } = useParams();
  const [snackbarOpen, setSnackBarOpen] = useState(false);
  const [error, setError] = useState("");

  const [selectedStudent, setSeletedStudent] = useState({
    id: null,
    name: "",
    age: "",
    address: "",
    mobile: "",
    selected: "",
    className: "",
    rollNo: "",
    bloodgroup: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedStudent.name || selectedStudent.name.length < 6) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError(
        selectedStudent.name.length !== 0
          ? "Name must be minimum of 6 characters"
          : "Name is required"
      );
      return snackOpen && snackerror;
    }
    if (!selectedStudent.mobile || selectedStudent.mobile.length < 10) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError(
        selectedStudent.mobile.length !== 0
          ? "Mobile Number must be minimum of 10 characters"
          : "Mobile Number is required"
      );
      return snackOpen && snackerror;
    }

    if (!selectedStudent.address || selectedStudent.address.length < 5) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError(
        selectedStudent.address.length !== 0
          ? "Address must be minimum of 5 characters"
          : "Address Number is required"
      );
      return snackOpen && snackerror;
    }
    if (selectedStudent.className == "classtype") {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError("Class is required");
      return snackOpen && snackerror;
    }
    if (!selectedStudent.rollNo) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError("Roll Number is required");
      return snackOpen && snackerror;
    }
    if (!selectedStudent.bloodgroup) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError("Bloodgroup is required");
      return snackOpen && snackerror;
    }

    if (!selectedStudent.age) {
      let snackOpen = setSnackBarOpen(true);
      let snackerror = setError("Age is required");
      return snackOpen && snackerror;
    }

    if (!selectedStudent.name) {
      registerFieldsError();
    } else {
      dispatch({ type: "ADD_STUDENT_KK", payload: "saif" });
      dispatch({ type: "EDIT_STUDENT", payload: selectedStudent });

      history.push("/");
    }
  };

  const handleOnChange = (userKey, value) =>
    setSeletedStudent({ ...selectedStudent, [userKey]: value });

  if (!selectedStudent) {
    alert("Id dont match !");
  }

  useEffect(() => {
    const studentId = id;
    const selectedUser = state.studentData.find(
      (student) => student.id === studentId
    );
    setSeletedStudent(selectedUser);
  }, []);

  const registerFieldsError = () => {
    if (!selectedStudent.name) {
      document.querySelector("#names").innerHTML = "Parent Name  is required";
    }
  };

  const snackbarClose = () => {
    setSnackBarOpen(false);
  };

  return (
    <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Update Student
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
                value={selectedStudent.name}
                onChange={(e) => handleOnChange("name", e.target.value)}
              />
              {!selectedStudent.name ? (
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
                type='age'
                id='age'
                autoComplete='current-age'
                value={selectedStudent.age}
                inputProps={{ maxLength: 3 }}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                onChange={(e) => handleOnChange("age", e.target.value)}
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
                value={selectedStudent.address}
                onChange={(e) => handleOnChange("address", e.target.value)}
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
                      selectedStudent.selected === "male"
                        ? classes.radioSelected
                        : classes.notSelected
                    }
                  >
                    <RadioGroup
                      onChange={(e) =>
                        handleOnChange("selected", e.target.value)
                      }
                      value={selectedStudent.selected}
                    >
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
                      selectedStudent.selected === "female"
                        ? classes.radioSelected
                        : classes.notSelected
                    }
                  >
                    <RadioGroup
                      onChange={(e) =>
                        handleOnChange("selected", e.target.value)
                      }
                      value={selectedStudent.selected}
                    >
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
                type='mobile'
                id='mobile'
                autoComplete='mobile'
                inputProps={{ maxLength: 10 }}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                value={selectedStudent.mobile}
                onChange={(e) => handleOnChange("mobile", e.target.value)}
              />

              <FormControl margin='normal' className={classes.registerInput}>
                <Select
                  variant='outlined'
                  value={selectedStudent.className}
                  onChange={(e) => handleOnChange("className", e.target.value)}
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
                type='rollno'
                id='rollno'
                autoComplete='rollno'
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                value={selectedStudent.rollNo}
                onChange={(e) => handleOnChange("rollNo", e.target.value)}
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
                value={selectedStudent.bloodgroup}
                onChange={(e) => handleOnChange("bloodgroup", e.target.value)}
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
          Update Student
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

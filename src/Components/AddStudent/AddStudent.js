import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField, MenuItem, Select } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import useStyles from "./Style";
import { UserContext } from "./../../App";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";

const preferedClass = [
  { keyId: 0, name: 1 },
  { keyId: 1, name: 2 },
  { keyId: 2, name: 3 },
];

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
    gender: selected,
    className: className,
    rollNo: rollNo,
    bloodgroup: bloodgroup,
  };

  let studentArrData = [];

  studentArrData.push(studentDatas);

  let ggg;

  Object.keys(studentArrData).map((dailyActivities, i) => {
    ggg = studentArrData[dailyActivities];
  });

  let mkjs = state !== null && state.studentData ? state.studentData : [];

  let dhghs = [];

  const handleSubmit = (e) => {
    e.preventDefault();

    state.studentData.push(studentDatas);
    dispatch({ type: "ADD_STUDENT_KK", payload: "saif" });

    // console.log("sdsgh", studentData);
    // console.log(dhghs, "studentData");
    history.push("/");
  };

  return (
    <Container>
      {/* <CssBaseline /> */}
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
                type='mobile'
                id='mobile'
                autoComplete='mobile'
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
                    <MenuItem value={item.name} key={item._id}>
                      {item.name}
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
                value={rollNo}
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
                value={bloodgroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              />
            </Grid>
          </Grid>
        </form>
        <Button
          // type='submit'
          // fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={handleSubmit}
        >
          Add
        </Button>
        <Button
          // fullWidth
          variant='contained'
          color='secondary'
          className={classes.submit}
        >
          Back to home
        </Button>
      </div>
    </Container>
  );
}

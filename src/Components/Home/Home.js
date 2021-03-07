import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Box, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { UserContext } from "./../../App";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    // width:"20px",
    // borderRadius:"50%",
    // height:"10px"
    margin: "10px auto",
    display: "block",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    lineHeight: "35px",
  },
  grow: {
    "& .MuiGrid-spacing-xs-2": {
      margin: "0px",
    },
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const details = [
  {
    name: "Saif",
    age: 18,
    address: "Bangalore",
    gender: "male",
    mobile: "8547558475",
    class: 4,
    rollno: 28,
    bloodgroup: "A+",
  },
  {
    name: "Virat",
    age: 18,
    address: "Bangalore",
    gender: "male",
    mobile: "8547558475",
    class: 4,
    rollno: 28,
    bloodgroup: "A+",
  },
  {
    name: "Rahul",
    age: 18,
    address: "Bangalore",
    gender: "male",
    mobile: "8547558475",
    class: 4,
    rollno: 28,
    bloodgroup: "A+",
  },
  {
    name: "Mohan",
    age: 18,
    address: "Bangalore",
    gender: "male",
    mobile: "8547558475",
    class: 4,
    rollno: 28,
    bloodgroup: "A+",
  },
];

export default function Home() {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(UserContext);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  let mainStateSubArr = state.studentData !== 0 ? state.studentData : [];

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchName, setSearchName] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const [chipData, setChipData] = React.useState(mainStateSubArr);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.id !== chipToDelete.id));
  };

  const addStudent = () => {
    if (state === null) {
      dispatch({ type: "ADD_STUDENT", payload: [] });
    }
    history.push("/addstudent");
  };

  React.useEffect(() => {
    const results = chipData.filter(
      (person) =>
        person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        person.name.toUpperCase().includes(searchTerm.toLocaleUpperCase())
    );

    setSearchName(results);

    if (chipData) {
      dispatch({
        type: "ADD_STUDENT",
        payload: chipData,
      });
    }
    // state.totalsubarray = chipData;
  }, [chipData, searchTerm]);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button variant='contained' color='secondary' onClick={addStudent}>
          Add Student
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            Student Management System
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button variant='contained' color='secondary' onClick={addStudent}>
              Add Student
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Box>
        <Grid container xs={12} spacing={2}>
          {state !== null && state.studentData.length > 0
            ? searchName.map((el, index) => {
                return (
                  <Grid item lg={3} xs={12} sm={6} md={6}>
                    <h2 className={classes.avatar}>{index + 1}</h2>
                    <Box
                      style={{
                        background: "#b3868e",
                        textAlign: "start",
                        padding: "5px 10px",
                      }}
                    >
                      <h2>name: {el.name}</h2>
                      <h2>age: {el.age}</h2>
                      <h2>address: {el.address}</h2>
                      <h2>gender: {el.gender}</h2>
                      <h2>mobile: {el.mobile}</h2>
                      <h2>class: {el.className}</h2>
                      <h2>rollno: {el.rollNo}</h2>
                      <h2>bloodgroup: {el.bloodgroup}</h2>
                      <Box>
                        <Link to='/edit'>
                          <Button>Edit</Button>
                        </Link>
                        <Button onClick={handleDelete(el)}>Delete</Button>
                      </Box>
                    </Box>
                  </Grid>
                );
              })
            : "No data for student, Please add new student"}
        </Grid>
      </Box>
    </div>
  );
}

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";

import MoreIcon from "@material-ui/icons/MoreVert";
import { Box, Button, Grid } from "@material-ui/core";
import { UserContext } from "./../../App";
import { useHistory } from "react-router";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import useStyles from "./Style";

export default function Home() {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(UserContext);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  let mainStateSubArr =
    state !== null && state.studentData !== 0 ? state.studentData : [];

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchName, setSearchName] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const [chipData, setChipData] = React.useState(mainStateSubArr);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
    <Box className={classes.root}>
      <div className={classes.grow}>
        <AppBar position='static' style={{ background: "#142134" }}>
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
              <Button
                variant='contained'
                color='secondary'
                onClick={addStudent}
              >
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

        {searchName.length === 0 ? (
          <Typography className={classes.message}>
            No student's found
          </Typography>
        ) : (
          <Box padding='5px 20px'>
            <Grid container xs={12} spacing={2}>
              {state !== null && state.studentData.length > 0 ? (
                searchName.map((el, index) => {
                  return (
                    <Grid item lg={4} xs={12} sm={6} md={6}>
                      <h3 className={classes.avatar}>{index + 1}</h3>
                      <Box
                        style={{
                          background: "#282c34",
                          color: "#fff",
                          textAlign: "start",
                          padding: "5px 10px",
                          borderRadius: "4px",
                        }}
                      >
                        <h4>
                          <span className={classes.params}>Name:</span>{" "}
                          {el.name}
                        </h4>
                        <h4>
                          <span className={classes.params}>Age:</span> {el.age}
                        </h4>
                        <h4>
                          <span className={classes.params}>Address:</span>{" "}
                          {el.address}
                        </h4>
                        <h4>
                          <span className={classes.params}>Gender:</span>{" "}
                          {el.selected}
                        </h4>
                        <h4>
                          <span className={classes.params}>Mobile Number:</span>{" "}
                          {el.mobile}
                        </h4>
                        <h4>
                          <span className={classes.params}>Class:</span>{" "}
                          {el.className}
                        </h4>
                        <h4>
                          <span className={classes.params}>Rollno:</span>{" "}
                          {el.rollNo}
                        </h4>
                        <h4>
                          <span className={classes.params}>Bloodgroup:</span>{" "}
                          {el.bloodgroup}
                        </h4>
                        <Box display='flex' justifyContent='space-around'>
                          <Button
                            variant='outlined'
                            className={classes.edit}
                            onClick={() => history.push(`/edit/${el.id}`)}
                          >
                            Edit
                          </Button>

                          <Button
                            className={classes.delete}
                            onClick={handleDelete(el)}
                          >
                            <span> Delete </span>
                            <span>
                              <DeleteForeverIcon />
                            </span>
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })
              ) : (
                <Typography className={classes.message}>
                  No data for student, Please add new student
                </Typography>
              )}
            </Grid>
          </Box>
        )}
      </div>
    </Box>
  );
}

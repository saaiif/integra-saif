import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: "#000916",
  },
  delete: {
    color: "red",
    display: "flex",
    padding: "5px",
    alignItems: "center",
    marginBottom: "10px",
  },
  edit: {
    color: "#fff",
    display: "flex",
    background: "#3a6186",
    padding: "5px",
    alignItems: "center",
    marginBottom: "10px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#142134",
    margin: "10px auto",
    display: "block",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    lineHeight: "40px",
    color: "#bababa",
  },
  params: {
    color: "#feb47b",
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
    backgroundColor: "#141e2c",
    "&:hover": {
      backgroundColor: "#141e2c",
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
  message: {
    color: "#bababa",
    fontSize: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
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

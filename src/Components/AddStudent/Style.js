import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .MuiInputBase-input": {
      width: "100%",
      textAlign: "start",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "260px",
  },
  radioSelected: {
    color: "rgb(245 0 87)",
  },
  registerInput: {
    width: "100%",
    borderRadius: "4px",
    color: "#bababa",
    border: "none !important",
    outline: "none !important",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  singleestudentWeeks: {
    width: "100%",
  },
  genderOptions: {
    width: "100%",
    textAlign: "start",
  },
}));

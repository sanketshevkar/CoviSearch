import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(0),
  },
}));

export default function CheckboxesCities(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setState({
      ...props.state,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    pune,
    nashik,
    mumbai,
    delhi,
    bengaluru,
    nagpur,
    lucknow,
    indore,
    hyderabad,
    chennai,
    haryana
  } = props.state;

  return (
    <div className={classes.root}>
      <FormControl
        required
        component="fieldset"
        className={classes.formControl}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={pune} onChange={handleChange} name="pune" />
            }
            label="Pune"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={nashik}
                onChange={handleChange}
                name="nashik"
              />
            }
            label="Nashik"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mumbai}
                onChange={handleChange}
                name="mumbai"
              />
            }
            label="Mumbai"
          />
          <FormControlLabel
            control={
              <Checkbox checked={delhi} onChange={handleChange} name="delhi" />
            }
            label="Delhi"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bengaluru}
                onChange={handleChange}
                name="bengaluru"
              />
            }
            label="Bengaluru"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={nagpur}
                onChange={handleChange}
                name="nagpur"
              />
            }
            label="Nagpur"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={lucknow}
                onChange={handleChange}
                name="lucknow"
              />
            }
            label="Lucknow"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={indore}
                onChange={handleChange}
                name="indore"
              />
            }
            label="Indore"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hyderabad}
                onChange={handleChange}
                name="hyderabad"
              />
            }
            label="Hyderabad"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={chennai}
                onChange={handleChange}
                name="chennai"
              />
            }
            label="Chennai"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={haryana}
                onChange={handleChange}
                name="haryana"
              />
            }
            label="Haryana"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

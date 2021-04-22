import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formControl: {
    margin: theme.spacing(0),
  },
}));

export default function CheckboxesCities(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setState({ ...props.state, [event.target.name]: event.target.checked });
  };

  const { pune, nashik, mumbai } = props.state;

  return (
    <div className={classes.root}>
      <FormControl required component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={pune} onChange={handleChange} name="pune" />}
            label="Pune"
          />
          <FormControlLabel
            control={<Checkbox checked={nashik} onChange={handleChange} name="nashik" />}
            label="Nashik"
          />
          <FormControlLabel
            control={<Checkbox checked={mumbai} onChange={handleChange} name="mumbai" />}
            label="Mumbai"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

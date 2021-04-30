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

export default function CheckboxesResources(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setState({ ...props.state, [event.target.name]: event.target.checked });
  };

  const { oxygen, beds, ICU, plasma, remdesivir } = props.state;

  return (
    <div className={classes.root}>
      <FormControl required component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={oxygen} onChange={handleChange} name="oxygen" />}
            label="Oxygen"
          />
          <FormControlLabel
            control={<Checkbox checked={beds} onChange={handleChange} name="beds" />}
            label="Beds"
          />
          <FormControlLabel
            control={<Checkbox checked={ICU} onChange={handleChange} name="ICU" />}
            label="ICU"
          />
          <FormControlLabel
            control={<Checkbox checked={plasma} onChange={handleChange} name="plasma" />}
            label="Plasma"
          />
          <FormControlLabel
            control={<Checkbox checked={remdesivir} onChange={handleChange} name="remdesivir" />}
            label="Remdesivir"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

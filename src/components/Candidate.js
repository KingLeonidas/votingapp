
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Candidate(props){
    return(
        <div className="card">
            <img src={props.img} className="card--image"/>
            <FormControlLabel
            control={
              <Checkbox  name={props.name} />
            }
            label={props.name}
          />
        </div>
    );
}
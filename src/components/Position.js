
import Candidate from "./Candidate"
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

export default function Position(props){

    return(
        <div className="bob">
        <section className="Tabs">
           <div className="cards-list">
       {props.candidates.map(({name,img})=><Candidate name={name} img={img}/>)}
       </div>
       </section>
       <br/>
        </div>
        
    );
}
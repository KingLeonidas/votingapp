
import Candidate from "./Candidate"


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
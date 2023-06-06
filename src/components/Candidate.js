import "../App.css"


export default function Candidate(props){

    return(
        <div className="card" >
            <img src={`https://winnhscomputerscience.net/pictures/${props.img}.jpg`} className="card--image"/>
            <table className="tableCard">
              <tbody>
    <tr>
      <td>
     
      {props.firstname}
      </td>
    </tr>
    <tr>
      <td >
      {props.lastname}
      </td>
    </tr>
    <tr>
      <td className="checkbox">
            <input className="option-input checkbox"
            key={props.index}
            onChange={() => props.checkChange(props.index)}
            type="checkbox"
            checked={props.checked.includes(props.index)}
            disabled={!props.checked.includes(props.index) && props.checked.length+1 > props.seats}/>
      </td>
    </tr>
    </tbody>
  </table>
           
        </div>
    );
}
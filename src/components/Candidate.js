


export default function Candidate(props){
    return(
        <div className="card">
            <img src={`https://winnhscomputerscience.net/pictures/${props.img}.jpg`} className="card--image"/>
            <table key={props.id}>
              <tbody>
    <tr>
      <td>
      {props.name}
      </td>
    </tr>
    <tr>
      <td className="checkbox">
      
            <input className="option-input checkbox"
            type="checkbox"
            name="candidates"
            value={props.name}/>
      </td>
    </tr>
    </tbody>
  </table>
           
        </div>
    );
}
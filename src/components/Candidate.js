


export default function Candidate(props){
    return(
        <div className="card" >
            <img src={`https://winnhscomputerscience.net/pictures/${props.img}.jpg`} className="card--image"/>
            <table>
              <tbody>
    <tr>
      <td>
      {props.firstname}
      </td>
    </tr>
    <tr>
      <td>
      {props.lastname}
      </td>
    </tr>
    <tr>
      <td className="checkbox">
            <input className="option-input checkbox"
            type="checkbox"
            name="candidates"
            value={props.img}/>
      </td>
    </tr>
    </tbody>
  </table>
           
        </div>
    );
}



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
      <label className="form-control12">
            <input
            type="checkbox"
            name="candidates"
            value={props.name}/>
           
            </label>
      </td>
    </tr>
    </tbody>
  </table>
           
        </div>
    );
}
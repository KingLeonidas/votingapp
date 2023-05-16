


export default function Candidate(props){
    return(
        <div className="card">
            <img src={props.img} className="card--image"/>
            <table>
    <tr>
      <td>
      {props.name}
      </td>
    </tr>
    <tr>
      <td class="checkbox">
      <label className="form-control12">
            <input
            type="checkbox"
            name="candidates"
            value={props.name}/>
           
            </label>
      </td>
    </tr>
  </table>
           
        </div>
    );
}
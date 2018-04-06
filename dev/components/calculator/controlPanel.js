import {h} from 'composi';

const ControlPanel = (props) => (
  <div className="control-panel my-2 mx-1">
    <button className="btn btn-block text-secondary" disabled={!props.anyHistory} onClick={props.onToggleHistory}>
      <i className="fa fa-history fa-2x"></i>
    </button>
  </div>
);


export default ControlPanel;
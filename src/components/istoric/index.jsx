import { useSelector, useDispatch } from "react-redux";
import OldList from "./oldList";

function Istoric() {
  const istoric = useSelector(state => state.istoric.lista)

  return (
    <div>
      {istoric.map(i => <OldList key={i._id} {...i} />)}
      <span className="more__link">mai multe</span>
    </div>
  );
}
 
export default Istoric;
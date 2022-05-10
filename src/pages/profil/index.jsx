import ProfilNav from "../../components/profilNav";
import Istoric from "../../components/istoric";
import YourData from "./yourData";
import { useParams } from 'react-router-dom';

function Profil() {
  const { id } = useParams();

  return (
    <section className="profil-container">
      <ProfilNav />
      {id === "informatii-cont" ? <YourData /> : <Istoric />}
    </section>
  );
}

export default Profil; 
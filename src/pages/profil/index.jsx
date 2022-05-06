import ProfilNav from "../../components/profilNav";
import Istoric from "../../components/istoric";
import { useParams } from 'react-router-dom';

function Profil() {
  const { id } = useParams;

  return (
    <section className="profil-container">
      <ProfilNav />
      {id === "informatii-cont" ? null : <Istoric />}
    </section>
  );
}

export default Profil; 
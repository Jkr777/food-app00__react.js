import InfoItem from "./infoItem";
import { FaShippingFast, FaWallet, FaBoxOpen, FaInfoCircle } from "react-icons/fa";

function MoreInfo() {
  return (
    <div className="moreInfo-container">
      <InfoItem 
        title="Livrare gratuita"
        info="La orice comanda de peste 100€."
        icon={<FaShippingFast size="3rem" color="#1D3D40" />}
      />

      <InfoItem
        title="Plata si livrare"
        info="Platile sunt securizate iar livrarea se face la temperatura controlata."
        icon={<FaWallet size="3rem" color="#1D3D40" />}
      />

      <InfoItem
        title="Impachetare" 
        info="Impachetarea premium! Toate produsele cumparate sunt impachetate manual."
        icon={<FaBoxOpen size="3rem" color="#1D3D40" />}
      />

      <InfoItem
        title="Ajutor"
        info="Profita de asistenta online si contacteaza-ne pentru orice nelamurire"
        icon={<FaInfoCircle size="3rem" color="#1D3D40" />}
      />
    </div>
  );
}

export default MoreInfo;
function InfoItem({ title, info, icon }) {
  return (
    <div className="infoItem-container">
      <div className="infoItem-container__icon-back">
        {icon}
      </div>
      <span className="infoItem-container__title">{title}</span>
      <p>{info}</p>
    </div>
  );
}

export default InfoItem;
import './styles/CardIcons.css';

const CardIcons = (props) => {
  const { item } = props;

  return (
    <div className="homepage-card-icon" data-aos="zoom-in">
      <i className={item.icon}></i>
      <span className="homepage-card-icon-title">{item.title}</span>
    </div>
  )
};

export default CardIcons;
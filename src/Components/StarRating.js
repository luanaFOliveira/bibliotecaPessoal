import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function StarRating({ rating }) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-icon" style={{fontSize:'24px'}} />);
    }
  
    return <div>{stars}</div>;
}

export default StarRating;
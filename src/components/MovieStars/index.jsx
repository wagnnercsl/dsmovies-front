import React from 'react';
import { MdStar as StarFull, 
        MdStarHalf as StarHalf,
        MdStarOutline as StarEmpty 
} from 'react-icons/md';
import './styles.css';

const MovieStars = () => {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;
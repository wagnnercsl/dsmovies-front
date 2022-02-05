import React from 'react';
import { FiChevronLeft as ArrowLeft, FiChevronRight as ArrowRight } from 'react-icons/fi';
import './styles.css';

const Pagination = () => {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <ArrowLeft />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
}

export default Pagination;
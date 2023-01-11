import React, { useState } from 'react';
import './styles.css';

export const StarRating = ({ of = 5 }) => {
    const arr = [...Array(of)].map((_, i) => i + 1);

    const [position, setPosition] = useState(0);

    return (
        <div className="card">
            <div className="card-body">
                {
                    arr.map((i) =>
                        <span key={i}
                            onClick={() => setPosition(i)}
                            className={i<=position ? 'orange-star' : 'black-star'}
                        >★</span>
                    )
                }
            </div>
        </div>
    );
};

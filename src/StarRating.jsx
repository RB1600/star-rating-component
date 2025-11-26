import React, { useState } from 'react';
//import star icon from react-icons.
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div style={styles.container}>
            <h2>Rate This Product</h2>
            <div style={styles.stars}>
                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onClick={() => setRating(currentRating)}
                                style={{ display: "none" }}
                            />
                            <FaStar
                                className="star"
                                size={50}
                                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(0)}
                                style={{ cursor: "pointer", transition: "color 200ms" }}
                            />
                        </label>
                    );
                })}
            </div>
            <p style={styles.text}>Your Rating is: {rating} stars</p>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#f0f2f5"
    },
    stars: {
        display: "flex",
        gap: "10px"
    },
    text: {
        marginTop: "20px",
        fontSize: "1.2rem",
        fontWeight: "bold"
    }
};

export default StarRating;
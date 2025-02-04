import React, { useState } from 'react';

function R5Events() {
    const [answers, setAnswers] = useState({
        favoriteFood: '',
        hobbies: '',
        happinessReason: '',
        wildTrigger: '',
        favoriteMovies: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: value
        }));
    };

    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <h2>Answer the following questions:</h2>
                
                <label>
                    What is your favorite food? <br />
                    <input
                        type="text"
                        name="favoriteFood"
                        value={answers.favoriteFood}
                        onChange={handleChange}
                        placeholder="Enter your favorite food"
                    />
                </label>
                <br /><br />

                <label>
                    Mention any three hobbies: <br />
                    <input
                        type="text"
                        name="hobbies"
                        value={answers.hobbies}
                        onChange={handleChange}
                        placeholder="Enter three hobbies"
                    />
                </label>
                <br /><br />

                <label>
                    When will you feel happy? <br />
                    <input
                        type="text"
                        name="happinessReason"
                        value={answers.happinessReason}
                        onChange={handleChange}
                        placeholder="When do you feel happy?"
                    />
                </label>
                <br /><br />

                <label>
                    When will you get wild? <br />
                    <input
                        type="text"
                        name="wildTrigger"
                        value={answers.wildTrigger}
                        onChange={handleChange}
                        placeholder="When do you get wild?"
                    />
                </label>
                <br /><br />

                <label>
                    Any movies you liked the most? <br />
                    <input
                        type="text"
                        name="favoriteMovies"
                        value={answers.favoriteMovies}
                        onChange={handleChange}
                        placeholder="Your favorite movies"
                    />
                </label>
            </div>

            <div>
                <h3>Your Answers:</h3>
                <p><strong>Favorite Food:</strong> {answers.favoriteFood}</p>
                <p><strong>Hobbies:</strong> {answers.hobbies}</p>
                <p><strong>Feel Happy When:</strong> {answers.happinessReason}</p>
                <p><strong>Get Wild When:</strong> {answers.wildTrigger}</p>
                <p><strong>Favorite Movies:</strong> {answers.favoriteMovies}</p>

                
            </div>
        </>
    );
}

export default R5Events;

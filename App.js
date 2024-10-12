import React, { useState } from 'react';
import foxImage from './path/to/your/fox-image.jpg'; // Убедитесь, что у вас есть это изображение

const App = () => {
    const [coins, setCoins] = useState(0);

    const handleTap = () => {
        setCoins(coins + 1);
    };

    return (
        <div className="app">
            <h1>Тапай лису!</h1>
            <img
                src={foxImage}
                alt="Лиса"
                className="fox-image"
                onClick={handleTap}
            />
            <h2>Монеты: {coins}</h2>
        </div>
    );
};

export default App;

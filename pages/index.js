import { useState } from 'react';

function Home() {
    
    return (
        <div>
            <h1>Home 4</h1>
            <Contador />
        </div>
       
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adcionarMaisUm() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adcionarMaisUm}>adcionar</button>
        </div>
    )
}

export default Home;
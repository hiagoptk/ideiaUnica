import { useState } from 'react';
import Link from 'next/link';


function Home() {
    
    return (
        <div>
            <h1>Home 1</h1>
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
            <div><Link href='/consultores/consultores'><a>Consultores</a></Link></div>
        </div>
    )
}

export default Home;
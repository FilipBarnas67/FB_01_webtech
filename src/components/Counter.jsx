import { useState } from "react"

export default function Counter()
{
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(true);
    const [visible, setvisible] = useState(true);

    return(
        <>
        <h1>Liczba: {count}</h1>
        <button onClick={() => setCount(count+1)}>+1</button>
        <button onClick={() => setCount(count-1)}>-1</button>
        <button onClick={() => setCount(0)}>RESET</button>
        <button onClick={() => setCount(count+5)}>+5</button>
        <button onClick={() => setCount(count-5)}>-5</button>
        <button onClick={() => setCount(100)}>Ustaw na 100</button>
        <h1>Boolean: {bool ? "true" : "false"}</h1>
        <button onClick={() => setBool(!bool)}>{bool ? "Ustaw na false" : "Ustaw na true"}</button>
        <h1 className={visible ? null : "niewidoczna"}>Widocznosc</h1>
        <button onClick={() => setvisible(!visible)}>{visible? "Ukryj tekst" : "Pokaż tekst"}</button>
        </>
    )
}
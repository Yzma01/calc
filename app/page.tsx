'use client';
import CustumButtons from "./CustumButtons";
import { useState } from "react";

export default function Home() {
  const numbersArray = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=']
  const [numbers, setNumbers] = useState('0')

  const handleClick = (num: string) => {
    setNumbers(numbers + num)
  }
  return (
    <main >
      <header>
        <h1>Calculador</h1>
      </header>
      <main>
        <section className="screen-panel">
          <input
            placeholder="0"
            className="screen"
            value={numbers}
          />
          <CustumButtons name={'C'} onClick={() => setNumbers('0')}/>
        </section>
        <section className="buttons-panel">
          {numbersArray.map((btn) =>(
            <CustumButtons name={btn} onClick={() => handleClick(btn)}/>
          ))}
        </section>
      </main>
      <footer></footer>
    </main>
  );
}

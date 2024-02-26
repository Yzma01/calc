'use client';
import CustumButtons from "./CustumButtons";
import { useState } from "react";

export default function Home() {
  const numbersArray = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=']
  
  const [numbers, setNumbers] = useState('0')

  const handleClick = (num: string) => {
    if(num == '='){
      setNumbers('puta')
      
      for(let i = 0; i<numbers.length; i++){
        console.log(numbers[i])
      }
    }else{
      setNumbers(numbers + num)
    }
  }

  const handleChange = ()=>{}
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
            onChange={handleChange}
          />
          <CustumButtons key={9999} className="btn-c" name={'C'} onClick={() => setNumbers('')}/>
        </section>
        <section className="buttons-panel">
          {numbersArray.map((btn, key) =>{
            console.log(key)
            return(
            <CustumButtons key={key}className="btn" name={btn} onClick={() => handleClick(btn)}/>
)})}
        </section>
      </main>
      <footer></footer>
    </main>
  );
}

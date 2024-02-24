import CustumButtons from "./CustumButtons";

export default function Home() {
  const numbersArray = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=']
  function handleClick(){

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
          />
          <CustumButtons name={'C'} onClick={handleClick}/>
        </section>
        <section className="buttons-panel">
          {numbersArray.map((btn) =>(
            <CustumButtons name={btn} onClick={handleClick}/>
          ))}
        </section>
      </main>
      <footer></footer>
    </main>
  );
}

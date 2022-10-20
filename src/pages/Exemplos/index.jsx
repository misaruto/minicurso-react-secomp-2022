import { useEffect, useRef, useState } from 'react';

let renderCount = 0;
export function Exemplos() {
  const [contador, setContador] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
  }, []);
  useEffect(() => {
    console.log(`Estado incrementado: ${contador}`);
    return () => {
      console.log('Renderizando a pagina');
    };
  }, [contador]);
  console.log(`Contador de renderizações ${renderCount}`);
  renderCount = renderCount + 1;
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 ref={ref}>&ensp;{contador}</h1>

      <button
        style={{ width: 200, height: 50, backgroundColor: '#f00' }}
        onClick={() => {
          setContador((prevState) => prevState + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}

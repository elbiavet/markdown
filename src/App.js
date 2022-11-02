
import { useState } from 'react';
import './App.css';
import { Editor } from './components/Editor';
import { VistaPrevia } from './components/VistaPrevia';

export function App() {

  const ejMD = `
  # Soy un titulo
  ## Soy un subtitulo
  Soy un texto en **negrita**

  Soy un enlace [links](https://www.freecodecamp.org)

  Aquí hay código entre dos backsticks, \`<div></div>\`

  \`\`\`
  let x= 1;
  let y=2;
  let z=3; 
  \`\`\`

- Elemento de lista 1
- Elemento de lista 2
- Elemento de lista 3

> Esto es una cita de bloque

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  ` 
  
  console.log(Object.values(ejMD))
  // puedo poner en el useState Object.values(ejMD).toString() o bien ponerlo en el useEffect.
  const [texto, setTexto] = useState(ejMD)

  return (
    <div className="App">
      <h1 className="app-title">Previsualizador Markdown</h1>
      <Editor texto = {texto} setTexto = {setTexto}/>
      <VistaPrevia texto = {texto}/>
    </div>
  );
}

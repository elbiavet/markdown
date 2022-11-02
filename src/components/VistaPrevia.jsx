import "../estilos/VistaPrevia.css"
import { marked } from "marked";
import { useEffect } from "react"

export const VistaPrevia = ({texto}) => {

    const mdtext = (contenido) => {
        return document.getElementById("preview").innerHTML = marked(contenido)
    }

    //Para tratar los saltos de línea en el texto como un salto de línea real, hay que establecer las siguientes opciones:
    marked.setOptions({
        breaks: true,
        gfm: true
      });

    useEffect(()=>{
		mdtext(texto) 
	},[texto])


  return (
    <div>
      <div className="editor-title">Previsualizador</div>
      <div id="preview">{texto}</div>
    </div>
  )
}

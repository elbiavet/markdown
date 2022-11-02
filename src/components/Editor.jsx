
import "../estilos/Editor.css"

export const Editor = ({texto, setTexto}) => {

    const handleChange = (e) =>{
        setTexto(e.target.value);
    }

  return (
    <div>
      <div className="editor-title">Editor</div>
      <textarea id="editor" onChange = {handleChange} value = {texto}></textarea>
    </div>
   
  )
}

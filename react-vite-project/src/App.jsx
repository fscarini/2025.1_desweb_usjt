import './styles.css'

const App = () =>{

    const botaoClickado = () => alert("Ele clickou aqui hein Kkkkk")
    const estilosContainer = {backgroundColor: "#e6e6e6", margin: "auto", width: 768, padding: 12, borderRadius: 8}
    const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: "#8b008b", color: "#ffffff", width:"100%", border: "none", outline: "none", borderRadius: 5, cursor: "pointer"}
    const estilosInput = {paddingTop: 8, paddingBottom: 8, border: "hidden", outline: "none", width: "100%", borderRadius: 8}
    const estilosLabel = {fontWeight: "bold", display: "block", cursor: "pointer", marginBottom: 4}

    return(
        <div style={estilosContainer}>
            <label className="rotulo" htmlFor="name" style={estilosLabel}>Nome</label>
            <input type="text" id="name" style={estilosInput}/>
            <button type="submit" style={estilosBotao} onClick={botaoClickado}>Enviar</button>
        </div>
    )
}

export default App
import React from "react";
import { StyledRegisterVideo } from "./style";

function userForm(propsDoForm){
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return{
        values,
        handleChange: (evento) =>{
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...value,
                [name]: value,
            });
        }
    };
}

export default function RegisterVideo(){
    const formCadastro = userForm({ 
       initialValues: {titulo: "Frost punk", url: "https://youtube.."}
    });
    const [formVisivel, setFormVisivel] = React.useState(true);
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel 
                ? (
                <form onSubmit={(evento) =>{
                    evento.preventDefault();
                    console.log(values);
                }}>
                <div>
                <button className="close-modal" onClick={() => setFormVisivel(false)}>
                    x
                </button>
                <input placeholder="Titulo do video"
                name="Titulo" 
                value={formCadastro.values.titulo} 
                onChange={formCadastro.handleChange} />
                <input placeholder="URL" 
                name="url"
                value={formCadastro.values.url}
                onChange={formCadastro.handleChange}
                
                // {(evento) =>{
                //     const value = evento.target.value;
                //     console.log(value);
                //     setValues({
                //         ...values,
                //         url: value,
                //     })
                // }} 
                />
                <button type="submit">
                    Cadastrar
                </button>
                </div>
            </form>
            )
        : false }
        </StyledRegisterVideo>
    )
}
import React from "react";
import { StyledRegisterVideo } from "./style";
import { createClient } from "@supabase/supabase-js";

// Whiteboarding
// Custom Huck
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
        },
        cleanForm(){
            setValues({});
        }
    };
}

const PROJETC_URL = "https://npnjodczlwlgxgyesqus.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wbmpvZGN6bHdsZ3hneWVzcXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjMxMzgsImV4cCI6MTk4MzczOTEzOH0.zLLsi-5ZpdiHaMBDlGfSr0osj_Jv6cQNBeWufXXuIF0"
const supabase = createClient(PROJETC_URL, PUBLIC_KEY)

// get youtube thumbnail from video url
function getThumbnail(url){
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo(){
    const formCadastro = userForm({ 
       initialValues: {titulo: "Frost punk", url: "https://www.youtube.com/watch?v=QsqatJxAUtk"}
    });
    const [formVisivel, setFormVisivel] = React.useState(true);
   
    console.log();
   
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel 
                ? (
                <form onSubmit={(evento) =>{
                    evento.preventDefault();
                    console.log(formCadastro.values);

                    // Contrato entre o nosso front e back-end
                    supabase.from("video").insert({
                        title: formCadastro.values.title,
                        url: formCadastro.values.url,
                        thumb: getThumbnail(formCadastro.values.url),
                        playlist: "jogos",
                    })
                    .then((oqueveio) => {
                        console.log(oqueveio);
                    })
                    .catch((err) =>{
                        console.log(err)
                    })

                    setFormVisivel(false);
                    formCadastro.cleanForm();
                }}>
                <div>
                <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
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
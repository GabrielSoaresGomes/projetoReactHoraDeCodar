import {useState} from "react"

import styles from "./ProjectForm.module.css"

import Input from "../form/Input.js"
import Select from "../form/Select.js"
import SubmitButton from "../form/SubmitButton.js"

function ProjectForm({btnText}) {
    const [categories, setCategories] = useState([])

    //Fazendo um request
    fetch("https://localhost:5000/categories", {
        method: "GET",
        headers: {
            "Content-Type": "applications/json"
        }
    })
        //Pegando os valores do json
        .then((resp) => resp.json())
        //Inserindo os valores do json em um array com useStates
        .then((data) => {
            setCategories(data)
        })
        //Um log de algum possível erro
        .catch(err => console.log(err))

    return (
       <form className = {styles.form}>
               <Input text={"Insira o nome do projeto"} name={"Nome do projeto"} type={'text'} placeholder={"Digite aqui..."} />
               <Input text={"Insira o orçamento total"} name={"Orçamento total"} type={'number'} placeholder={"Digite aqui..."} />
           <Select name="category_id" text="Selecione a categoria" />
           <SubmitButton text={btnText} />
       </form>
    )
}

export default ProjectForm
import styles from "./ProjectForm.module.css"

import Input from "../form/Input.js"
import Select from "../form/Select.js"
import SubmitButton from "../form/SubmitButton.js"

function ProjectForm({btnText}) {
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
import styles from "./ProjectForm.module.css"

import Input from "../form/Input.js"

function ProjectForm() {
    return (
       <form className = {styles.form}>
               <Input text={"Insira o nome do projeto"} name={"Nome do projeto"} type={'text'} placeholder={"Digite aqui..."} />
               <Input text={"Insira o orçamento total"} name={"Orçamento total"} type={'number'} placeholder={"Digite aqui..."} />
           <div>
               <select name="category_id">
                <option disabled>Selecione a categoria</option>
           </select>
           </div>
           <Input name={"Salvar Projeto"} type={'submit'} placeholder={"Salvar Projeto"} />        
       </form>
    )
}

export default ProjectForm
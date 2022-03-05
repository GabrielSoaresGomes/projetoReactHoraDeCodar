import {useEffect, useState} from "react"

import styles from "./ProjectForm.module.css"

import Input from "../form/Input.js"
import Select from "../form/Select.js"
import SubmitButton from "../form/SubmitButton.js"

function ProjectForm({handleSubmit, btnText, projectData}) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {/*Objeto vazio*/})

    useEffect(() => {
            //Fazendo um request
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-Type": "applications/json"
            },
        })
            //Pegando os valores do json
            .then((resp) => resp.json())
            //Inserindo os valores do json em um array com useStates
            .then((data) => {
                setCategories(data)
            })
            //Um log de algum possível erro
            .catch(err => console.log(err))
    },[]) 

    const submit = (e) => {
        e.preventDefault() //Impede de dar reload quando da submit
        //console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
     })
    }

    return (
       <form onSubmit={submit} className = {styles.form}>
            <Input handleOnChange={handleChange} 
                text="Insira o nome do projeto"
                name="name"
                type='text'
                placeholder="Digite aqui..." 
                value={project.name ? project.name : ""}
            />

            <Input handleOnChange={handleChange} 
                text="Insira o orçamento total" 
                name='budget' 
                type='number' 
                placeholder="Digite aqui..." 
                value={project.budget ? project.budget : ""}
            />

            <Select handleCategory={handleCategory} 
                    name="category_id" 
                    options={categories} 
                    text="Selecione a categoria" 
                    value={project.category ? project.category.id : ''} 
            />

            <SubmitButton text={btnText}/>
       </form>
    )
}

export default ProjectForm
import { Navigate, useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom'

import Message from '../layout/Message'
import LinkButton from "../layout/LinkButton"
import styles from './NewProject.module.css'
import ProjectForm from "../project/ProjectForm.js"

function NewProject() {

    const navigate = useNavigate()

    const location = useLocation()
    let message = ""
    if (location.state) {
        message = location.state.message
    }

    function createPost(project) {

        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp => resp.json()))
            .then((data) => {
                console.log(data)
                // redirect
                navigate('/projects', {state: {message: "Projeto criado com sucesso!"}})
            })
            .catch(err => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            {message && <Message msg={message} type="success" /> }
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços!</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
            <LinkButton to={"/newcategory"} text={"Adicionar Categoria"}/>
        </div>
    )
}

export default NewProject
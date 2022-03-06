import { useNavigate } from "react-router-dom"

import styles from "./NewCategory.module.css"

import CategoryForm from "../project/CategoryForm"

function NewCategory() {

    const navigate = useNavigate()
    
    function createCategory(category) {
        //category.name = "default"

        fetch("http://localhost:5000/categories", {
            method: "POST",
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(category),
        })
            .then((resp => resp.json()))
            .then((data) => {
                console.log(data)
                // redirect
                navigate('/newproject', {state: {message: "Categoria adicionada com sucesso!"}})
            })
            .catch(err => console.log(err))

    }

    return(
        <div className={styles.newcategory_container}>
            <h1>Criar Catehoria</h1>
            <p>Adicione novas categorias para poderem ser selecionadas!</p>
            <CategoryForm handleSubmit={createCategory} btnText="Criar Categoria" />
        </div>
    )
}

export default NewCategory
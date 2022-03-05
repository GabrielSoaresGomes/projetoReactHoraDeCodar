import {useEffect, useState} from "react"

import styles from "./CategoryForm.module.css"

import Input from '../form/Input.js'
import SubmitButton from "../form/SubmitButton"

function CategoryForm({handleSubmit,btnText, categoryData}) {
    const [category, setCategory] = useState(categoryData || {})


    const submit = (e) => {
        e.preventDefault() //Impede de dar reload quando da submit
        //console.log(category)
        handleSubmit(category)
    }

    function handleChange(e) {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }


    return (
        <form onSubmit={submit} className={styles.form}>
            {/* type text name placeholder handleOnChange value */}
            <Input
                type="text"
                text="Insira a categoria"
                name="name"
                placeholder="Digite aqui..."
                handleOnChange={handleChange}
                value={category.name ? category.name : ""}
            />
            {/* text */}
            <SubmitButton 
                text="Salvar Categoria"
            />
        </form>
    )
}

export default CategoryForm
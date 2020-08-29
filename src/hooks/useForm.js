import { useState } from "react"

export default (initValues, callback) => {
    const [inputs, setInputs] = useState(initValues)

    const handleSubmit = async event => {
        if (event) event.preventDefault()
        if (!callback) return

        // execute passed callback function
        await callback(inputs)
    }

    const handleInputChange = event => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    return {
        inputs,
        handleInputChange,
        handleSubmit
    }
}

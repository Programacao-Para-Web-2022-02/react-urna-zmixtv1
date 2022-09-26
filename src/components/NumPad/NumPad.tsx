import { useEffect, useState, MouseEventHandler } from "react"

const NumPad = () => {
    const [numbers, setNumbers] = useState("")

    useEffect(() => {
        console.log(numbers)
    }, [numbers])

    const handleChange = (value: string): MouseEventHandler<HTMLButtonElement> => (event) => {
        setNumbers((current) => current + value)
    }

    return (
        <article id="numpad" className="keyboard-container container">
            <button onClick={handleChange("1")} type="button" className="keyboard-button">1</button>
            <button onClick={handleChange("2")} type="button" className="keyboard-button">2</button>
            <button onClick={handleChange("3")} type="button" className="keyboard-button">3</button>
            <button onClick={handleChange("4")} type="button" className="keyboard-button">4</button>
            <button onClick={handleChange("5")} type="button" className="keyboard-button">5</button>
            <button onClick={handleChange("6")} type="button" className="keyboard-button">6</button>
            <button onClick={handleChange("7")} type="button" className="keyboard-button">7</button>
            <button onClick={handleChange("8")} type="button" className="keyboard-button">8</button>
            <button onClick={handleChange("9")} type="button" className="keyboard-button">9</button>
            <button onClick={handleChange("0")} type="button" className="keyboard-button full-row">0</button>
            <button type="button" className="keyboard-button white" id="white">Branco</button>
            <button type="reset" className="keyboard-button red" id="resetButton">Corrige</button>
            <button type="submit" className="keyboard-button green" id="confirm">Confirma</button>
        </article>
    )
}

export default NumPad
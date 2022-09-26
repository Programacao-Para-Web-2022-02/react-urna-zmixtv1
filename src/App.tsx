import {useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NumPad from './components/NumPad/NumPad'

function App() {
    return (
        <main>
            <form id="form" className="form" action="fim.html" method="post">
                <article className="screen-container container">
                    <section className="form-section">
                        <header>
                            <h1>
                                Seu voto para
                                <br/>
                                <strong id="role" className="role-title">DEPUTADO ESTADUAL</strong>
                            </h1>
                        </header>
                        <fieldset className="text-field">
                            <label htmlFor="number0">
                                Número:
                            </label>
                            <div id="number-input-container" className="number-input-container">
                                <input type="number" name="number0" id="number0" className="number-input"/>
                                <input type="number" name="number1" id="number1" className="number-input"/>
                                <input type="number" name="number2" id="number2" className="number-input"/>
                                <input type="number" name="number3" id="number3" className="number-input"/>
                                <input type="number" name="number4" id="number4" className="number-input"/>
                            </div>
                        </fieldset>
                        <fieldset className="text-field">
                            <label htmlFor="name">
                                Nome:
                            </label>
                            <input type="text" name="name" id="name" className="text-input" disabled/>
                        </fieldset>
                        <fieldset className="text-field">
                            <label htmlFor="party">
                                Partido:
                            </label>
                            <input type="text" name="party" id="party" className="text-input" disabled/>
                        </fieldset>
                        <footer>
                            <p>
                                Aperte a Tecla
                            </p>
                            <p>
                                VERDE para CONFIRMAR
                            </p>
                            <p>
                                LARANJA para CORRIGIR
                            </p>
                        </footer>
                    </section>
                    <picture className="candidate-picture">
                        <img id="candidatePicture" src="./assets/placeholder.png" alt="Foto do deputado"/>
                    </picture>
                </article>
                <NumPad />
            </form>
        </main>
    )
}

export default App

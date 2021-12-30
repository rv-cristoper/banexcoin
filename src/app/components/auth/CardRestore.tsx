import React, { useState, FormEvent, ChangeEvent } from 'react'
import './scss/cardAuth.scss'

interface IProps {
    viewRestore: boolean
    changeOption: (value: string) => void
}

const CardRestore = ({ viewRestore, changeOption }: IProps): JSX.Element => {

    const [msmConfirmation, setMsmConfirmation] = useState<boolean>(false)

    const [loading, setLoading] = useState<boolean>(false)

    const [email, setEmail] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setEmail(value)
    }

    // Envío de correo electrónico para recuperar ontraseña
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setMsmConfirmation(true)
            setEmail('')
        }, 1500);
    }

    return (
        <div className={`containerAccess ${!viewRestore ? 'restore' : ''}`}>
            <div className='titLoggin'>
                <h1>Recuperar contraseña</h1>
                <p>Para recuperar su contraseña, indroduzca el correo con que se registró.</p>
            </div>
            <div className="contAccess">
                <form onSubmit={onSubmit}>
                    <div className="formBody" >
                        <label htmlFor="accessUser">
                            Correo electrónico
                            <i className="far fa-envelope" />
                            <input
                                id="accessUser"
                                type="email"
                                name='email'
                                placeholder="Ingrese correo electrónico"
                                value={email}
                                onChange={onChange}
                                disabled={loading}
                                required />
                        </label>
                    </div>
                    <div className="formFooter">
                        <button type='submit' disabled={loading}>
                            {
                                loading ? 'ENVIANDO...' : 'ENVIAR'
                            }
                        </button>
                        {
                            msmConfirmation &&
                            <p className='sucess'>Enviamos un mensaje  de recuperación a su correo electrónico con las intrucciones para continuar con este proceso.</p>
                        }
                        <span onClick={() => changeOption('login')}>¿Deseas iniciar sesión?</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CardRestore

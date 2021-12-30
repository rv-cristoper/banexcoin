import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Notification, { type } from '../../shared/toast/Toast'
import './scss/cardAuth.scss'

interface IUser {
    username: string,
    password: string
}

interface IProps {
    viewLogin: boolean
    changeOption: (value: string) => void
}

const CardAccess = ({ viewLogin, changeOption }: IProps): JSX.Element => {

    const navigate = useNavigate();

    const [user, setUser] = useState<IUser>({
        username: '',
        password: ''
    })

    const [msmError, setMsmError] = useState<boolean>(false)

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // Validación de credenciales de acceso
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            if (user.username === 'admin' && user.password === '123456') {
                Notification(type.success, "Logueado correctamente!")
                setLoading(false)
                navigate('/users')
            }
            else {
                setMsmError(true)
                setLoading(false)
            }
        }, 1200);
    }

    const { username, password }: IUser = user;

    return (
        <div className={`containerAccess ${!viewLogin ? 'other' : ''}`} >
            <div className='titLoggin'>
                <h1>Iniciar sesión</h1>
                <p>¿No tiene una cuenta? <span>Regístrese</span></p>
            </div>
            <div className='contbtnAccs'>
                <button>
                    <img src="https://res.cloudinary.com/cristoper/image/upload/v1640852405/banecoin/Google_icon-icons.com_66793_ue7fph.png" alt="imgGoogle" width='18px' />
                    <span>Iniciar sesión con Google</span>
                    <span>Google</span>
                </button>
                <button>
                    <i className="fab fa-facebook" />
                    <span>Iniciar sesión con Facebook</span>
                    <span>Facebook</span>
                </button>
            </div>
            <hr />
            <div className="contAccess">
                <form onSubmit={onSubmit}>
                    <div className="formBody" >
                        <label htmlFor="accessUser">
                            Usuario
                            <i className="fas fa-user" />
                            <input
                                id="accessUser"
                                type="text"
                                name='username'
                                placeholder="Ingrese usuario"
                                value={username}
                                onChange={onChange}
                                disabled={loading}
                                required />
                        </label>
                        <label htmlFor="accessPass">
                            Contraseña
                            <i className="fas fa-lock" />
                            <input
                                id="accessPass"
                                className="inpPass"
                                type={`${showPassword ? 'text' : 'password'}`}
                                placeholder="Ingrese contraseña"
                                name='password'
                                value={password}
                                onChange={onChange}
                                disabled={loading}
                                required
                            />
                            <i className={`far fa-eye${showPassword ? '-slash' : ''} ${loading ? 'disabled' : ''} `} onClick={() => setShowPassword(!showPassword)} />
                        </label>
                    </div>
                    {
                        msmError &&
                        <p>Usuario o contraseña incorrecto.</p>
                    }
                    <div className="formFooter">
                        <button type='submit' disabled={loading}>
                            {
                                loading ? 'ACCEDIENDO...' : 'INICIAR SESIÓN'
                            }
                        </button>
                        <span onClick={() => changeOption('restore')}>¿Olvidaste tu contraseña?</span>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default CardAccess

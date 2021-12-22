import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Notification, { type } from '../../shared/toast/Toast'
import './scss/cardAccess.scss'

interface IUser {
    username: string,
    password: string
}

const CardAccess = (): JSX.Element => {

    const navigate = useNavigate();

    const [user, setUser] = useState<IUser>({
        username: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        if (user.username === 'admin' && user.password === '123456') {
            Notification(type.success, "Logueado correctamente!")
            setLoading(false)
            navigate('/users')
        }
        else {
            Notification(type.danger, "Usuario o contraseña incorrecto!")
            setLoading(false)
        }
        console.log(user)
    }

    const { username, password }: IUser = user;

    return (
        <div className="containerAccess">
            <div className='logo'>
                <img src="https://www.banexcoin.com/local/logos/logo-banexcoin-white-middleorange.svg" alt="logBanex" />
            </div>
            <div className="contAccess">
                <div className="titleAccess">
                    <div>Iniciar sesión como:</div>
                    <div>Administrador</div>
                </div>
                <div className="infoAccess">
                    <div className="infTit">Para ingresar a la plataforma debe poner sus credenciales de acceso.</div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="formBody" >
                        <label htmlFor="accessUser">
                            <input
                                id="accessUser"
                                type="string"
                                name='username'
                                placeholder="Ingrese su usuario"
                                value={username}
                                onChange={onChange}
                                disabled={loading}
                                required />
                        </label>
                        <label htmlFor="accessPass">
                            <input
                                id="accessPass"
                                className="inpPass"
                                type={`${showPassword ? 'text' : 'password'}`}
                                placeholder="Contraseña"
                                name='password'
                                value={password}
                                onChange={onChange}
                                disabled={loading}
                                required
                            />
                            <i className={`far fa-eye${showPassword ? '-slash' : ''} ${loading ? 'disabled' : ''} `} onClick={() => setShowPassword(!showPassword)} />
                        </label>
                    </div>
                    <div className="formFooter">
                        <button type='submit' disabled={loading}>
                            {
                                loading ? 'CARGANDO...' : 'INICIAR SESIÓN'
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CardAccess

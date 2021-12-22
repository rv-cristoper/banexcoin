import React from 'react'
import { JsxElement } from 'typescript'
import { IUser } from './Types/user'

interface Props {
    user: IUser
}

const InfoUser = ({ user }: Props): JSX.Element => {
    const { username, password, created, updated, countryCode } = user
    return (
        <form >
            <div>
                <label>
                    <p>Usuario:</p>
                    <input name="username" type="text" value={username} disabled />
                </label>
                <label>
                    <p>Contraseña:</p>
                    <input name="password" type="text" value={password} disabled />
                </label>
                <label>
                    <p>Fecha de Creación:</p>
                    <input name="created" type="text" value={created} disabled />
                </label>
                <label>
                    <p>Fecha de Actualización</p>
                    <input name="updated" type="text" value={updated} disabled />
                </label>
                <label>
                    <p>Código Postal</p>
                    <input name="countryCode" type="text" value={countryCode} disabled />
                </label>
            </div>
            <div />
        </form>
    )
}

export default InfoUser

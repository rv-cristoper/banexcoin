import React, { ChangeEvent, FormEvent, useState } from 'react'

import { IUser } from './Types/user'

interface Props {
    setAddUserModal: React.Dispatch<React.SetStateAction<boolean>>,
    addUSer: (data: IUser) => void
}

const AddUser = ({ setAddUserModal, addUSer }: Props): JSX.Element => {

    const [data, setData] = useState<IUser>({
        id: '',
        created: '',
        updated: '',
        status: 1,
        username: '',
        password: '',
        countryCode: '',
        phone: '',
        fname: '',
        lname: '',
        address: '',
        birthdate: ''
    })

    const getDate = (): string => {
        const date = new Date()
        const fecha = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        const hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return fecha + ' ' + hora;
    }

    const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    };

    const handleSubmitAdd = (e: FormEvent) => {
        e.preventDefault()
        const newData = {
            ...data,
            id: Math.random().toString(36).substr(2, 9),
            created: getDate()
        }
        addUSer(newData)
    }

    const { username, password, countryCode, phone, fname, lname, address, birthdate } = data

    return (
        <form onSubmit={handleSubmitAdd}>
            <div>
                <label>
                    <p>Nombre:</p>
                    <input name="fname" type="text" value={fname} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Apellido:</p>
                    <input name="lname" type="text" value={lname} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Teléfono:</p>
                    <input name="phone" type="text" value={phone} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Código postal:</p>
                    <input name="countryCode" type="text" value={countryCode} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Fecha de nacimiento:</p>
                    <input name="birthdate" type="date" value={birthdate} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Dirección:</p>
                    <input name="address" type="text" value={address} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Usuario:</p>
                    <input name="username" type="text" value={username} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Contraseña:</p>
                    <input name="password" type="password" value={password} onChange={onChangeInputs} required autoComplete="off" />
                </label>
            </div>
            <div>
                <button type="button" onClick={() => setAddUserModal(false)}> Cancelar </button>
                <button type="submit"> Agregar </button>
            </div>
        </form>
    )
}

export default AddUser

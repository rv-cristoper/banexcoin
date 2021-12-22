import React, { useState } from 'react'
import AddUser from '../components/modal/AddUser'
import { IUser } from '../components/modal/Types/user'
import UserItem from '../components/userItem/UserItem'
import ContainerModal from '../shared/modal/ContainerModal'
import Notification, { type } from '../shared/toast/Toast'
import './scss/userPage.scss'

const UserPage = (): JSX.Element => {

    const [addUserModl, setAddUserModal] = useState<boolean>(false)

    const [listUser, setListUser] = useState<IUser[]>([{
        id: 'weyq47c5e',
        created: '22-12-2021 4:30:8',
        updated: '',
        status: 0,
        username: 'cristoper.runco',
        password: '123456',
        countryCode: '01',
        phone: '123456789',
        fname: 'Cristoper Jhanfranco',
        lname: 'Runco Contreras',
        address: 'Lima, Lima - San Juan de Lurigancho',
        birthdate: '01-12'
    }])

    const addUSer = (data: IUser): void => {
        console.log(data)
        const cloneListUser = listUser
        cloneListUser.push(data)
        setListUser(cloneListUser)
        setAddUserModal(false)
        Notification(type.success, "Cliente agregado correctamente!")
    }


    return (
        <div className='userPage'>
            <h1>Lista de Usuarios</h1>
            <button onClick={() => setAddUserModal(true)}>Agregar +</button>
            <div className='containerUsers'>
                {
                    listUser.map((user: IUser, key: number) =>
                        <UserItem user={user} key={key} />
                    )
                }
            </div>
            <ContainerModal showModal={addUserModl} setShowModal={setAddUserModal} title="Agregar Usuario">
                <AddUser setAddUserModal={setAddUserModal} addUSer={addUSer} />
            </ContainerModal>
        </div>
    )
}

export default UserPage

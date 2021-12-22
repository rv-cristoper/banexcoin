import React, { useState } from 'react'
import ContainerModal from '../../shared/modal/ContainerModal'
import InfoUser from '../modal/InfoUser'
import { IUser } from '../modal/Types/user'
import './scss/userItem.scss'

interface Props {
    user: IUser
}

const UserItem = ({ user }: Props): JSX.Element => {

    const [moreInf, setMoreInf] = useState<boolean>(false)

    const { id, phone, fname, lname, address, birthdate, status } = user;

    const newStatus = status === 0 ? 'Inactivo' : 'Activo'

    return (
        <div className='userItem'>
            <span className={`${newStatus}`}>{newStatus}</span>
            <div>
                Id: <span>{id}</span>
            </div>
            <div className='sepinf'>
                <div>
                    Nombre: <span>{fname}</span>
                </div>
                <div>
                    Apellido: <span>{lname}</span>
                </div>
            </div>
            <div className='sepinf'>
                <div>
                    Teléfono: <span>{phone}</span>
                </div>
                <div>
                    Dirección: <span>{address}</span>
                </div>
            </div>
            <div>
                Cumpleaños: <span>{birthdate}</span>
            </div>
            <div>
                <button onClick={() => setMoreInf(true)}>Más Información</button>
            </div>
            <ContainerModal showModal={moreInf} setShowModal={setMoreInf} title="Información del Cliente">
                <InfoUser user={user}/>
            </ContainerModal>
        </div>
    )
}

export default UserItem

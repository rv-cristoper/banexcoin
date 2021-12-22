import React from 'react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import './containerModal.sass'

type Props = {
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    title: string
}

const ContainerModal: React.FC<Props> = ({ showModal, setShowModal, title, children }) => {

    useEffect(() => {
        let bodyStyle = document.body
        showModal ? bodyStyle.style.overflowY = "hidden" : bodyStyle.removeAttribute('style')
    }, [showModal])

    if (!showModal) return null

    return createPortal(
        <div id="root-portal">
            <div className="contentModal">
                <div className="main_modal">
                    <div className="headModal">
                        <h3>{title}</h3>
                        <span onClick={() => setShowModal(false)}>x</span>
                    </div>
                    <div className="bodyModals">
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default ContainerModal

import React, { useState } from 'react'
import CardAccess from '../components/auth/CardAccess'
import CardQuestion from '../components/auth/CardQuestion'
import CardRestore from '../components/auth/CardRestore'
import './scss/loggin.scss'

const Loggin = (): JSX.Element => {

    const [viewOption, setViewLogin] = useState<string>('login')
    const [viewAnyQuestion, setViewAnyQuestion] = useState<boolean>(false)
    const [disableAnyQuestion, setDisableAnyQuestion] = useState<boolean>(true)

    const changeOption = (value: string): void => {
        setViewLogin(value)
    }

    const closeAnyQuestion = () => {
        setViewAnyQuestion(false)
        setTimeout(() => {
            setDisableAnyQuestion(true)
        }, 1200);
    }

    return (
        <div className='logginPage'>
            <section className='sectionBanner'>
                <img className='logo' src="https://res.cloudinary.com/cristoper/image/upload/v1640810666/banecoin/logo-banexcoin_rijfqg.svg" alt="logoBnx" />
                <div className='bannerImg'>
                    <img src="https://res.cloudinary.com/cristoper/image/upload/v1640802704/banecoin/undraw_bitcoin-2-_ave7_fcniwj.svg" alt="bannerBnx" />
                </div>
                <h2>Obtén criptomonedas en tu divisa local y haz crecer tus ingresos</h2>
            </section>
            <section className='sectionAcces'>
                <CardQuestion viewAnyQuestion={viewAnyQuestion} closeAnyQuestion={closeAnyQuestion} disableAnyQuestion={disableAnyQuestion} />
                <CardAccess viewLogin={viewOption === 'login' ? true : false} changeOption={changeOption} />
                <CardRestore viewRestore={viewOption === 'restore' ? true : false} changeOption={changeOption} />
            </section>
            <div className='anyquestion' onClick={() => { setViewAnyQuestion(true); setDisableAnyQuestion(false) }}>
                <img src="https://res.cloudinary.com/cristoper/image/upload/v1640835700/banecoin/unnamed_r7gmvy.jpg" alt="logBanex" />
                <i className="fas fa-question" />
            </div>
        </div>
    )
}

export default Loggin

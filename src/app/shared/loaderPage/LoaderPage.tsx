import React, { useEffect, useState } from 'react'

import './loaderPage.sass'

import ImageFile from './ImageFile'

interface Phrases {
    text: string
    autor: string
}

const LoaderPage = (): JSX.Element => {

    const [loader, setLoader] = useState<boolean>(false)

    const [text, setText] = useState<Phrases>()

    const [phrases, setPhrases] = useState<Phrases[]>([
        {
            text: 'Las Finanzas son 80% mente y 20% monedas y billetes',
            autor: '(Moris Dieck)',
        },
        {
            text: 'Ganar es no tener miedo de perder',
            autor: '(Robert Kiyosaki)',
        },
        {
            text: 'Invierte pensando hacia el futuro el cual anhelas llegar',
            autor: '(Cristoper Jhanfranco)',
        },
        {
            text: 'No importa cuán despacio vayas mientras no te detengas',
            autor: '(Confucio)',
        },
    ])

    useEffect(() => {

        let unmounted = false

        if (phrases.length) {

            let cphrases: Phrases[] = phrases
            let nphrases: Phrases[] = []

            let index = Math.floor(Math.random() * cphrases.length)
            let frace = cphrases[index]

            cphrases.splice(index, 1)
            cphrases.map((data: Phrases) =>
                nphrases.push(data)
            );

            if (loader) {
                setTimeout(() => {
                    if (!unmounted) {
                        setText(frace)
                        setPhrases(nphrases)
                    }
                }, 7000)
            } else {
                if (!unmounted) {
                    setText(frace)
                    setPhrases(nphrases)
                    setLoader(true)
                }
            }
        }

        return function () {
            unmounted = true;
        }

    }, [loader, phrases])

    return (
        <>
            {
                loader &&
                <div className="main_LoaderPage" >
                    <div className="containerImgMoment">
                        <ImageFile />
                        <img src="https://res.cloudinary.com/cristoper/image/upload/v1640849466/banecoin/undraw_fast_loading_re_8oi3_litavo.svg" alt="imgLoadingMovile" width='250px'/>
                        <div className="containerText">
                            <p className={`text ${phrases.length ? 'animate' : ''}`}>{text?.text} <b>{text?.autor}</b>.
                            </p>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default LoaderPage

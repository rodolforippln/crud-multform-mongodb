import { useRouter } from 'next/router'
import * as C from './styles'

import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'
import { Theme } from '../../components/Theme'
import Foto from '../../svgs/mail.svg'


const FormStep1 = () => {
    const router = useRouter()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            router.push('/FormStep2')
        } else {
            alert('Preencha os dados')
        }
        
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    return (

        <Theme>


            <C.Container>


               

                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr/>

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>

            </Theme>



    )
}

export default FormStep1


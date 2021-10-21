import { useRouter } from 'next/router'
import * as C from './styles'

import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'
import Link from 'next/link'
import { Theme } from '../../components/Theme'
import api from '../../services/api'

const FormStep3 = () => {
    const router = useRouter()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name === '') {
            router.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);


    const handleNextStep = () => {
        if (state.name !== '') {
            router.push('/step2')
        } else {
            alert('Preencha os dados')
        }
        
    }

    const handleSubmidCadastro =async () => {
        if(state.email !== '' && state.github !== '') {

            const name = state.name
            const email = state.email
            const level = state.level
            const github = state.github
    
            try {
                const response = await api.post('/dados', {name, email, level, github})
                router.push('/finalizar')
                
                
            } catch(err){
                console.log(err)
            }

        } else {
            alert("Preencha os dados");
        }

    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return (

            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr/>
                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}

                    />
                </label>

                <label>
                    Qual seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}

                    />
                </label>

                <Link href="/step2" >
                    <a>Voltar</a>
                </Link>

                <button onClick={handleSubmidCadastro}>Próximo</button>
            </C.Container>


    )
}

export default FormStep3


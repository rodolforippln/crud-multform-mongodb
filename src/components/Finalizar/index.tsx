import { useRouter } from 'next/router'
import * as C from './styles'
import { ChangeEvent, useEffect } from 'react'

import { useForm, FormActions } from '../../contexts/FormContext'
import { CadastroSucesso } from '../../components/CadastroSucesso'


const Finalizar = () => {
    const router = useRouter()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name === '') {
            router.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    return (

        

            <C.Container>
                <p>Final</p>
                <h1>Cadastro Realizado com sucesso</h1>
                

                <hr/>

                <h3>Nome: <span>{state.name}</span></h3>
                <h3>E-mail: <span>{state.email}</span></h3>
                <h3>Nível: <span>{state.level==0 ? 'Básico' : 'Avançado'}</span></h3>
                <h3>Github: <span>{state.github}</span></h3>


            </C.Container>



    )
}

export default Finalizar


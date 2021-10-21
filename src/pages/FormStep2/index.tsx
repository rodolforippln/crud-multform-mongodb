import { useRouter } from 'next/router'
import * as C from './styles'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption';
import Link from 'next/link'

const FormStep2 = () => {
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

    const handleNextStep = () => {
        if (state.name !== '') {
            router.push('/FormStep3')
        } else {
            alert('Preencha os dados')
        }
        
    }


    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }



    return (

        <Theme>

            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr/>

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}

                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}

                />
                <Link href="/" >
                    <a>Voltar</a>
                </Link>


                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>

           </Theme> 


    )
}

export default FormStep2


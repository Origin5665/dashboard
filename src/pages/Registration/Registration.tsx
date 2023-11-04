import { Button, Input } from '@components/shared'
import { yupResolver } from '@hookform/resolvers/yup'
import { waiting } from '@utils/utils.ts'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import styles from './registration.module.css'

type RegistrationForm = {
  email: string
  password: string;
}

export const Registration = () => {
    const navigate = useNavigate()

    const [buttonProcessing, setButtonProcessing] = useState<boolean>(false)
    const registrationSchema = yup.object().shape({
        email: yup.string().required('Обязательное поле'),
        password: yup.string().required('Обязательное поле')
    })

    const { register, formState: { errors }, handleSubmit } = useForm<RegistrationForm>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver<RegistrationForm>(registrationSchema)
    })


    const onSubmit = async (data: RegistrationForm) => {
        const delay = 1000

        try {
            setButtonProcessing(true)
            await waiting(delay, data)

            navigate('/app')
        } catch (e) {
            console.error(e)
        } finally {
            setButtonProcessing(false)
        }
    }

    return (
        <div className={styles.registration}>
            <h1 className={styles.title}>Dashboard</h1>
            <form className={styles.form}>
                <Input
                    register={register} error={errors.email} name="email" placeholder="Ваш Email" type="email"
                    label="Email"
                />
                <Input
                    register={register} error={errors.password} name="password" placeholder="Ваш gароль" type="password"
                    label="Пароль"
                />
                <Button processing={buttonProcessing} onClick={() => handleSubmit(onSubmit)()}>Войти</Button>
            </form>
        </div>

    )
}

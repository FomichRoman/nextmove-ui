import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFields } from './auth-form.interface'
import s from './authform.module.scss'
import st from '../icons-right/iconsright.module.scss'
import { FaUserCircle } from 'react-icons/fa'
import { Field } from '@/ui/field/Field'
import { Button } from '@/ui/button/Button'
import { emailValidate } from './auth.valid'
import { useActions } from '@/hooks/useActions'


export const AuthForm = () => {
  const { ref, isShow, setIsShow } = useOutside(false)
  const [type, setType] = useState<'login' | 'register'>('login')

  const { login, register: registerAction } = useActions()

  const { isLoading } = useAuth()

  const { register, formState: { errors }, handleSubmit } = useForm<IAuthFields>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IAuthFields> = data => {
    if (type === 'login') login(data)
      else if (type === 'register') registerAction(data)
  }


  return (
    <div className={s.wrapper} ref={ref}>
      <button className={st.btn} onClick={() => setIsShow(!isShow)}>
        <FaUserCircle fill='#a4a4a4' />
      </button>

      {isShow && (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Field
            {...register('email', {
              required: 'E-mail обязателен!',
              pattern: {
                value: emailValidate,
                message: 'Не валидный E-mail'
              }
            })}
            placeholder={'E-mail'}
            error={errors.email}
          />
            <Field
            {...register('password', {
              required: 'Пароль обязателен!',
              minLength: {
                value: 6,
                message: 'Мин. длинна пароля - 6 символов'
              }
            })}
            placeholder={'Пароль'}
            error={errors.password}
            type='password'
          />

          <div className={'mt-5 mb-1 text-center'}>
            <Button onClick={() => setType('login')} disabled={isLoading}>
              Войти
            </Button>
          </div>
          <button className={s.register} onClick={() => setType('register')} disabled={isLoading}>
            Регистрация
          </button>
        </form>
      )}
    </div>
  )
}
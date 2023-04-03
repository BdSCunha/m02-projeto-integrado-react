import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Button, { BUTTON_VARIANT } from '../../components/Button'

const SignUpPageMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    background: ${({ theme }) => theme.gray};
`

const SignUpPageForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:80%;
    align-items: center;
    padding: ${({ theme }) => theme.spacing6} ${({ theme }) => theme.spacing8};
    gap: ${({ theme }) => theme.spacing5};
    background: ${({ theme }) => theme.white};
    box-shadow: 0px ${({ theme }) => theme.spacing2} ${({ theme }) => theme.spacing2} rgba(0, 0, 0, 0.25);
    border-radius: ${({ theme }) => theme.borderRadius1};
`

const SignUpPageTitle = styled.h2`
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontBold};
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.primary};
`

const SignUpPageInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    padding: 0px;
    gap: ${({ theme }) => theme.spacing5};
    width: 100%;
`

const SignUpPageInputsLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: ${({ theme }) => theme.spacing4};
    width: 100%;

    @media (max-width: 938px) {
        flex-direction: column;
    }
`

const SignUpPageInputsColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 50%;

    @media (max-width: 938px) {
        width: 100%;
    }
`

const SignUpPageInputsLabel = styled.label`
    height: 18px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontBold};
    font-size: 12px;
    line-height: 150%;
    color: ${({ theme }) => theme.primary};
`

const SignUpPageInputsInput = styled.input`
    box-sizing: border-box;
    background: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.darkGray};
    border-radius: ${({ theme }) => theme.borderRadius1};
    width: 100%;
    height: 32px;
    padding: 8px;
`

const SignUpPageInputsSpan = styled.span`
    font-style: italic;
    color: ${({ theme }) => theme.secondary};
    font-size: 10px;
`

function SignUpPage() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const handleNavigateDetails = () => {
    navigate('/login')
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:8081/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setIsLoading(false)
        navigate('/login')
      } else {
        // Handle error
        setIsLoading(false)
        console.error('Error:', response.statusText)
      }
    } catch (error) {
      // Handle error
      setIsLoading(false)
      console.error('Error:', error)
    }
  }

  const handlePaste = (event) => {
    if (event.target.name === 'confirmPassword') {
      event.preventDefault()
    }
  }

  return (
    <SignUpPageMain>
        <SignUpPageForm onSubmit={handleSubmit(onSubmit)} onPaste={handlePaste}>
            <SignUpPageTitle>Cadastrar</SignUpPageTitle>
            <SignUpPageInputs>
                <SignUpPageInputsLine>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='fullName'>Nome completo *</SignUpPageInputsLabel>
                        <SignUpPageInputsInput {...register('fullName', { required: true })} />
                        {errors.fullName && <SignUpPageInputsSpan>* Campo obrigatório</SignUpPageInputsSpan>}
                    </SignUpPageInputsColumn>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='email'>E-mail *</SignUpPageInputsLabel>
                        <SignUpPageInputsInput type='email' {...register('email', { required: true })} />
                        {errors.email && <SignUpPageInputsSpan>* Campo obrigatório</SignUpPageInputsSpan>}
                    </SignUpPageInputsColumn>
                </SignUpPageInputsLine>
                <SignUpPageInputsLine>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='profilePictureUrl'>URL da foto do perfil</SignUpPageInputsLabel>
                        <SignUpPageInputsInput {...register('profilePictureUrl')} />
                    </SignUpPageInputsColumn>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='cellphoneNumber'>Telefone</SignUpPageInputsLabel>
                        <SignUpPageInputsInput {...register('cellphoneNumber')} autoComplete='cellphone-number' />
                    </SignUpPageInputsColumn>
                </SignUpPageInputsLine>
                <SignUpPageInputsLine>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='password'>Senha *</SignUpPageInputsLabel>
                        <SignUpPageInputsInput
                          type="password"
                          {...register('password', { required: true })}
                          autoComplete='password'
                        />
                        {errors.password && <SignUpPageInputsSpan>* Campo obrigatório</SignUpPageInputsSpan>}
                    </SignUpPageInputsColumn>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='confirmPassword'>Confirmação da senha *</SignUpPageInputsLabel>
                        <SignUpPageInputsInput
                          type="password"
                          {...register('confirmPassword', { required: true })}
                          autoComplete='new-password'
                          onDragStart={(e) => e.preventDefault()}
                          onDrop={(e) => e.preventDefault()}
                        />
                        {errors.confirmPassword && <SignUpPageInputsSpan>* Campo obrigatório</SignUpPageInputsSpan>}
                    </SignUpPageInputsColumn>
                </SignUpPageInputsLine>
                <SignUpPageInputsLine>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='zipCode'>CEP *</SignUpPageInputsLabel>
                        <SignUpPageInputsInput
                          type="number"
                          {...register('zipCode', { required: true })}
                        />
                        {errors.zipCode && <SignUpPageInputsSpan>* Campo obrigatório</SignUpPageInputsSpan>}
                    </SignUpPageInputsColumn>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='street'>Logradouro/Endereço *</SignUpPageInputsLabel>
                        <SignUpPageInputsInput {...register('street', { required: true })} />
                        {errors.street && <SignUpPageInputsSpan>* Campo obrigatório</SignUpPageInputsSpan>}
                    </SignUpPageInputsColumn>
                </SignUpPageInputsLine>
                <SignUpPageInputsLine>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='city'>Cidade *</SignUpPageInputsLabel>
                        <SignUpPageInputsInput {...register('city', { required: true })} />
                        {errors.city && <SignUpPageInputsSpan>* Campo obrigatório</SignUpPageInputsSpan>}
                    </SignUpPageInputsColumn>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='complement'>Complemento</SignUpPageInputsLabel>
                        <SignUpPageInputsInput {...register('complement')} />
                    </SignUpPageInputsColumn>
                </SignUpPageInputsLine>
                <SignUpPageInputsLine>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='houseNumber'>Número *</SignUpPageInputsLabel>
                        <SignUpPageInputsInput {...register('houseNumber', { required: true })} />
                        {errors.houseNumber && <SignUpPageInputsSpan>* Campo obrigatório</SignUpPageInputsSpan>}
                    </SignUpPageInputsColumn>
                    <SignUpPageInputsColumn>
                        <SignUpPageInputsLabel htmlFor='neighborhood'>Bairro *</SignUpPageInputsLabel>
                        <SignUpPageInputsInput {...register('neighborhood')} />
                        {errors.neighborhood && <SignUpPageInputsSpan>* Campo obrigatório</SignUpPageInputsSpan>}
                    </SignUpPageInputsColumn>
                </SignUpPageInputsLine>
                <Button>
                    {isLoading ? 'Submitting...' : 'Cadastrar'}
                </Button>
                <Button type="submit" variant={BUTTON_VARIANT.PRIMARY_LINK} onClick={handleNavigateDetails}>Login</Button>
            </SignUpPageInputs>
        </SignUpPageForm>
    </SignUpPageMain>
  )
}

export default SignUpPage

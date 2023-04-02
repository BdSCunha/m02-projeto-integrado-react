import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button'
import { useSetUserInfo } from '../../hooks/useUserInfo'
import { apiService } from '../../services/api'
import styled from 'styled-components'

const LoginPageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing6};
`

const LoginCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing6} ${({ theme }) => theme.spacing8};
  gap: ${({ theme }) => theme.spacing6};
  width: 454px;
  max-width: 100%;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 ${({ theme }) => theme.spacing2} ${({ theme }) => theme.spacing2} rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.borderRadius1};
`

const LoginCenterBoxH2Title = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontBold};
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.primary};
`

const LoginCenterBoxDivLoginForm = styled.div`
  align-self: normal;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const LoginCenterBoxPErrorMessage = styled.p`
  color: ${({ theme }) => theme.secondary};
`
const LoginCenterBoxASigninButton = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontBold};
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  text-transform: capitalize;
  color: ${({ theme }) => theme.primary};
`

const LoginForm = styled.form`
  width: 100%;
`

function LoginPage() {
  const navigate = useNavigate()
  const setUserInfo = useSetUserInfo()

  const [email, setEmail] = useState('')
  const [showEmailHelper, setShowEmailHelper] = useState(false)

  const [password, setPassword] = useState('')
  const [showPasswordHelper, setShowPasswordHelper] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value
    setEmail(newEmail)
  }

  const handleChangePassword = (event) => {
    const newPassword = event.target.value
    setPassword(newPassword)
  }

  const handleLoginAction = async () => {
    setError(null)
    setShowEmailHelper(!email)
    setShowPasswordHelper(!password)
    if (!email || !password) {
      return
    }
    setLoading(true)
    const response = await apiService.get(
      `/users?email=${email}&password=${password}`
    )
    if (response?.data?.length) {
      const { name, isAdmin } = response.data[0]
      setUserInfo({
        name,
        isAdmin
      })
      navigate('/')
    } else {
      setUserInfo()
      setError('Credenciais inválidas!')
    }
    setLoading(false)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault() // Prevent the form from submitting
    handleLoginAction()
  }

  return (
    <LoginPageContainer>
      <LoginCenterBox>
        <LoginCenterBoxH2Title>Acessar</LoginCenterBoxH2Title>

        <LoginForm onSubmit={handleFormSubmit}> {/* Avoid the warning `[DOM] Password field is not contained in a form */}
          <LoginCenterBoxDivLoginForm>
            {/* `autoComplete="username"` avoids the warning `[DOM] Input elements should have autocomplete attributes (suggested: "username") */}
            <InputGroup
              type="text"
              placeholder="Seu e-mail"
              labelText="E-mail"
              value={email}
              onChange={handleChangeEmail}
              helperText={showEmailHelper ? 'Campo obrigatório' : ''}
              autoComplete="username"
            />

            {/* `autoComplete="current-password"` avoids the warning `[DOM] Input elements should have autocomplete attributes (suggested: "current-password") */}
            <InputGroup
              type="password"
              placeholder="Sua senha"
              labelText="Senha"
              value={password}
              onChange={handleChangePassword}
              helperText={showPasswordHelper ? 'Campo obrigatório' : ''}
              autoComplete="current-password"
            />
          </LoginCenterBoxDivLoginForm>
        </LoginForm>

        {error && <LoginCenterBoxPErrorMessage>{error}</LoginCenterBoxPErrorMessage>}

        <Button onClick={handleLoginAction} disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Button>

        <LoginCenterBoxASigninButton to="/signin">
          Cadastrar
        </LoginCenterBoxASigninButton>
      </LoginCenterBox>
    </LoginPageContainer>
  )
}

export default LoginPage

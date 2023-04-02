import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button, { BUTTON_VARIANT } from '../Button'
import { useUserInfo, useSetUserInfo } from '../../hooks/useUserInfo'

const NavbarContainer = styled.header`
  height: 98px;
  padding: 0 ${({ theme }) => theme.spacing7};
  background-color: ${({ theme }) => theme.lightGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavbarLogoBox = styled(Link)`
  display: flex;
  gap: ${({ theme }) => theme.spacing4};
  text-decoration: none;
`

const NavbarLogoText = styled.h1`
  font-size: 36px;
  line-height: 44px;
  color: ${({ theme }) => theme.primary};
`

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const setUserInfo = useSetUserInfo()
  const userInfo = useUserInfo()
  const isLoggedIn = userInfo?.name

  const handleNavigateLogin = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    setUserInfo()
    handleNavigateLogin()
  }

  return (
    <NavbarContainer>
      <NavbarLogoBox to="/">
        <img src="/logo.png" alt="Logo" />
        <NavbarLogoText>DEVinCursos</NavbarLogoText>
      </NavbarLogoBox>
      {location.pathname !== '/login' && (
        <Button
          variant={BUTTON_VARIANT.PRIMARY_OUTLINED}
          onClick={isLoggedIn ? handleLogout : handleNavigateLogin}
        >
          {isLoggedIn ? 'Sair' : 'Entrar'}
        </Button>
      )}
    </NavbarContainer>
  )
}

export default Navbar

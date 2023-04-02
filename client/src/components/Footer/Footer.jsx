import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.spacing7};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.darkGray};
`

function Footer() {
  return (
    <StyledFooter>
      <p>DEVinCursos | {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}

export default Footer

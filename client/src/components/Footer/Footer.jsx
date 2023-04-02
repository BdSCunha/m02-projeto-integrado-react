import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: var(--spacing-7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-gray);
`

function Footer() {
  return (
    <StyledFooter>
      <p>DEVinCursos | {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}

export default Footer

import svg404 from '../../assets/404.svg'

import styled from 'styled-components'

const NotFoundPageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-6);
`

const NotFoundPageContainerImg = styled.img`
  max-width: 100%;
`

const NotFoundPageContainerH2 = styled.h2`
  font-family: "Inter";
  font-style: var(--font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: var(--primary);
  text-align: center;
`

function NotFoundPage() {
  return (
    <NotFoundPageContainer>
      <NotFoundPageContainerImg src={svg404} alt="404" />
      <NotFoundPageContainerH2>Página não encontrada</NotFoundPageContainerH2>
    </NotFoundPageContainer>
  )
}

export default NotFoundPage

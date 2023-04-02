import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing6} ${({ theme }) => theme.spacing8};
  width: 100%;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 ${({ theme }) => theme.spacing2} ${({ theme }) => theme.spacing2} rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.borderRadius1};
`

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>
}

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card

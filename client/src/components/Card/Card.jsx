import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  padding: var(--spacing-6) var(--spacing-8);
  width: 100%;
  background: var(--white);
  box-shadow: 0 var(--spacing-2) var(--spacing-2) rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-1);
`

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>
}

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card

import PropTypes from 'prop-types'
import styled from 'styled-components'

const PageWrapperContainer = styled.main`
  padding: var(--spacing-9) var(--spacing-10);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function PageWrapper({ children }) {
  return <PageWrapperContainer>{children}</PageWrapperContainer>
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageWrapper

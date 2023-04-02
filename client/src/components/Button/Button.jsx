import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { BUTTON_VARIANT } from './ButtonVariant'

// Define the styled Button component
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: var(--font-bold);
  padding: var(--spacing-3) var(--spacing-5);
  border-radius: var(--border-radius-2);
  transition: 0.3s;

  &:disabled {
    cursor: progress;
    opacity: 0.5;
  }

  ${({ variant }) => {
    const variantStyles = {
      [BUTTON_VARIANT.PRIMARY]: css`
        border: 1px solid var(--primary);
        color: var(--white);
        background-color: var(--primary);

        &:hover:not(:disabled) {
          background-color: var(--primary-outlined);
        }
      `,
      [BUTTON_VARIANT.SECONDARY]: css`
        border: 1px solid var(--secondary);
        color: var(--white);
        background-color: var(--secondary);

        &:hover:not(:disabled) {
          background-color: var(--secondary-outlined);
        }
      `,
      [BUTTON_VARIANT.PRIMARY_OUTLINED]: css`
        border: 1px solid var(--primary);
        color: var(--primary);
        background-color: transparent;

        &:hover:not(:disabled) {
          background-color: var(--primary-outlined);
        }
      `,
      [BUTTON_VARIANT.SECONDARY_OUTLINED]: css`
        border: 1px solid var(--secondary);
        color: var(--secondary);
        background-color: transparent;

        &:hover:not(:disabled) {
          background-color: var(--secondary-outlined);
        }
      `,
      [BUTTON_VARIANT.PRIMARY_LINK]: css`
        border: none;
        color: var(--primary);
        background-color: transparent;
        text-decoration: underline;
        text-transform: none;
        border: 1px solid transparent;

        &:hover:not(:disabled) {
          border: 1px solid var(--primary);
          background-color: var(--primary-outlined);
        }
      `,
      [BUTTON_VARIANT.SECONDARY_LINK]: css`
        border: none;
        color: var(--secondary);
        background-color: transparent;
        text-decoration: underline;
        text-transform: none;
        border: 1px solid transparent;

        &:hover:not(:disabled) {
          border: 1px solid var(--secondary);
          background-color: var(--secondary-outlined);
        }
      `
    }

    return variantStyles[variant] || variantStyles[BUTTON_VARIANT.PRIMARY]
  }}

  ${({ isIconButton }) =>
    isIconButton &&
    css`
      border-radius: var(--border-radius-3);
      padding: var(--spacing-3);
    `}
`

function Button({ children, variant = BUTTON_VARIANT.PRIMARY, isIconButton = false, ...props }) {
  return (
    <StyledButton variant={variant} isIconButton={isIconButton} {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    BUTTON_VARIANT.PRIMARY,
    BUTTON_VARIANT.PRIMARY_LINK,
    BUTTON_VARIANT.PRIMARY_OUTLINED,
    BUTTON_VARIANT.SECONDARY,
    BUTTON_VARIANT.SECONDARY_LINK,
    BUTTON_VARIANT.SECONDARY_OUTLINED
  ]),
  isIconButton: PropTypes.bool
}

export default Button

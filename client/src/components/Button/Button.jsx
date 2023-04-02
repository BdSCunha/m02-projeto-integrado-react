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
  font-weight: ${({ theme }) => theme.fontBold};
  padding: ${({ theme }) => theme.spacing3} ${({ theme }) => theme.spacing5};
  border-radius: ${({ theme }) => theme.borderRadius2};
  transition: 0.3s;

  &:disabled {
    cursor: progress;
    opacity: 0.5;
  }

  ${({ variant, theme }) => {
    const variantStyles = {
      [BUTTON_VARIANT.PRIMARY]: css`
        border: 1px solid ${theme.primary};
        color: ${theme.white};
        background-color: ${theme.primary};

        &:hover:not(:disabled) {
          background-color: ${theme.primaryOutlined};
        }
      `,
      [BUTTON_VARIANT.SECONDARY]: css`
        border: 1px solid ${theme.secondary};
        color: ${theme.white};
        background-color: ${theme.secondary};

        &:hover:not(:disabled) {
          background-color: ${theme.secondaryOutlined};
        }
      `,
      [BUTTON_VARIANT.PRIMARY_OUTLINED]: css`
        border: 1px solid ${theme.primary};
        color: ${theme.primary};
        background-color: transparent;

        &:hover:not(:disabled) {
          background-color: ${theme.primaryOutlined};
        }
      `,
      [BUTTON_VARIANT.SECONDARY_OUTLINED]: css`
        border: 1px solid ${theme.secondary};
        color: ${theme.secondary};
        background-color: transparent;

        &:hover:not(:disabled) {
          background-color: ${theme.secondaryOutlined};
        }
      `,
      [BUTTON_VARIANT.PRIMARY_LINK]: css`
        border: none;
        color: ${theme.primary};
        background-color: transparent;
        text-decoration: underline;
        text-transform: none;
        border: 1px solid transparent;

        &:hover:not(:disabled) {
          border: 1px solid ${theme.primary};
          background-color: ${theme.primaryOutlined};
        }
      `,
      [BUTTON_VARIANT.SECONDARY_LINK]: css`
        border: none;
        color: ${theme.secondary};
        background-color: transparent;
        text-decoration: underline;
        text-transform: none;
        border: 1px solid transparent;

        &:hover:not(:disabled) {
          border: 1px solid ${theme.secondary};
          background-color: ${theme.secondaryOutlined};
        }
      `
    }

    return variantStyles[variant] || variantStyles[BUTTON_VARIANT.PRIMARY]
  }}

  ${({ isIconButton, theme }) =>
    isIconButton &&
    css`
      border-radius: ${theme.borderRadius3};
      padding: ${theme.spacing3};
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

import { forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing2};
  flex: 1;
`

const Label = styled.label`
  color: ${({ theme }) => theme.primary};
  font-weight: ${({ theme }) => theme.fontBold};
  font-size: 12px;
`

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.darkGray};
  background-color: ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.borderRadius1};
  padding: ${({ theme }) => theme.spacing3};
  color: ${({ theme }) => theme.darkGray};

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.primary};
    outline-color: ${({ theme }) => theme.primary};
    outline-width: thin;
    outline-style: solid;
  }

  &::placeholder {
    font-weight: ${({ theme }) => theme.fontRegular};
    font-size: 12px;
    color: ${({ theme }) => theme.secondary};
  }
`

const Error = styled.span`
  color: ${({ theme }) => theme.secondary};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontBold};
  font-style: italic;
`

const InputGroup = forwardRef(({ id, labelText, helperText, ...props }, ref) => {
  const refId = useMemo(() => id ?? labelText, [id, labelText])

  return (
    <Container>
      {labelText && (
        <Label htmlFor={refId}>
          {labelText}
        </Label>
      )}

      <Input id={refId} ref={ref} {...props} />

      {!!helperText && <Error>{helperText}</Error>}
    </Container>
  )
})

InputGroup.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  helperText: PropTypes.string
}

InputGroup.displayName = 'InputGroup'

export default InputGroup

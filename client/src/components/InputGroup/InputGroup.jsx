import { forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  flex: 1;
`

const Label = styled.label`
  color: var(--primary);
  font-weight: var(--font-bold);
  font-size: 12px;
`

const Input = styled.input`
  border: 1px solid var(--dark-gray);
  background-color: var(--white);
  border-radius: var(--border-radius-1);
  padding: var(--spacing-3);
  color: var(--dark-gray);

  &:focus {
    border: 1px solid var(--primary);
  }

  &:focus-visible {
    border: 1px solid var(--primary);
    outline-color: var(--primary);
    outline-width: thin;
    outline-style: solid;
  }

  &::placeholder {
    font-weight: var(--font-weight-regular);
    font-size: 12px;
    color: var(--secondary);
  }
`

const Error = styled.span`
  color: var(--secondary);
  font-size: 10px;
  font-weight: var(--font-weight-bold);
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

import styled, { css } from 'styled-components'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'neutral'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
  neutral: 'purple',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  padding: 0;
  margin: 8px;
  color: white;

  background-color: ${(props) => props.theme['green-500']};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`

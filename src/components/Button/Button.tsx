import { ButtonContainer, ButtonVariant } from './Button.styles'

interface Buttonprops {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: Buttonprops) {
  return <ButtonContainer variant={variant}>Send</ButtonContainer>
}

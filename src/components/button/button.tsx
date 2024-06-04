import { StyledButton } from "./styles";

export default function Button({
  text,
  onClick,
  color,
  type,
  disabled,
}: {
  text: string;
  color?: string;
  type?: "button" | "submit" | "reset";
  size?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <StyledButton className="button" color={color} onClick={onClick} type={type} >
      {text}
    </StyledButton>
  );
}

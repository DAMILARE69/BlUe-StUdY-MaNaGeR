//@ts-check
import { BInputLabel } from "./BInputsStyles";
export function BTextField({
  focusColor,
  hasActiveState,
  event,
  Icon,
  color,
  placeholder,
  inputType
}) {
  return (
    <BInputLabel
      className={hasActiveState && "hasActiveState"}
      focusColor={focusColor}
    >
      {Icon && (
        <div className={`AuthenticationFormIconContainer`}>
          <Icon.name size={Icon.size} color={Icon.color} weight={Icon.type} />
        </div>
      )}
      <div className={`AuthenticationFormInputContainer`}>
        <input
          onInput={event}
          color={color}
          placeholder={placeholder}
          type={inputType}
          autoComplete="off"
        />
      </div>
    </BInputLabel>
  );
}

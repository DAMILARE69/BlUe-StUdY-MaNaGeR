// //@ts-check
// // @ts-ignore
// import { PropTypes } from "prop-types";
// import { BButtonComponent } from "./BButtonStyles";

// export function BButton({
//   width,
//   height,
//   curved,
//   content,
//   background,
//   color,
//   event,
//   outlined,
//   Icon,
//   edge,
//   isDisabled
// }) {
//   return (
//     <BButtonComponent
//       edge={edge}
//       Icon={Icon}
//       width={width}
//       height={height}
//       curved={curved}
//       content={content}
//       outlined={outlined}
//       onClick={event}
//       background={background}
//       color={color}
//       disabled={isDisabled}
//     >
//       {Icon && (
//         <div className={`AuthenticationFormIconContainer`}>
//           <Icon.name size={Icon.size} color={Icon.color} weight={Icon.type} />
//         </div>
//       )}
//       {content}
//     </BButtonComponent>
//   );
// }
// BButton.propTypes = {
//   content: PropTypes.any.isRequired,
//   background: PropTypes.string,
//   edge: PropTypes.string,
//   color: PropTypes.string,
//   width: PropTypes.string,
//   height: PropTypes.string,
//   event: PropTypes.func.isRequired,
//   outlined: PropTypes.bool,
//   isDisabled: PropTypes.bool,
//   curved: PropTypes.bool
// };

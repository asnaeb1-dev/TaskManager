import React from "react";
import { APP_DESIGN_COLORS } from "../../../data/Utils/Strings";
const SWITCH_WIDTH_PX = 45;
const HANDLE_DIAMETER_PX = 21;
const SWITCH_OFFSET_PX = 2;
const Switch = ({
 containerCheckedColor = APP_DESIGN_COLORS.MAIN_COLOR,
 containerUncheckedColor = "white",
 handleCheckedColor = "white",
 handleUncheckedColor = APP_DESIGN_COLORS.MAIN_COLOR,
 value,
 onClick,
}) => {
 return (
   <div
     style={{
       width: SWITCH_WIDTH_PX,
       height: HANDLE_DIAMETER_PX + 2.5 * SWITCH_OFFSET_PX,
       borderRadius: HANDLE_DIAMETER_PX,
       border: "1px #ddd solid",
       position: "relative",
       transition: "1s",
       cursor: "pointer",
       background: value ? containerCheckedColor : containerUncheckedColor,
     }}
     onClick={() => {
       onClick(!value);
     }}
   >
     <div
       style={{
         background: value ? handleCheckedColor : handleUncheckedColor,
         borderRadius: "100%",
         height: HANDLE_DIAMETER_PX,
         width: HANDLE_DIAMETER_PX,
         position: "absolute",
         top: SWITCH_OFFSET_PX,
         left: value
           ? SWITCH_WIDTH_PX - HANDLE_DIAMETER_PX - SWITCH_OFFSET_PX
           : SWITCH_OFFSET_PX,
         transition: "1s",
       }}
     ></div>
     <input
       type="checkbox"
       value={value}
       onChange={(e) => {
         onClick(e.target.value);
       }}
       style={{ display: "none" }}
     />
   </div>
 );
};
export default Switch;

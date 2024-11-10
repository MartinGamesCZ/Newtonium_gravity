import { TextConversion } from "./Text";
import { ButtonConversion } from "./Button";
import { ViewConversion } from "./View";
export { TextConversion } from "./Text";

const Conversions = {
  text: TextConversion,
  button: ButtonConversion,
  view: ViewConversion,
};

export default Conversions;

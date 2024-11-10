import { TextConversion } from "./Text";
import { ButtonConversion } from "./Button";
import { ViewConversion } from "./View";
import { InputConversion } from "./Input";
export { TextConversion } from "./Text";

const Conversions = {
  text: TextConversion,
  button: ButtonConversion,
  view: ViewConversion,
  "gravity-input": InputConversion,
};

export default Conversions;

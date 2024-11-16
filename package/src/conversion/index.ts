import { TextConversion } from "./Text";
import { ButtonConversion } from "./Button";
import { ViewConversion } from "./View";
import { InputConversion } from "./Input";
import { ImageConversion } from "./Image";
export { TextConversion } from "./Text";

const Conversions = {
  text: TextConversion,
  button: ButtonConversion,
  view: ViewConversion,
  "gravity-input": InputConversion,
  image: ImageConversion,
};

export default Conversions;

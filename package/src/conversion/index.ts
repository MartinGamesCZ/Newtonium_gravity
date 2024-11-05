import { TextConversion } from "./Text";
import { DialogConversion } from "./Dialog";
import { ButtonConversion } from "./Button";
import {
  ColumnLayoutConversion,
  GridLayoutConversion,
  RowLayoutConversion,
} from "./Layout";
import { InputConversion } from "./Input";
export { TextConversion } from "./Text";

const Conversions = {
  text: TextConversion,
  button: ButtonConversion,
};

export default Conversions;

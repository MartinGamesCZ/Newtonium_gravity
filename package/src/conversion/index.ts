import { WindowConversion } from "./Window";
import { TextConversion } from "./Text";
import { DialogConversion } from "./Dialog";
import { ButtonConversion } from "./Button";
import {
  ColumnLayoutConversion,
  GridLayoutConversion,
  RowLayoutConversion,
} from "./Layout";
import { InputConversion } from "./Input";

export { WindowConversion } from "./Window";
export { TextConversion } from "./Text";

const Conversions = {
  "gravity-window": WindowConversion,
  "gravity-text": TextConversion,
  "gravity-dialog": DialogConversion,
  "gravity-button": ButtonConversion,
  "gravity-layout-column": ColumnLayoutConversion,
  "gravity-layout-row": RowLayoutConversion,
  "gravity-layout-grid": GridLayoutConversion,
  "gravity-input": InputConversion,
};

export default Conversions;

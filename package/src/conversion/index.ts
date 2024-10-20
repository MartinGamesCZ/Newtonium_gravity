import { WindowConversion } from "./Window";
import { TextConversion } from "./Text";
import { DialogConversion } from "./Dialog";
import { ButtonConversion } from "./Button";
import {
  ColumnLayoutConversion,
  GridLayoutConversion,
  RowLayoutConversion,
} from "./Layout";

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
};

export default Conversions;

// components/MaskedViewWrapper.tsx
import { Platform } from "react-native";

let MaskedView: any;

if (Platform.OS === "web") {
  MaskedView = ({ children }: any) => children;
} else {
  MaskedView = require("@react-native-masked-view/masked-view").default;
}

export default MaskedView;

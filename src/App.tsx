import * as React from "react";
import "./styles.css";
import { Stack, IStackTokens, initializeIcons } from "@fluentui/react";
import { DefaultButtonExamples } from "./DefaultButtonExamples";
import { CompoundButtonExamples } from "./CompoundButtonExamples";
import { SplitButtonExamples } from "./SplitButtonExamples";

initializeIcons();
const stackTokens: IStackTokens = { childrenGap: 30 };

export default function App() {
  return (
    <div className="App">
      <Stack tokens={stackTokens}>
        <DefaultButtonExamples />
        <CompoundButtonExamples />
        <SplitButtonExamples />
      </Stack>
    </div>
  );
}

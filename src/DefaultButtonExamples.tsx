import * as React from "react";
import {
  DefaultButton,
  PrimaryButton,
  Stack,
  IStackTokens
} from "@fluentui/react";

import { Button, ToggleButton } from "@fluentui/react-button";
import { ThemeProvider } from "@fluentui/react-theme-provider";

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 10 };

export const DefaultButtonExamples: React.FunctionComponent<IButtonExampleProps> = (
  props
) => {
  const { disabled, checked } = props;

  return (
    <ThemeProvider>
      <Stack tokens={stackTokens}>
        <Stack horizontal tokens={stackTokens}>
          <div style={{ width: "50px" }}>Old</div>
          <DefaultButton
            text="Standard"
            onClick={_alertClicked}
            allowDisabledFocus
            disabled={disabled}
            checked={checked}
          />
          <PrimaryButton
            text="Primary"
            onClick={_alertClicked}
            allowDisabledFocus
            disabled={disabled}
            checked={checked}
          />
        </Stack>

        <Stack horizontal tokens={stackTokens}>
          <div style={{ width: "50px" }}>New</div>
          <Button
            content="Standard"
            onClick={_alertClicked}
            disabled={disabled}
            checked={checked}
          />

          <Button
            content="Primary"
            primary
            onClick={_alertClicked}
            disabled={disabled}
            checked={checked}
          />

          <ToggleButton
            content="ToggleButton"
            checked={checked}
            onClick={_alertClicked}
          />
          <ToggleButton
            content="ToggleButton Primary"
            primary
            checked={checked}
            onClick={_alertClicked}
          />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

function _alertClicked(): void {
  alert("Clicked");
}

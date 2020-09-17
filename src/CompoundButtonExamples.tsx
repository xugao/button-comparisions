import * as React from "react";
import {
  CompoundButton as V7CompoundButton,
  Stack,
  IStackTokens
} from "@fluentui/react";

import { CompoundButton } from "@fluentui/react-button";
import { ThemeProvider } from "@fluentui/react-theme-provider";

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 10 };

export const CompoundButtonExamples: React.FunctionComponent<IButtonExampleProps> = (
  props
) => {
  const { disabled, checked } = props;

  return (
    <ThemeProvider>
      <Stack tokens={stackTokens}>
        <Stack horizontal tokens={stackTokens}>
          <div style={{ width: "50px" }}>Old</div>
          <V7CompoundButton
            secondaryText="This is the secondary text."
            disabled={disabled}
            checked={checked}
          >
            Standard
          </V7CompoundButton>
          <V7CompoundButton
            primary
            secondaryText="This is the secondary text."
            disabled={disabled}
            checked={checked}
          >
            Primary
          </V7CompoundButton>
        </Stack>

        <Stack horizontal tokens={stackTokens}>
          <div style={{ width: "50px" }}>New</div>
          <CompoundButton
            secondaryContent="This is the secondary text."
            disabled={disabled}
            checked={checked}
          >
            Standard
          </CompoundButton>
          <CompoundButton
            primary
            secondaryContent="This is the secondary text."
            disabled={disabled}
            checked={checked}
          >
            Primary
          </CompoundButton>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

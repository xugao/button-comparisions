import * as React from "react";
import {
  DefaultButton,
  IContextualMenuProps,
  Stack,
  IStackTokens
} from "@fluentui/react";

import { SplitButton } from "@fluentui/react-button";
import { ThemeProvider } from "@fluentui/react-theme-provider";

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

const menuProps: IContextualMenuProps = {
  items: [
    {
      key: "emailMessage",
      text: "Email message",
      iconProps: { iconName: "Mail" }
    },
    {
      key: "calendarEvent",
      text: "Calendar event",
      iconProps: { iconName: "Calendar" }
    }
  ]
};
// Example formatting
const stackTokens: IStackTokens = { childrenGap: 10 };

export const SplitButtonExamples: React.FunctionComponent<IButtonExampleProps> = (
  props
) => {
  const { disabled, checked } = props;

  return (
    <ThemeProvider>
      <Stack tokens={stackTokens}>
        <Stack horizontal wrap tokens={stackTokens}>
          <div style={{ width: "50px" }}>Old</div>
          <DefaultButton
            text="Standard"
            split
            splitButtonAriaLabel="See 2 options"
            aria-roledescription="split button"
            menuProps={menuProps}
            onClick={_alertClicked}
            disabled={disabled}
            checked={checked}
          />
          <DefaultButton
            text="Primary"
            primary
            split
            splitButtonAriaLabel="See 2 options"
            aria-roledescription="split button"
            menuProps={menuProps}
            onClick={_alertClicked}
            disabled={disabled}
            checked={checked}
          />
          <DefaultButton
            text="Main action disabled"
            primaryDisabled
            split
            splitButtonAriaLabel="See 2 options"
            aria-roledescription="split button"
            menuProps={menuProps}
            onClick={_alertClicked}
            disabled={disabled}
            checked={checked}
          />
          <DefaultButton
            text="Disabled"
            disabled
            allowDisabledFocus
            split
            splitButtonAriaLabel="See 2 options"
            aria-roledescription="split button"
            menuProps={menuProps}
            onClick={_alertClicked}
            checked={checked}
          />
        </Stack>

        <Stack horizontal wrap tokens={stackTokens}>
          <div style={{ width: "50px" }}>New</div>
          <SplitButton
            content="Standard"
            aria-label="See 2 options"
            aria-roledescription="split button"
            menu={menuProps}
            onClick={_alertClicked}
            disabled={disabled}
            // checked={checked}
          />
          <SplitButton
            content="Primary"
            primary
            aria-label="See 2 options"
            aria-roledescription="split button"
            menu={menuProps}
            onClick={_alertClicked}
            disabled={disabled}
            // checked={checked}
          />
          <SplitButton
            content="Main action disabled"
            disabled
            aria-label="See 2 options"
            aria-roledescription="split button"
            menu={menuProps}
            onClick={_alertClicked}
            checked={checked}
          />
          <SplitButton
            content="Disabled"
            disabled
            aria-label="See 2 options"
            aria-roledescription="split button"
            menu={menuProps}
            onClick={_alertClicked}
            checked={checked}
          />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

function _alertClicked() {
  alert("Clicked");
}

export type CapsulePropType = {
  capsuleText: string;
  capsuleStyle: string;
  path: string;
  isActiveStyle: string;
};

export type NavigationMenuPropType = {
  navigationMenuStyle: string;
};

export type ProfileInputPropType = {
  labelStyle?: string;
  label: string;
  inputDivStyle?: string;
  name: string;
  type: string;
  inputFieldStyle?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
};

export type TextAreaPropType = {
  labelText?: string;
  name: string;
  rows?: number;
  cols?: number;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  labelStyle?: string;
  textAreaStyle?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

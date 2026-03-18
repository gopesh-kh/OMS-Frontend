export interface AddressType {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export type AddressFormPropType = {
  onSave: (address: AddressType) => void;
  onCancel: () => void;
};

import { MouseEventHandler } from 'react';
import { IStates } from '.';

export interface IUiConstants {
  inputQuickSearchPlaceholder: string;

  none: string;

  addUser: string;
  editUser: string;
  deleteUser: string;
  infoUser: string;

  addEnterprise: string;
  editEnterprise: string;
  deleteEnterprise: string;
  infoEnterprise: string;
}

export interface IHeaderPageProps {
  handleSidebar?: () => void;
  formAdd: string;
}

export interface IHeaderMobileProps {
  handleSidebar: () => void;
}

export interface ICardProps {
  srcImage: string;
  title: string;
  subtitle: string;
  alt: string;
  handleOpenDrawerInfo?: MouseEventHandler<HTMLDivElement>;
}

export interface ICardMobileBodyStyles {
  padding: number;
  height: string;
  display: string;
  alignItems: string;
}

export interface ICardMetaStyle {
  title: {
    fontSize: string;
  };
  titleMobile: {
    fontSize: string;
  };
  description: {
    fontSize: string;
  };
  descriptionMobile: {
    fontSize: string;
  };
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface IFormsDrawerStyles {
  background: string;
}

export interface IHeaderFormsDrawerStyles {
  border: string;
}

export interface IForms {
  none: () => string;

  addUser: IForm;
  editUser: () => string;
  deleteUser: () => string;
  infoUser: IForm;

  addEnterprise: IForm;
  editEnterprise: () => string;
  deleteEnterprise: () => string;
  infoEnterprise: IForm;
}
export interface IForm {
  (): JSX.Element;
}

export interface IInputFormsStyle {
  boxShadow: string;
  borderColor: string;
  width: string;
}

export interface IFormsButtonsStyles {
  color: string;
}

export interface IFormItemInputProps {
  name: NameType;
  rules?: IRules[];
  placeholder: string;
  classname?: string;
}

export interface IFormItemSelectProps {
  name: NameType;
  rules?: IRules[];
  placeholder: string;
  options: IOptions[];
}

export interface IFormItemSelectCoordinateProps {
  data: IStates[];
  firstName: NameType;
  secondName: NameType;
  firstPlaceholder: string;
  secondPlaceholder: string;
}

export interface IFormItemUploadProps {
  name: NameType;
  maxCount?: number;
  accept: string;
  buttonText: string;
}

export interface ISelectProperties {
  value: number;
  label: string;
}
export interface ICities extends ISelectProperties {}

export interface IRules {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pattern?: any;
  max?: number;
  type?: RulesType;
  message: string;
}

export type RulesType = 'string' | 'number' | 'boolean' | 'url' | 'email';

export interface IOptions {
  value: string;
  label: string;
}

export type NameType =
  | 'email'
  | 'password'
  | 'name'
  | 'lastname'
  | 'email'
  | 'id_role'
  | 'business_name'
  | 'comercial_name'
  | 'legal_representative'
  | 'RFC'
  | 'street'
  | 'exterior_number'
  | 'interior_number'
  | 'suburb'
  | 'postal_code'
  | 'id_state'
  | 'id_city'
  | 'country'
  | 'enterprise_type'
  | 'turn_enterprise'
  | 'tellphone'
  | 'email'
  | 'file';

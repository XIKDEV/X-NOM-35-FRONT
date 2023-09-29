export interface IUiConstants {
  inputQuickSearchPlaceholder: string;

  addUser: string;
  editUser: string;
  deleteUser: string;
  addEnterprise: string;
  editEnterprise: string;
  deleteEnterprise: string;
  none: string;
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

export interface IFormsDrawerStyles {
  background: string;
}

export interface IHeaderFormsDrawerStyles {
  border: string;
}

export interface IForms {
  addUser: IForm;
  editUser: () => string;
  deleteUser: () => string;
  addEnterprise: IForm;
  editEnterprise: () => string;
  deleteEnterprise: () => string;
  none: () => string;
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

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

export interface IUiConstants {
  inputQuickSearchPlaceholder: string;
}

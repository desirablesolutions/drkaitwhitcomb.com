export type ImageProps = {
    src?: string,
    className?: string
  }
  export type FaviconProps = {
    image?: ImageProps,
    url?: string
  }
  export type LinkProps = {
    url: string,
    label: string
  }
  export type AuthenticatorProps = {
    branding: {
      
    },
    form: {
      
    }
  }
  export type SideMenuMenuProps = {
    links: LinkProps[]
  }
  export type SideMenuSubMenuProps = {
    links: LinkProps[],
    title: string
  }

  export type SideMenuFooterProps = {
    actions: LinkProps[]
  }
  export type SideMenuProps = {
    console: {
      favicon: FaviconProps,
      menu: SideMenuMenuProps,
      subMenu: SideMenuSubMenuProps
    };
    footer?: SideMenuFooterProps;
  };
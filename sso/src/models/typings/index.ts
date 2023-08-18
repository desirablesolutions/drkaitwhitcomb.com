import { meta } from './../../../../www/src/models/configs/meta';
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
      title: string,
      subTitle: string,
      image: ImageProps,
      url: string
    },
    form: {
      formData: {
        authentication: {},
        footer: {}
      },
      header: {
        subTitle: string,
        title: string
      }
      
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
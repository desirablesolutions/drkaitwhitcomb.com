import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "drkaitwhitcomb/drkaitwhitcomb",

  },
  ui: {
    brand: {
      name: "Dr. Kait Whitcomb",
      mark: () => (
        <img
          src="/assets/favicons/favicon-192x192.png"
          style={{ objectFit: "cover", width: "45px", height: "45px" }}
          alt="Dr. Kait Whitcomb"
        />
      ),
    },

    navigation: {
      content: ["pages", "resources"],
      configuration: [
        "themes",
        "footer",
        "header",
        "navigator",
        "images",
        "metadata",
      ],

    },
  },
  singletons: {
    themes: singleton({
      label: "Themes",
      format: "json",
      path: "src/configs/themes",
      schema: {
        default: fields.object({
          font: fields.text({ label: "Font" }),
          colors: fields.object({
            primary: fields.text({ label: "Primary" }),
            secondary: fields.text({ label: "Secondary" }),
            tertiary: fields.text({ label: "Tertiary" }),
            quaternary: fields.text({ label: "Quaternary" }),
          }),
        }),
      },
    }),
    header: singleton({
      label: "Header",
      format: "json",
      path: "src/configs/header",
      schema: {
        favicon: fields.object({
          image: fields.object({
            alt: fields.text({ label: "Alt" }),
            src: fields.url({ label: "Src" }),
            url: fields.url({ label: "URL" }),
          }),
        }),
        links: fields.array(
          fields.object(
            {
              name: fields.text({ label: "Name" }),
              url: fields.url({ label: "URL" }),
            },
            {
              label: "Links",
            }
          ),
          {
            itemLabel: (props) => props.fields.name.value ?? "Link",
          }
        ),
      },
    }),
    images: singleton({
      label: "Images",
      format: "json",
      path: "src/configs/images",
      schema: {
        map: fields.text({ label: "Map URL" }),
        nature: fields.text({ label: "Nature URL" }),
        overlooking: fields.text({ label: "Overlooking URL" }),
        flowers: fields.text({ label: "Flowers URL" }),
        office: fields.text({ label: "Office URL" }),
        profile: fields.text({ label: "Profile URL" }),
        landscape: fields.text({ label: "Landscape URL" }),
      },
    }),
    footer: singleton({
      label: "Footer",
      format: "json",
      path: "src/configs/footer",
      schema: {
        links: fields.object({
          links: fields.array(
            fields.object({
              name: fields.text({ label: "Name" }),
              url: fields.url({ label: "URL" }),
            })
          ),
        }),
        copyright: fields.object({
          copyright: fields.text({ label: "Copyright" }),
        }),
        tag: fields.object({
          tag: fields.object({
            image: fields.object({
              src: fields.image({
                label: "Image",
                directory: "public/assets/images/footer",
                publicPath: "/assets/images/footer/",
              }),
              url: fields.url({ label: "URL" }),
            }),
          }),
        }),
        phoneNumber: fields.object({
          phoneNumber: fields.text({ label: "Phone Number" }),
        }),
        emailAddress: fields.object({
          emailAddress: fields.text({ label: "Email Address" }),
        }),
      },
    }),
    navigator: singleton({
      label: "Navigator",
      format: "json",
      path: "src/configs/navigator",
      schema: {
        actions: fields.array(
          fields.object(
            {
              label: fields.text({ label: "Label" }),
              url: fields.url({ label: "URL" }),
            },
            { label: "Action" }
          ),
          {
            itemLabel: (props) => props.fields.label.value ?? "Action",
          }
        ),
      },
    }),
    metadata: singleton({
      label: "Metadata",
      format: "json",
      path: "src/configs/metadata",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        theme: fields.select({
          label: "Theme",
          options: [
            { label: "Light", value: "light" },
            { label: "Dark", value: "dark" },
          ],
          defaultValue: "light",
        }),
      },
    }),
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "public/assets/images/posts",
              publicPath: "/assets/images/posts/",
            },
          },
        }),
      },
    }),
    pages: collection({
      label: "Pages",
      slugField: "slug",
      path: "src/content/pages/*",
      format: "json",
      schema: {
        slug: fields.slug({ name: { label: "Key" } }),
        metaData: fields.object({
          title: fields.slug({ name: { label: "Title" } }),

        }),
        data: fields.array(
          fields.object({
            title: fields.slug({ name: { label: "Title" } }),
            content: fields.markdoc({
              label: "Content",
              options: {
                image: {
                  directory: "public/assets/images/pages",
                  publicPath: "/assets/images/pages/",
                },
              },
            }),
          })
        ),
      },
    }),
    resources: collection({
      label: "Resources",
      slugField: "title",
      path: "src/content/resources/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "public/assets/images/resources",
              publicPath: "/assets/images/resources/",
            },
          },
        }),
      },
    }),

  },
});

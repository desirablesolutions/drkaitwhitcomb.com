import { images } from "@assets/images";
import { MasonryGridProps, MasonryProps } from "@/models/typings";

export type PageStoreType = {
  metaData: any;
  data: any;
};


export const pages: PageStoreType = {
  metaData: {
    layout: {
      navBar: {
        links: [

        ]
      },
      footer: {
        links: [
          
        ]
      }
    },
  },

  data: {
    home: {
      metaData: {
        pageTitle: "Home",
        description: "",
      },
      data: {
        masonry: {
          container: {
            gap: 2,
            rows: 1,
            columns: 2,
          },

          grids: [
            {
              columns: 1,
              gap: 2,
              span: 1,

              items: [
                {
                  type: "image",

                  src: images.landscape,
                },
                {
                  type: "callout",
               

                  content: `Office and Telehealth Visits Available`,
                },

                {
                  type: "image",

                  src: images.flowers,
                },
              ],
            },
            {
              columns: 1,
              gap: 2,
              span: 1,

              items: [
                {
                  type: "image",

                  src: images.landscape,
                },
                {
                  type: "callout",
               

                  content: `Office and Telehealth Visits Available`,
                },

                {
                  type: "image",

                  src: images.flowers,
                },
              ],
            },
           
          ],
        },
      },
    },
    about: {
      layout: {
        metaData: {
          pageTitle: "About Me",
        },
      },
      data: {
        masonry: {
          container: {
            gap: 2,
            cols: 1,
          },

          grids: [
            {
              items: [
                {
                  type: "callout",
                  title: "Find the healing you are looking for",
                  content: `
              I love helping clients make real, meaningful change that can help them achieve their goals. Using evidence-based treatments, I help clients learn to manage down days, ease anxious minds, heal past trauma, and establish better behavioral patterns.
              In every session, I try to create a welcoming environment so you can feel heard, understood, and validated. My clients have described me as warm and easy to talk to – and as someone who treats them like an individual, not a number.
              If you think I might be a good fit, I’d love to hear from you. Please call or email me to schedule your free consultation today..​`,
                },
                {
                  type: "callout",
                  title: "My experience and training",
                  content: `## About Kait Whitcomb.​`,
                },
              ],
            },

            {
              items: [
                {
                  type: "text",
                  content: `## About Kait Whitcomb.​`,
                },
                {
                  type: "image",
                  src: images.overlooking,
                },
              ],
            },
          ],
        },
      },
    },
    contact: {
      data: {
        masonry: {
          container: {
            gap: 2,
            cols: 1,
          },
          items: [
            {
              type: "callout",
              title: "Contact Me",
              content: `If you think I might be a good fit, I’d love to hear from you. Please call or email me to schedule your free consultation today.`,
            },
            {
              type: "map",
              center: {
                lat: 0,
                long: 0,
              },
            },
          ],
          grids: [
            {
              items: [
                {
                  type: "callout",
                  title: `
                870 Clark St. ste #1020
                
                Oviedo, FL 32765
                `,
                  content: `
                Tel  (407) 493-2238
                
                Fax (407) 542-1804
                
                therapy@drkaitwhitcomb.co`,
                },
              ],
            },
          ],
        },
      },
    },
    services: {
      data: {
        masonry: {
          container: {
            gap: 2,
          },
          items: [
            {
              text: "Contact Me",
            },
          ],
          grids: [
            {
              items: [
                {
                  type: "text",
                  content: "## Individual Therapy Services",
                },
                {
                  type: "callout",
                  title: "Fees",
                  subTitle: "$160/Session​",
                  content:
                    "Each session is 50 minutes. We schedule a recurring appointment time to ensure that you receive the consistent care you need, at an interval that makes sense for you.                I do not accept insurance.",
                },
                {
                  type: "callout",
                  title: "My Approach",
                  content: `I specialize in treating adults with PTSD, OCD, anxiety, and depression. While every client is different, individual therapy with me often follows a similar pattern. First, we’ll do a free phone consultation to make sure I’m a good fit for you. Then we’ll do a few sessions together, so I can better understand your concerns, history, and goals. After that, we’ll develop a flexible treatment plan using research-supported treatments. This document will help you understand what to expect from our time together,
                 so you can see the steps we'll take to help you reach your goals.`,
                },
              ],
            },

            {
              items: [
                {
                  type: "image",
                  src: images.nature,
                },
              ],
            },
          ],
        },
      },
    },
  },
};

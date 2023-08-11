import type { PageStoreType } from "@/models/typings";
import { images } from "@assets/images";

export const pages: PageStoreType = {
  metaData: {
    layout: {
      navBar: {
        links: [],
      },
      footer: {
        links: [],
      },
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
            gap: 1,
            rows: 1,
            columns: 3,
          },

          grids: [
            {
              columns: 2,
              gap: 1,
              span: 2,

              items: [
                {
                  type: "image",
                  span: 2,
                  src: images.landscape,
                },

                {
                  type: "header",
                  content: "Office and Telehealth Visits Available",
                  span: 2,
                },

                {
                  type: "image",
                  span: 1,

                  src: images.office,
                },
                {
                  type: "image",
                  span: 1,

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
                  type: "callout",
                  title: `Individual Therapy from a Licensed Psychologist`,
                  link: {
                    label: "Learn More",
                    url: "/about"
                  },
                  content: `I work with adult clients to help them find the healing they’re looking for. I’m glad you’re here!

                  `
                },
                {
                  type: "image",

                  src: images.profile,
                },

                {
                  type: "callout",
title: "Dr. Kait Whitcomb, LLC",
                  subTitle: "therapy@drkaitwhitcomb.com",
                  content: `
                  



Phone: (407) 493-2238   |   Fax: (407) 542-1804
                  `
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
            gap: 1,
            rows: 1,
            columns: 3,
          },
          items: [
            {
              type: "header",
              content: "About Dr. Kait Whitcomb",
              span: 3,
            },
          ],

          grids: [
            {
              span: 2,
              items: [
                {
                  type: "image",
                  span: 2,
                  src: images.overlooking,
                },
                {
                  type: "callout",
                  span: 1,
                  content: `I'm a licensed psychologist practicing in Oviedo, Florida. I earned my PhD in Clinical Psychology in 2017 from Brigham Young University, then completed a postdoctoral residency at a university counseling center. I opened my own practice in 2019. I specialize in treating adults with OCD, PTSD, anxiety, and depression. It is important to me that clients of all identities and from all cultural backgrounds feel safe, accepted, and celebrated in my practice.​`,
                  title: ` My experience and training`,
                },
              ],
            },
            {
              columns: 1,
              gap: 1,
              span: 1,

              items: [
                {
                  type: "callout",
                  title: `Find the healing you are looking for.`,
                  content: `

In every session, I try to create a welcoming environment so you can feel heard,
 understood, and validated. My clients have described me as warm and easy to talk to – 
 and as someone who treats them like an individual, not a number.

​​

If you think I might be a good fit, I’d love to hear from you. Please call or email me to schedule your free consultation today.`,
                  span: 2,
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
            gap: 1,
            rows: 1,
            columns: 3,
          },
          items: [
            {
              type: "header",
              content: "Contact Me",
              span: 3,
            },
          ],

          grids: [
            {
              columns: 1,
              gap: 1,
              span: 3,
              items: [
                {
                  type: "image",
                  src: images.map,
                },
              ],
            },
            {
              span: 3,
              columns: 3,
              items: [
                {
                  type: "callout",
                  span: 2,
                  title: "Reach out",
                  content: `
                  If you think I might be a good fit, I’d love to hear from you.
                   Please call or email me to schedule your free consultation today.`,
                },
                {
                  type: "callout",
                  span: 1,
                  subTitle: "therapy@drkaitwhitcomb.com",
                  title: `870 Clark St. ste #1020

                  Oviedo, FL 32765
                  `,
                  content: `
                

Tel  (407) 493-2238 | 

Fax (407) 542-1804

`,
                },
              ],
            },
          ],
        },
      },
    },
    services: {
      metaData: {
        pageTitle: "Services",
      },
      data: {
        masonry: {
          container: {
            gap: 1,
            rows: 1,
            columns: 3,
          },
          items: [
            {
              type: "header",
              content: "Individual Therapy Services",
              span: 3,
            },
          ],

          grids: [
            {
              span: 3,
              columns: 3,
              items: [
                {
                  type: "callout",
                  span: 2,
                  title: "My approach",
                  content: `
                  ​I specialize in treating adults with PTSD, OCD, anxiety, and depression.
                   While every client is different, individual therapy with me often follows a 
                   similar pattern. First, we’ll do a free phone consultation to make sure I’m a good
                    fit for you. Then we’ll do a few sessions together, so I can better understand your concerns, 
                    history, and goals. After that, we’ll develop a flexible treatment plan using research-supported 
                    treatments. This document will help you understand what to expect from our time together, so you 
                    can see the steps we'll take to help you reach your goals.`,
                },
                {
                  type: "callout",
                  span: 1,
                  title: "Fees",
                  subTitle: "$150/Session​",
                  content: `
                  
        
                  Each session is 50 minutes. We schedule a recurring appointment time to ensure 
                  that you receive the consistent care you need, at an interval that makes sense for you.

                  I do not accept insurance.`,
                },
              ],
            },
            {
              columns: 1,
              gap: 1,
              span: 3,
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

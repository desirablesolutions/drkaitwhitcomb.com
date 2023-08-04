import { images } from "@assets/images";

export const pages: any = {
  home: {
    layout: {
      metaData: {
        pageTitle: "Home",
        description: "",
      },
    },
    data: {
      masonry: {
        container: {
          gap: 2,
          cols: 2,
        },

        grids: [
          {
            items: [
              {
                type: "image",
                src: images.landscape,
              },
              {
                type: "text",
                content: `# Office and Telehealth Visits Available`,
              },
             
              {
                type: "image",
                src: images.flowers,
              },
              
           
        
            ],
          },
          
          {
            items: [
                {
                    type: "callout",
                    title: `Individual therapy from a licensed psychologist.`,
                    content: ` I work with adult clients to help them find the healing they’re looking for.`,
                    link: {
                        url: "#",
                        label: "Learn More",
                    },
                  },
              {
                type: "image",
                src: images.profile,
              },
              {
                type: "image",
                src: images.office,
              },
              {
                type: "data",
                title: `Dr. Kait Whitcomb, LLC `,
                subTitle: "therapy@drkaitwhitcomb.com",
                content: `Phone: (407) 493-2238  Fax: (407) 542-1804`
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
          ]
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
            type: "text",
            content: "## Contact Me",
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
                type: "text",
                content: `Individual therapy from a licensed psychologist I work with adult
                          clients to help them find the healing they’re looking for. 
                          ## I’m glad you’re here! Learn more`,
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
                content: "## Individual Therapy Services"
              },
              {
                type: "callout",
                title: "Fees",
                subTitle: "$160/Session​",
                content: "Each session is 50 minutes. We schedule a recurring appointment time to ensure that you receive the consistent care you need, at an interval that makes sense for you.                I do not accept insurance."
              },
              {
                type: "text",
                content: "## My Approach"
              },
              {
                type: "text",
                content: "## Individual Therapy Services"
              },
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
};

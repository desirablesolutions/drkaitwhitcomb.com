import { images } from "@assets/images"


export const pages: any = {
    home: {
        layout: {},
        data: {
            masonry: {
                container: {
                    gap: 2,
                    cols: 2
                },

                grids: [
                    {
                        items: [
                            {
                                type: "text",
                                content: `## Individual therapy from a licensed psychologist.` 
                                           
                            },
                            {
                                type: "image",
                                src: images.profile,
                            },
                            {
                                type: "text",
                                content: `# Dr. Kait Whitcomb, LLC
                               `
                            },
                            {
                                type: "text",
                                content: " # Office and Telehealth Visits Available"

                            }
                        ],
                    },
                    {

                        items: [
                            {
                                type: "image",
                                src: images.profile
                            },
                            {
                                type: "image",
                                src: images.office
                            },
                            {
                                type: "image",
                                src: images.landscape
                            },
                        ],

                    },
                ],
            }
        }
    },
    about: {
        layout: {
            metaData: {
                pageTitle: "About Me",
            }
        },
        data: {
            masonry: {
                container: {
                    gap: 2,
                },
                items: [
                    {
                        text: "About Dr. Kait Whitcomb",
                    },
                ],
                grids: [
                    {
                        items: [
                            {
                                type: "image",
                                src: images.overlooking,
                            },
                            {
                                type: "text",
                                content: `
                                # My experience and training
                                I'm a licensed psychologist practicing in Oviedo, Florida. I earned my PhD in Clinical Psychology in 2017 from Brigham Young University, then completed a postdoctoral residency at a university counseling center. I opened my own practice in 2019. I specialize in treating adults with OCD, PTSD, anxiety, and depression. It is important to me that clients of all identities and from all cultural backgrounds feel safe, accepted, and celebrated in my practice.​`
                            },
                            {
                                type: "text",
                                content: `
                              #  Find the healing you are looking for`
                              
                            }

                        ],
                    },
                    {
                        items: [
                            {
                                type: "text",
                                content: `Individual therapy from a licensed psychologist I work with adult
                          clients to help them find the healing they’re looking for. I’m glad you’re here! Learn more`
                            },

                            {
                                type: "text",
                                content: ` Dr. Kait Whitcomb, LLC <br />
                                therapy@drkaitwhitcomb.com
                                <br />
                                Phone: (407) 493-2238 <br />
                                Fax: (407) 542-1804`
                            }
                        ],
                    },
                ],
            }
        }
    },
    contact: {
        data: {
            masonry: {
                container: {
                    gap: 2,
                    cols: 1
                },
                items: [
                    {
                        type: "text",
                        content: "Contact Me",
                    },
                    {
                        type: "map",
                        center: {
                            lat: 0,
                            long: 0
                        }
                    }
                ],
                grids: [
                    {
                        items: [
                            {
                                type: "text",
                                content: `                              
                                        # 870 Clark St. ste #1020
`
                            },

                        ],
                    },
                    {
                        items: [
                            {
                                type: "text",
                                content: `Individual therapy from a licensed psychologist I work with adult
                          clients to help them find the healing they’re looking for. 
                          ## I’m glad you’re here! Learn more`
                            },

                            {
                                type: "text",
                                content: ` Dr. Kait Whitcomb, LLC <br />
                                therapy@drkaitwhitcomb.com
                                <br />
                                Phone: (407) 493-2238 <br />
                                Fax: (407) 542-1804`
                            }
                        ],
                    },
                ],
            }
        }
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
                                type: "image",
                                src: images.nature,
                            },
                            {
                                type: "text",
                                content: `# Fees
                                $160/Session​ 
                                
                                ​
                                
                                Each session is 50 minutes. 
                                ## We schedule a recurring appointment time to ensure that you receive the consistent care you need, at an interval that makes sense for you.
                                
                                ​
                                
                                I do not accept insurance.`
                            }

                        ],
                    },
                    {
                        items: [
                            {
                                type: "text",
                                content: `Individual therapy from a licensed psychologist I work with adult
                          clients to help them find the healing they’re looking for. I’m glad you’re here! Learn more`
                            },

                            {
                                type: "text",
                                content: ` Dr. Kait Whitcomb, LLC <br />
                                therapy@drkaitwhitcomb.com
                                <br />
                                Phone: (407) 493-2238 <br />
                                Fax: (407) 542-1804`
                            }
                        ],
                    },
                ],
            }
        }
    }
};



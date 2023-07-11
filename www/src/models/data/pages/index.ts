import { images } from "@assets/images"

export const pages: any = {
    home: {
        layout: {},
        data: {
            masonry: {
                container: {
                    gap: 2,
                    cols: 1
                },

                grids: [
                    {
                        items: [
                            {
                                type: "text",
                                content: `Individual therapy from a licensed psychologist I work with adult
                          clients to help them find the healing they’re looking for. I’m glad you’re here! Learn more`
                            },
                            {
                                type: "image",
                                src: images.profile,
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
                    {

                        items: [
                            {
                                type: "image",
                                src: images.flowers
                            },
                            {
                                type: "image",
                                src: images.flowers
                            },
                        ],
                    },
                ],
            }
        }
    },
    "about": {
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
                        text: "About Me",
                    },
                ],
                grids: [
                    {
                        items: [
                            {
                                type: "image",
                                src: images.office,
                            },

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
                ],
                grids: [
                    {
                        items: [
                            {
                                type: "text",
                                content: `
                                
870 Clark St. ste #1020

Oviedo, FL 32765

 

Tel  (407) 493-2238

Fax (407) 542-1804

therapy@drkaitwhitcomb.com`
                            },

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
    "resources": {
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
                                src: images.overlooking,
                            },

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
    "services": {
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
                                src: images.flowers,
                            },

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



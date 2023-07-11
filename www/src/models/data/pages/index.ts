export const pages = {

    home: {
        meta: {},
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
                                src: images.profile,
                            },
                            {
                                type: "image",
                                src: images.profile,
                            },
                            {
                                type: "image",
                                src: images.profile,
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
    about: {},
    contact: {},
    resources: {},
    services: {}
};


export type PageData = {
    
}
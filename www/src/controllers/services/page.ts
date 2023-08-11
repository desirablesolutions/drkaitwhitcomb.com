import { pages } from "@pages/index"

export function PageService() {

    const methods = {
        getPage: async (id: string): Promise<any> => {
            const page = pages.data[id]
            return page
        },
    }
    return { ...methods }
}
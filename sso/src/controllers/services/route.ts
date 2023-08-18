import { routes } from "@routes/index"


export default async function RouteService() {
    return {
        getData: async (id: string) => {
            const { data } = routes()
            return data["home"]
        }
    }
}
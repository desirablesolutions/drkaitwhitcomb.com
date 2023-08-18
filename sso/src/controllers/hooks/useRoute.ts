import RouteService from "@services/route"



export default async function useRoute(id: string) {
    const { getData } = await RouteService()
    const response = await getData(id)
    return response
}
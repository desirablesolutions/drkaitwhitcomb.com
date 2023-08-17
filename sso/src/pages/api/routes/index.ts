
import { default as getRoute } from "@hooks/useRoute"

export default async function handler({ req, res}: any) {

  const data = await getRoute(`${req}`)

    res.status(200).json(data)
  }
import Authenticator from "@includes/Authenticator";
import useRoute from "@hooks/useRoute";

export default async function Home() {
  
  const { authenticator } = (await useRoute("home")) as any;

  return <Authenticator authenticator={authenticator} />;
}

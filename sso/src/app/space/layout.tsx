import SideMenu from "@includes/SideMenu";
import NavBar from "@includes/NavBar";
export default function Layout({ children }: any) {
  return (
    <div className="grid w-full grid-cols-5 mx-auto">
      <SideMenu />
      {children}
    </div>
  );
}

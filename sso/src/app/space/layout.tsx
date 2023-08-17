import SideMenu from "@includes/SideMenu";
import NavBar from "@includes/NavBar";
export default function Layout({ children }: any) {
  return (
    <div className="mx-auto lg:ml-80">
      <SideMenu />
      <NavBar/>
      {children}
    </div>
  );
}

import SideMenu from "@includes/SideMenu";

export default function Layout({ children }: any) {
  return (
    <div className="mx-auto lg:ml-80">
      <SideMenu />
      {children}
    </div>
  );
}

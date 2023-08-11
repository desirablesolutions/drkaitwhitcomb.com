export default function Container({ children }: any) {
  return (
    <section>
      <nav className="relative flex items-center justify-between p-8  mb-3 bg-black">
       {children}
      </nav>
     
    </section>
  );
}

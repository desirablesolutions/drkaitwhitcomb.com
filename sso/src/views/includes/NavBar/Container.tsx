export default function Container({ children }: any) {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between p-8 mb-3 text-black bg-opacity-50 backdrop-blur-sm">
    {children}
   </nav>
  );
}

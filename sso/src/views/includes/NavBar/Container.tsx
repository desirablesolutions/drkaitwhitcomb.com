export default function Container({ children }: any) {
  return (
    <nav className="sticky bg-opacity-50 top-0 z-50 backdrop-blur-sm flex items-center justify-between p-8  mb-3 bg-white text-black">
    {children}
   </nav>
  );
}

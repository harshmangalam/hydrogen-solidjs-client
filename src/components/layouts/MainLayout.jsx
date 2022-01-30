import Navbar from "../header/Navbar";

export default function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <main className="py-14 px-2 md:px-0">{props.children}</main>
    </div>
  );
}

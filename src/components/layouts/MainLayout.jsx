import Navbar from "../header/Navbar";

export default function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

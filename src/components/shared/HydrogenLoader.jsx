import LogoImg from "../../assets/logo.png";
export default function HydrogenLoader() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img
        src={LogoImg}
        alt="Auth Loading..."
        className="w-24 h-24 animate-spin"
      />
    </div>
  );
}

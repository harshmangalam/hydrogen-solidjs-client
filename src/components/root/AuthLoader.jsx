import LogoImg from "../../assets/logo.png";
export default function AuthLoader() {
  return (
    <div className="min-h-screen grid place-items-center">
      
        <img
          src={LogoImg}
          alt="Auth Loading..."
          className="w-24 h-24 animate-spin"
        />
    
    </div>
  );
}

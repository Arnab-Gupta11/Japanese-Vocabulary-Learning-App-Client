import logo from "../../../assets/Logo.webp";
const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <img src={logo} alt="" className="w-10 h-10" />
      <h1 className="text-slate-700 dark:text-slate-300 font-bold text-3xl font-Cormorant-Garamond">EduLexis</h1>
    </div>
  );
};

export default Logo;

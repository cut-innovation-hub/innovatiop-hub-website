

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
    
  return (
    <div className="mb-[30px]">
        <h1 className="font-bold mb-[5px] text-slate-900">{title}</h1>
        <h4 className="text-blue-400">{subtitle}</h4>
    </div>
   
  );
};

export default Header;

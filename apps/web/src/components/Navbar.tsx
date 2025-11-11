import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ZRENDER AI Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-foreground">ZRENDER AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              หน้าหลัก
            </a>
            <a href="#examples" className="text-foreground hover:text-primary transition-colors">
              ตัวอย่างผลงาน
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              คุณสมบัติ
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              เกี่ยวกับเรา
            </a>
            <a href="#tutorial" className="text-foreground hover:text-primary transition-colors">
              บทเรียน
            </a>
            <a href="#free-credits" className="text-foreground hover:text-primary transition-colors">
              เครดิต $300
            </a>
          </div>

          <div className="flex items-center gap-4">
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

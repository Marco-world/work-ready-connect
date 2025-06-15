
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <Briefcase className="h-6 w-6 text-primary" />
            TalentLink
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TalentLink. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

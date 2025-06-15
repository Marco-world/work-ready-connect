
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg hover-scale">
            <Heart className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              CareLink
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CareLink. Connecting families with caring professionals.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground story-link">Privacy Policy</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground story-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

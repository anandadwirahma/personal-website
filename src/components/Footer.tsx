const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ananda Dwi Rahma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

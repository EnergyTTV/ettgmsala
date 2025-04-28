const Footer = () => {
  return (
    <footer className="bg-black/50 w-full text-white py-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Ett Golv och Måleri i Sala AB. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

const FooterComponent = () => {
  return (
    <footer className="bg-darkGray text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Motorsågskörkortet. Alla rättigheter
          förbehållna.
        </p>
        <p className="mt-2">Kontakta oss: info@motorsagskorkortet.se</p>
      </div>
    </footer>
  );
};

export default FooterComponent;

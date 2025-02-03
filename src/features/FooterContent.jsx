// Footer Content

function FooterContent() {
  const year = new Date().getFullYear();
  return (
    <div className="ml-10">
      <p className="text-white">Aung Kham Naung &copy; {year}</p>
    </div>
  );
}

export default FooterContent;

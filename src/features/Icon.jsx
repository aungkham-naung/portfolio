function Icon({ target, link, children }) {
  return (
    <a href={link} target={target}>
      {children}
    </a>
  );
}

export default Icon;

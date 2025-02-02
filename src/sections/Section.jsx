// Section

function Section({ id, style = "", children }) {
  return (
    <section id={id} className={`section ${style} w-full`}>
      {children}
    </section>
  );
}

export default Section;

const section = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default section;

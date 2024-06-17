function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/Geoschu",
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/george-schultz-10881b311/",
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/25603935/george-schultz",
    },
  ];

  return (
    <footer className="flex-row px-1">
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
}

export default Footer;

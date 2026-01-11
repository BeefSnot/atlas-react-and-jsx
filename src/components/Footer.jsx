import links from '../assets/links.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        {links.map((linkData, index) => (
          <li key={index}>
            <a href={linkData.link} target="_blank" rel="noreferrer">
              {linkData.label}
            </a>
          </li>
        ))}
      </ul>
        <p>© {currentYear} Atlas School</p>
    </footer>
  );
};

export default Footer;

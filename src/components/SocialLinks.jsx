import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/james-hamby/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://github.com/beefsnot/atlas-react-and-jsx" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialLinks;

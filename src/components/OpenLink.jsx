import open from '../assets/open.svg';

const OpenLink = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={open} alt="Open" />
    </a>
  );
};

export default OpenLink;

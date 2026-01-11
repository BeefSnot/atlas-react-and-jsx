import copy from '../assets/copy.svg';

const CopyLink = ({ link }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <img 
      src={copy} 
      alt="Copy" 
      className="copy" 
      onClick={handleCopy} 
    />
  );
};

export default CopyLink;

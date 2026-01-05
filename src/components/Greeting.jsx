import day from '../assets/day.svg';
import evening from '../assets/evening.svg';
import night from '../assets/night.svg';

const Greeting = () => {
  const date = new Date();
  const hour = date.getHours();
  let image;
  let text;

  if (hour >= 6 && hour < 12) {
    image = day;
    text = "Good Morning!";
  } else if (hour >= 12 && hour < 17) {
    image = day;
    text = "Good Afternoon!";
  } else if (hour >= 17 && hour < 21) {
    image = evening;
    text = "Good Evening!";
  } else {
    image = night;
    text = "Good Night!";
  }

  return (
    <h1 className="greeting">
      <img src={image} alt={text} />
      {text}
    </h1>
  );
};

export default Greeting;

import Header from './components/Header';
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is react?">
        <p>
          React is a popular JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and manage the state of their applications efficiently. react uses a virtual DOM to optimize updates and rendering, making applications fast and responsive.
        </p>
      </Section>
      <Section title="Benefits of react">
        <ul>
          <li>Component-Based Architecture used for building encapsulated components that manage their own state.</li>
          <li>Virtual DOM which improves performance by updating only the changed parts of the real DOM.</li>
          <li>Declarative UI which makes code more readable and easier to debug.</li>
          <li>Huge Ecosystem and Community support providing a vast number of libraries and tools.</li>
          <li>Learn Once, Write Anywhere allowing development for web, mobile (React Native), and desktop.</li>
        </ul>
      </Section>
      <Section title="Helpful resources">
        <HelpfulResource 
          label="Official React Documentation" 
          link="https://react.dev" 
        />
        <HelpfulResource 
          label="React Tutorial" 
          link="https://react.dev/learn/tutorial-tic-tac-toe" 
        />
        <HelpfulResource 
          label="Thinking in React" 
          link="https://react.dev/learn/thinking-in-react" 
        />
      </Section>
    </div>
  );
}

export default App;

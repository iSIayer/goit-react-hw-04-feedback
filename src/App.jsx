import 'modern-normalize';
import { useState } from 'react';
import { Container } from './components/common/Container.styled';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbacOptions/FeedbackOptions';
import { Notification } from './components/Notification/Notification';
import { Statistics } from './components/Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(() => {
    return JSON.parse(window.localStorage.getItem('good')) ?? 0;
  });
  const [neutral, setNeutral] = useState(() => {
    return JSON.parse(window.localStorage.getItem('neutral')) ?? 0;
  });
  const [bad, setBad] = useState(() => {
    return JSON.parse(window.localStorage.getItem('bad')) ?? 0;
  });

  const handleIncrement = event => {
    switch (event.target.textContent) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        window.localStorage.setItem('good', good + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutal => prevNeutal + 1);
        window.localStorage.setItem('neutral', neutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        window.localStorage.setItem('bad', bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositivePercentage = () =>
    Math.floor((good * 100) / countTotalFeedback());

  const options = ['good', 'neutral', 'bad'];

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositivePercentage()}
          />
        )}
      </Section>
    </Container>
  );
}

// export function App() {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleLeaveFeedback = event => {
//     switch (event.target.textContent) {
//       case 'good':
//         setGood(prevGood => prevGood + 1);
//         break;

//       case 'neutral':
//         setNeutral(prevNeutal => prevNeutal + 1);
//         break;

//       case 'bad':
//         setBad(prevBad => prevBad + 1);
//         break;

//       default:
//         return;
//     }
//   };

//   const countTotalFeedback = () => good + neutral + bad;
//   // const total = countTotalFeedback();

//   const countPositiveFeedbackPercentage = () =>
//     Math.floor((good * 100) / countTotalFeedback());

//   const state = ['good', 'neutral', 'bad'];
//   return (
//     <Container>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={state}
//           onLeaveFeedback={handleLeaveFeedback}
//         />
//       </Section>
//       <Section title="Statistics">
//         {countTotalFeedback() === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         )}
//       </Section>
//     </Container>
//   );
// }

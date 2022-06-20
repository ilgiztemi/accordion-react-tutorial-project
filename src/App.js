import { useState } from 'react';
import './App.css';
import data from './components/data'
import Question from './components/Question';

function App() {
  const [items, setItems] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question And Answers About Login</h3>
        <section className='info'>
          {
            items.map(el => {
              return (
                <Question key={el.id} {...el} />
              )
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;

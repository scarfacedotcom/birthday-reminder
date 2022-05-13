import { useState } from 'react';
import '../app.css'
import {data} from '../data'

const App = () => {


  const [people, setPeople] = useState(data)
  return (
    <main>
      <h1> {people.length} birthdays today</h1>
        {people.map((person) => {
          const { id, name, age, image } = person

          return (
            <div className="container" key = {id}>
              <div className="profile">
                <div>
                  <img src={image} alt="name" />
                </div>
                <div>
                  <h3>{name}</h3>
                </div>
                <div >
                  <h3>{age} years</h3>
                </div>
              </div>
              
            </div>
          )
        })}

      
      <button onClick={() => setPeople([]) }>Clear All</button>
    </main>
  );
}
 
export default App;
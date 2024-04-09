import React, { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)

  const clearBtn = ()=>{
    setPeople([]);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button className='btn btn-block' onClick={clearBtn}>clear all</button>
      </section>
    </main>
  )
}
export default App

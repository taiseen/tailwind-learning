import { useState } from 'react';
import { Navbar, Product } from './components';
import { data } from './constants';

function App() {

  const [filter, setFilter] = useState('all');

  const filterHandler = (item) => {
    setFilter(item);
  }

  return (

    <main className="all min-h-screen bg-gray-200 p-2 lg:p-8">

      <Navbar filterHandler={filterHandler} filter={filter} />

      <section className="flex items-center justify-center flex-wrap">
        {
          filter === 'all'
            ? data.pictureDB.slice(0).reverse().map(item => <Product key={item.title} item={item} />)
            : data.pictureDB.map(item => item.tag === filter
              && <Product key={item.title} item={item} />)
        }
      </section>

    </main>
  );

}

export default App;

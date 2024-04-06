import './SearchBar.scss'
import { useState } from 'react'

const SearchBar = () => {
  const types = ['buy', 'rent']
  const [query, setQuery] = useState({
    type: 'buy',
    city: '',
    minPrice: 0,
    maxPrice: 0,
  })

  const changeType = value => setQuery({ ...query, type: value })

  return (
    <div className='searchBar'>
      <div className='type'>
        {types.map(type => (
          <button
            key={type}
            className={query.type === type ? 'active' : ''}
            onClick={() => changeType(type)}>
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type='text' placeholder='City Location' />
        <input
          type='number'
          name='minPrice'
          min={0}
          max={10000000}
          placeholder='Min Price'
        />
        <input
          type='number'
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Max Price'
        />
        <button>
          <img src='/search.png' alt='' />
        </button>
      </form>
    </div>
  )
}

export default SearchBar

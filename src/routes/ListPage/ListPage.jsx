import { Card, Filter } from '../../components'
import './ListPage.scss'
import { listData } from '../../lib/dummydata'

const ListPage = () => {
  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className='wrapper'>
          <Filter />
          {listData?.map(data => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div className='mapContainer'>Map</div>
    </div>
  )
}

export default ListPage

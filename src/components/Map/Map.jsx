import './Map.scss'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Pin from '../Pin/Pin'

const Map = ({ items }) => {
  return (
    <MapContainer
      className='map'
      center={[52.4797, -1.90269]}
      zoom={13}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {items.map(item => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  )
}

export default Map

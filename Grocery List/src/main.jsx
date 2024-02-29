import { createRoot} from 'react-dom/client';
import {StrictMode, useState} from 'react';


const Header = ({title, itemTotal}) => {
  return (
    <header>
      <h1>{title}</h1>
      <span className='total-items'>Items: {itemTotal}</span>
    </header>
  )
}

const Item = (props) => {

  return (
    <div className='item'>
      <button className='remove-item' onClick={() => props.removeItem(props.id)}/>
      <span className='item-name'>{props.name}</span>
      <Counter />
    </div>
  )
}

const Counter = () => {

  const [quantity, setQuantity] = useState(0)

  const incrementQty = () => {
    setQuantity(pevQuantity => pevQuantity + 1)
  }

  const decrementQty = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity(pevQuantity => pevQuantity - 1)
  }

  return (
    <div className='quantity'>
    <span className='qty-label'>QTY</span>
    <button className='increment' onClick={incrementQty}>+</button>
    <button className='decrement' onClick={decrementQty}>-</button>
    <span className='quantity-amount'>{quantity}</span>
  </div>
  )
}

const App = () => {
const [items, setItems] = useState([
{
  name: 'Apples',
  id: 1
},
{
  name: 'Bananas',
  id: 2
},
{
  name: 'Pasta',
  id: 3
},
{
  name: 'Water',
  id: 4
}
])

const deleteItem = (id) => {
  setItems(prevItems => prevItems.filter(i => i.id != id))
}

  return (
    <div className='grocery-list'>
      <Header title='Shopping List' itemTotal={items.length}/>

      {items.map(item => 
        <Item 
          name={item.name}
          id={item.id}
          key={item.id}
          removeItem={deleteItem}
          />
      )}
      
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
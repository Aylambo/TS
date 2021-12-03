import CartItem from '../CartItem/CartItem'
import { Wrapper } from './Cart.styles'
import {CartItemType} from '../../App'

type Props = {
    cartItems: CartItemType[],
    addToCart: (clickedItem: CartItemType) => void,
    removeFromCart: (id: number) => void,
}


const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {
    const calcTotal = (items: CartItemType[]) =>
        items.reduce((acc: number, item) => acc + item.amount *  item.price, 0)
    return (
        <Wrapper>
            <h2>Youre Cart</h2>
            {cartItems.length === 0 ? <p>No Items in Cart</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}

            <h2>Total Amount: ${calcTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart

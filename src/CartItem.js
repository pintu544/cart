import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:333,
            title:"phone",
            Qty:1,
            img:'ok'
        }
       // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity =()=>{
        console.log('this',this.state);
    }

    render(){
        const{price,title,qty}=this.state;
        return (
            <div className='cart-item'>
            <div className='left-block'> 

            <img style={styles.image}/>
            </div>

            <div className='right-block'> 

            <div style={{fontSize:25}}>{title} </div>
            <div style={{color:'#777'}}> Rs {price}</div>
            <div style={{color:'#777'}}>Qty {qty}</div>
            <div className='cart-item-actions'> </div>
            <div className='cart-item-actions'>
                <img alt='increase' 
                className='action-icons'
                 src='https://img.icons8.com/ios-glyphs/50/000000/plus--v1.png'
                 onClick={this.increaseQuantity}/>
                <img alt='decrease' 
                className='action-icons' 
                src='https://img.icons8.com/ios-filled/50/000000/minus.png'
                />
                <img alt='delete' 
                className='action-icons' 
                src='https://img.icons8.com/ios-glyphs/50/000000/filled-trash.png'
                />

            {/* Buttons */}
            </div>
            </div>
             </div>
        );
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadios:4,
        background:'#ccc'
    }
}
export default CartItem;
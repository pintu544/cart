import React from 'react';
class CartItem extends React.component{
    render(){
        return (
            <div className='cart-item'>
            <div className='left-block'> 

            <img style={styles.image}/>
            <div className='right-block'> 

            <div style={{fontSize:25}}>phone </div>
            <div style={{color:'#777'}}> rs 8964413</div>
            <div style={{color:'#777'}}>qty:1 </div>
            <div className='cart-item-actions'> </div>
            {/* Buttons */}
            </div>
            </div> </div>
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
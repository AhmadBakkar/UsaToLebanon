import React from 'react';

export default function Cart(props) {

  
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        
        
          <div  className="row">
            <div className="col-2">afs</div>
            <div className="col-2">
              <button  className="remove">
                -
              </button>{' '}
              <button className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
             
            </div>
          </div>
     

        
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right"></div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right"></div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong></strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button >
                Checkout
              </button>
            </div>
          </>
      
      </div>
    </aside>
  );
}
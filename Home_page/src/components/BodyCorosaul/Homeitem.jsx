import React from 'react'

const Homeitem = ({img,title,weight,discountprice, actualprice}) => {
  return (
    
          <div className="items-info">
                      <div className='product-img'>
                          <img src={img} alt="" />
                          <i className="material-icons">
                              add</i>
                      </div>

                      <div className="description">
              <p className='title-main'>{title}</p>
                          <p className='title-desc'>
                            {weight}
                          </p>
                          <span className='title-discount-price'>
                  {discountprice}
                          </span>
                          <span className='title-actual-price'>
                          {actualprice}
                          </span>
          </div>
          </div>
                        
  )
}

export default Homeitem
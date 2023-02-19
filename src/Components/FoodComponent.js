import React from 'react'

const FoodComponent = ({ foodName, image_url }) => {
    return (
        <div className='card'>
            <div className='card-title'>
                <img src={image_url} alt={foodName} />
            </div>

            <div className='card-body'>
                {foodName}
            </div>
        </div>
    )
}

export default FoodComponent

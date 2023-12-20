import React from 'react'

export default function Card(name, title, imageUri) {
    return (
        <div>
            <div>
                <h2>Weihnachtsmann</h2>
                <h4>Genauso, wie sich Kinder ihn vorstellen: gemütlich, freundlich und gerecht.</h4>
            </div>
            <div>
                <img src={imageUri} alt=''/>
            </div>
        </div>
    )
}

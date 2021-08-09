import React, { Fragment } from 'react'
import '../css/tableinfo.css'

function TableInfo(props) {



    return (
        <Fragment>

            <div class="form-group">
                <label for="degree">Tesla :{props.tesla} [ kg⋅s-²⋅A-¹]</label>
                <input
                    type="range"
                    min={1}
                    max={45.00}
                    step={1}
                    value={props.barlength}

                    onChange={(event) => {
                        props.setTesla(event.target.valueAsNumber);
                    }}
                />
            </div>
            <div class="form-group">
                <label for="degree">Width :{props.width} [mm]</label>
                <input
                    type="range"
                    min={50}
                    max={300}
                    step={50}
                    value={props.width}

                    onChange={(event) => {
                        props.setWidth(event.target.valueAsNumber);
                    }}
                />
            </div>

            <div class="form-group">
                <label for="degree">Height :{props.height} [mm] </label>
                <input
                    type="range"
                    min={75}
                    max={125}
                    step={5}
                    value={props.height}

                    onChange={(event) => {
                        props.setHeight(event.target.valueAsNumber);
                    }}
                />
            </div>
            <div class="form-group">
                <label for="degree">Frequenz :{props.frequenz} [Hertz] </label>
                <input
                    type="range"
                    min={30}
                    max={100}
                    step={10}
                    value={props.frequenz}

                    onChange={(event) => {
                        props.setFrequenz(event.target.valueAsNumber);
                    }}
                />
            </div>

            <div class="form-group">
                <label for="degree">Your current Period :{parseFloat(props.frequenz/60 ).toFixed(2)} [s] </label>
                <label for="degree">Your current Frequenz :{props.frequenz } [Hertz] </label>
                
            </div>


        
        </Fragment>
    )
}

export default TableInfo

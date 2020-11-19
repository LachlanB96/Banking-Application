import React from 'react'
import Timer from './Timer'

export const Header = () => {
    return(
        <div className="header">
            <div className="row">
                <div className="col-sm-2">
                    <Timer />
                </div>
                <div className="col-sm-8">
                    <h1>React With NodeJS</h1>
                </div>
                <div className="col-sm-2">
                    <Timer />
                </div>
            </div>
        </div>
    )
}
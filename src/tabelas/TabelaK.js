import React from 'react'

const TabelaK = (props) => 
    <tr>
        <td className="row">
            <div className="col s7 offset-s2">
                {props.tam}</div>
        </td>
        <td className="row">
            <div className="col s7 offset-s2">
                {props.cod}</div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxLength="4"
                    name={props.FF}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxLength="4"
                    name={props.PB}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxLength="4"
                    name={props.BF}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxLength="4"
                    name={props.DB}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxLength="4"
                    name={props.BC}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxLength="4"
                    name={props.PT}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxLength="4"
                    name={props.BG}></input>
            </div>
        </td>
    </tr>

export default TabelaK

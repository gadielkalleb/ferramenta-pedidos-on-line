import React from 'react'

const TabelaK = props => <tbody>
    <tr>
        <td className="row">
            <div className="col s7 offset-s2">
                ${props.tamanho}</div>
        </td>
        <td className="row">
            <div className="col s7 offset-s2">
                ${props.codblindex}</div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxlength="4"
                    name={props.cod_sbm_blindex_FF}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxlength="4"
                    name={props.cod_sbm_blindex_PB}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxlength="4"
                    name={props.cod_sbm_blindex_BF}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxlength="4"
                    name={props.cod_sbm_blindex_DB}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxlength="4"
                    name={props.cod_sbm_blindex_BC}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxlength="4"
                    name={props.cod_sbm_blindex_PT}></input>
            </div>
        </td>
        <td className="row">
            <div className="input-field col s7 offset-s2">
                <input
                    className=" center-align"
                    type="number"
                    maxlength="4"
                    name={props.cod_sbm_blindex_BG}></input>
            </div>
        </td>
    </tr>
</tbody>

export default TabelaK

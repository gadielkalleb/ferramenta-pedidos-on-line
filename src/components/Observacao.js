import React from 'react'

const Obs = props => <div className="row container">
    <div className="input-field col s12">
        <textarea id="observacao" className="materialize-textarea" data-length="120"></textarea>
        <label htmlFor="observacao">Observação</label>
    </div>
</div>

export default Obs
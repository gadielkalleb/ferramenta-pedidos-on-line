import React from 'react'

const Obs = props => <div class="row container">
    <form class="card col s12">
        <div class="row">
            <div class="input-field col s12">
                <textarea id="observacao" class="materialize-textarea" data-length="120"></textarea>
                <label for="observacao">Observação</label>
            </div>
        </div>
    </form>
</div>

export default Obs
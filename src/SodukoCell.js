import React, { useState } from 'react';

function SodukoCell(props) {
    const [isClue, _] = useState(props.value != " ")

    return <div className={'sodukoCell ' + (isClue ? "clueCell" : "")}>
        <input type="number" value={props.value} disabled={isClue} min={1} max={9} 
            onChange={(e)=>props.onChange(props.row, props.column, e.target.value)} />
    </div>
}

export default SodukoCell;
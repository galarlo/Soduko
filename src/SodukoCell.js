import React, { useState, useRef, useEffect } from 'react';
import listenForOutsideClick from './listenForOutsideClicks'
import CellHints from './CellHints';

export default function SodukoCell(props) {
    const [isClue, _] = useState(props.value != " ")
    const ref = useRef(null);
    const [listeningForOutsideClick, setListeningForOutsideClick] = useState(false);
    const [isShowHints, setIsShowHints] = useState(false);
    const toggle = () => setIsShowHints(!isShowHints);

    useEffect(listenForOutsideClick(
        listeningForOutsideClick,
        setListeningForOutsideClick,
        ref,
        setIsShowHints,
      ), [ref]);
    

    return <div ref={ref} className={'sodukoCell ' + (isClue ? "clueCell" : "")} onClick={toggle}>
        {isShowHints && <CellHints allowedNumbers={props.getHints(props.row, props.column)} onChange={(newValue) => props.onChange(props.row, props.column, newValue)}></CellHints>}
        <input type="number" value={props.value} disabled={isClue} min={1} max={9}
            onChange={(e) => props.onChange(props.row, props.column, e.target.value)} />
    </div>
}
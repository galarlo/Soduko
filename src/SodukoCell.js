import React, { useState, useRef, useEffect } from 'react';
import listenForOutsideClick from './listenForOutsideClicks'

function SodukoCell(props) {
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
        {isShowHints && <div className='cellHints z-50 absolute mt-8 bg-blue-300 rounded'>1 | 2 | 3</div>}
        <input type="number" value={props.value} disabled={isClue} min={1} max={9}
            onChange={(e) => props.onChange(props.row, props.column, e.target.value)} />
    </div>
}

export default SodukoCell;
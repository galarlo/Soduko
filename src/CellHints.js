import React, { useState } from 'react';

export default function CellHints(props) {
    return <div className='cellHints z-50 absolute mt-8 bg-blue-200 bg-opacity-75 rounded pt-1 pb-1 shadow-sm'>
    {props.allowedNumbers.map((number, i) =>
        <div key={`hint${i}`} className='inline mr-1 ml-1 bg-blue-300 hover:bg-blue-400 rounded-md hover:rounded-none 
        pl-1 pr-1 border border-1 border-gray-400' onClick={() => props.onChange(number)}>{number}</div>)}
    </div>
}
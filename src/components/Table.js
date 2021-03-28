import React from 'react';

export const HtmlElementAddClass = (tag, style) => {
    if (tag){
        tag.classList.add(style)
    }
}
export const HtmlElementRemoveClass = (tag, style) => {
    if (tag){
        tag.classList.remove(style)
    }
}

export const Table = ({setKey, board, isSolution}) => {
    const clickOnCell = (idx,index,item) =>{
        const deSelectedItem = document.getElementsByClassName('selected')[0]
        const selectedItem = document.getElementById(idx +'-'+index)
        if (!item.origin){
            setKey(idx,index)
            HtmlElementAddClass(selectedItem, 'selected')
            HtmlElementRemoveClass(deSelectedItem, 'selected')
        }
    }
    return (
        <table id='table'>
            <tbody>
            {
                board.map((row,idx)=>{
                    return (<tr key={idx} id={idx}>
                        {
                            row.map((item, index)=>{
                                return (
                                    <td key={index}
                                        id={idx +'-'+index}
                                        className={item.origin ? 'disabled' : ''}
                                        onClick={()=>{clickOnCell(idx,index,item)}}
                                    >
                                        <span className={item.origin ? '' : 'fill-num'}>
                                            {isSolution ? item.solver : item.value === 0 ? '' : item.value}
                                        </span>

                                    </td>
                                )
                            })
                        }
                    </tr>)
                })
            }
            </tbody>


        </table>
    );
}
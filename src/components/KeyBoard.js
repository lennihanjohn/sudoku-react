import React from 'react';
import _ from 'lodash'

export const KeyBoard = ({disabled, onClick}) => {
    return (
        <table className='key-board-container'>
            <tbody>
                <tr>
                    {
                        _.range(1, 10).map((item,index)=>{
                            return (
                                <td disabled={disabled && disabled}
                                    key={index}
                                    valign="center"
                                    className='item'
                                    onClick={()=>{onClick(item)}}
                                >
                                    {item}
                                </td>)
                        })
                    }
                </tr>

            </tbody>

        </table>
    );

}
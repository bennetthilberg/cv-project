import React, {useState} from 'react';
export default function EditBtn({handleEdit}){
    const [text, setText] = useState('Save');
    function toggleEdit(e){
        e.preventDefault();
        handleEdit();
        if(text === 'Save'){setText('Edit'); return}
        setText('Save');
    }
    return (
        <div className='edit' onClick={toggleEdit}>{text}</div>
    );
}
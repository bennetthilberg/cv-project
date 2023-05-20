import React, {useState} from 'react';
import EditBtn from './EditBtn'
export default function Personal(props){
    const [canEdit, setCanEdit] = useState(true);
    const [inputClass, setInputClass] = useState('inputEdit');
    function toggleEdit(){
        setCanEdit(!canEdit);
        if(inputClass === 'inputEdit'){
            setInputClass('inputSaved');
        }
        else{
            setInputClass('inputEdit');
        }
    }
    
    return(
        <div className="personal">
            <form action="">
                <input type="text" className={inputClass} placeholder='Name'/>
                <input type="text" className={inputClass} placeholder='Email'/>
                <input type="text" className={inputClass} placeholder='Phone'/>
            </form>
            <EditBtn handleEdit={toggleEdit}/>
        </div>
    );
}
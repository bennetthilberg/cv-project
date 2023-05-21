import React, {useState} from 'react';
export default function AddEdu(props){
    const addNewEdu = props.onAddEducation;
    const [formContent, setFormContent] = useState('');
    const [school, setSchool] = useState('');
    const [major, setMajor] = useState('');
    const [degree, setDegree] = useState('');
    function handleSubmit(e){
        setActive(false);
        e.preventDefault();
        addNewEdu(school, major, degree);
        setSchool('');
        setMajor('');
        setDegree('');
    }
    
    const [active, setActive] = useState(false);
    function toggleActive(){
        setActive(!active);
        /*console.log(active);
        if(!active){
            setFormContent(
                <form>
                    <input type="text" placeholder='School'/>
                    <input type="text" placeholder='Major'/>
                    <input type="text" placeholder='Degree'/>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            );
        }*/
    }
    return(
        <div className="addEdu">
            <button onClick={toggleActive}>Add</button>
            {active && 
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='School' value={school} onChange={e => setSchool(e.target.value)}/>
                    <input type="text" placeholder='Major' value={major} onChange={e => setMajor(e.target.value)}/>
                    <input type="text" placeholder='Degree' value={degree} onChange={e => setDegree(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            }
        </div>
    );
}
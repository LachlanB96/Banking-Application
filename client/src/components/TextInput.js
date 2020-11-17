import React from 'react'


const TextInput = ({ label, name, id, className, onChange }) => {

    if (name == null) {
        name = id;
    }

    return (

        <div>
            <label htmlFor="exampleInputEmail1">{label}</label>
            <input type="text" onChange={(e) => onChange(e)} className={className} name={name} id={id} placeholder={label} />
        </div>

    )
}

export default TextInput
import React from 'react'


const TextInput = ({ label, name, id, className, type, onChange }) => {

    if (name == null) {
        name = id;
    }

    if (type == null) {
        type = 'text'
    }

    return (

        <div>
            <label htmlFor="exampleInputEmail1">{label}</label>
            <input type={type} onChange={(e) => onChange(e)} className={className} name={name} id={id} placeholder={label} />
        </div>

    )
}

export default TextInput
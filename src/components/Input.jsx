import React from 'react';


export const Input = ({ 
                label, 
                type = 'text',
                name = '',
                value = '',
                placeholder = '...',
                onChange,
                required = false
            }) => {




    return ( 
        <>
            <div className='input-container'>

                { (label && required === true) ? 

                    // if there is a label and the field is require it adds * to it
                        <label className='font-semibold' htmlFor={name}>{label}<span>*</span> :</label> 
                        
                : (label) ?

                    // if the field isn't required
                        <label className='font-semibold' htmlFor={name} >{label}:</label> 

                : null }
                
                <input 
                    className="input-field font-light-italic"
                    id={name}
                    type={type} 
                    name={name} 
                    value={value} 
                    placeholder={placeholder} 
                    onChange={onChange} 
                    required={required}  
                />

            </div>
        </>
    );
}


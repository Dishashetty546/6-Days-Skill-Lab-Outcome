import React from "react";

export default function InputField({value, onChange, type, placeholder}){
    return(
        <div className="bg-gray-200 p-4 rounded-md shadow-md w-[400px]">
            <input
            type={type}
            className="w-full p-3"
            value={value}
            onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}
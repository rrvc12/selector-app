import { useState } from "react";

function EmojiSearch( {onSearch}){

    const [value, setValue] = useState('');

    function handleChange(e){
        setValue(e.target.value);
        onSearch(e);  
    }

    return(   
        <input className="input-search" type='text' onChange={handleChange} value={value}/>
    );

}

export default EmojiSearch;
import { useRef } from 'react';
import EmojiPicker from './EmojiPicker.js';

function EmojiPickerInput(){

    const refInput = useRef(null); 

    return(

        <div className='container-app'>
            <input className='input-main' ref={refInput}/>
            <EmojiPicker ref={refInput}/>
        </div>
    );
}

export default EmojiPickerInput;
import { forwardRef, useEffect, useRef, useState } from "react";
import { data as emojiList} from "./data";
import EmojiButton from "./EmojiButton";
import EmojiSearch from "./EmojiSearch";

import "../styles/EmojiPicker.scss"


export function EmojiPicker(inputRef){

    const [isOpen, setIsOpen] = useState(true);
    const [emojis, setEmojis] = useState(emojiList);

    const containerRef = useRef(null)

    useEffect(()=>{
        window.addEventListener('click', e=>{
            if(!containerRef.current.contains(e.target)){
                setIsOpen(false);
                setEmojis(emojiList);
            }
        })
    }, [])

    function handleClickOpen(){
        setIsOpen(!isOpen);
    }

    function handleSearch(e){
        e.preventDefault();
        const q = e.target.value.toLowerCase();

        if(!!q){
            const search = emojiList.filter((emoji)=>{
                return (
                    emoji.name.toLowerCase().includes(q) ||
                    emoji.keywords.toLowerCase().includes(q)
                );
            });
            setEmojis(search);
        } else {
            setEmojis(emojiList);
        }
    }

    // function Container(){
    //     return (
    //         <div>
    //             <EmojiSearch onSearch={handleSearch}/>
    //             <div>
    //                 {emojis.map((emoji)=>(
    //                     <div key={emoji.symbol}>{emoji.symbol}</div>
    //                 ))}
    //             </div>
    //         </div>
            
    //     );
        
    // }

    function handleOnClickEmoji(emoji){
        const cursorPos = inputRef.current.selectionStart;
        const text = inputRef.current.value;
        const prev = text.slice(0, cursorPos);
        const next = text.slice(cursorPos);

        inputRef.current.value = prev + emoji.symbol + next;
        inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
        inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
        inputRef.current.focus();
    }

    return(
        <div ref={containerRef}>
            <button onClick={handleClickOpen}>🙂</button>
            {isOpen ? 
            <div>
                <EmojiSearch onSearch={handleSearch}/>
                <div>
                    {emojis.map((emoji)=>(
                        <EmojiButton key={emoji.symbol} emoji={emoji} onClick={handleOnClickEmoji}/>
                    ))}
                </div>
            </div> 
                : ''}
        </div>
    );
}


export default forwardRef(EmojiPicker)

function EmojiButton({emoji, onClick}){

    function handleClick(){
        onClick(emoji);
    }
    return(
        <button className='emoji-element' onClick={handleClick}>{emoji.symbol}</button>  
    );

}

export default EmojiButton;
function Button({text,...buttonProps}){
    return(
        <button className="bg-[#FE8C00] rounded-[6.25rem] text-bold text-[white] w-[20.43rem] h-[3.25rem]" {...buttonProps}>{text}</button>
    )
}

export default Button;
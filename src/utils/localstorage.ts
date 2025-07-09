

export const GetLocalStorage=(key:string)=>{
    try {
        const info=localStorage.getItem(key)
        if(info!==null){
            return info
        }else{
            return null
        }
    } catch (error) {
        return error
    }

}
export const SetLocalStorage=(key:string,value:string)=>{
    try {
        localStorage.setItem(key,value)
    } catch (error) {
        return error
    }
}

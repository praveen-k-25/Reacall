const apiRequest = async (url='',optionObj=null,errMsg=null)=>{
    try{
        const response = await fetch(url,optionObj);  //optionObj =    get,post
        if(!response.ok) throw Error("Please Reload the App");
    } catch(err) {
        errMsg = err.message;
    } finally{
        return errMsg;
    }

}

export default apiRequest;
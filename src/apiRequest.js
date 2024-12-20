// CRUD OPERATION

const apiRequest = async (url='',optionObj=null,errMsg=null)=>{
   try{
        const response = await fetch(url,optionObj);
        if(!response.ok) throw Error("please reload the app")        
    } catch(err){
        errMsg = err.Message;
        console.warn(err);
        
   } finally{
        return errMsg;
   }

}

export default apiRequest;
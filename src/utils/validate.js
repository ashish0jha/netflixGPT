export const checkValidation=(name,email,password)=>{
    if(name){
        const isValidname=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

        if(!isValidname) return "Name is Invalid"
    }
    

    const isValidemail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isValidPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isValidemail) return "Email is Invalid"

    if(!isValidPassword) return "Password is Invalid"

    return null;
}
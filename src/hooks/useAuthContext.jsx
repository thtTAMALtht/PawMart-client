import { use } from "react"
import { AuthContext } from "../context/AuthContext"

const useAuthContext = ()=>{
    const contextInfo = use(AuthContext);
    return contextInfo;
}

export default useAuthContext;
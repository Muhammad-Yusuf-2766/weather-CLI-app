import getArguments from "./helpers/arguments.js";  // CommonJS dagi require ning ES dagi import yangi usuli
import {printError, printSuccess, printHelp} from "./services/log.services.js" // CommonJS dagi require ning ES dagi import yangi usuli
import { TOKEN_DICTIONARY, saveKeyValue } from "./services/storage.service.js";
import getWeather from './services/api.service.js'

const saveToken = async (token) => {
    if(!token.length) {
        printError(" Token Does not exist, retry:  -t [API_KEY] for saving token")
        return 
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token is saved!')
    } catch (error) {
        printError(error)
    }
   
}

const startCLI = () => {
    const args = getArguments(process.argv); 
    // console.log(args) 
    if(args.h) {
        // help
       printHelp();
    }

    if(args.s) {
        //save [city]
    }
    
    if(args.t) {
        //save token
        return saveToken(args.t)
    }
    // result response
    getWeather("Seoul")
};       

startCLI();

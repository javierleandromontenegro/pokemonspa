
import { 
       GET_POKE,       //ALL THE POKEMONS
    GET_POKEBYID,   // DETAILS BY ID
    CLEAR_ID,  // CLEAR STATE 
    GET_BYNAME, // DETAILS BY NAME
    FILTER_DBAPI, // filter by origins
    FILTER_TYPES,
    CLEAR_HOME, 
    ORDER_NAME,
    ORDER_ATTACK,
    POKE_POST,
    GET_TYPES,
 } from "../actions/actions"

const initialState = {
    entro : [],
    pokePermanent : [],
    types : [],
    pokemons : [], 
    pokeDetails : {},
    pokeOrigins : [],
    pokeTypes : [],
    pokeFilters : [],
    
}


const rootReducer = (state = initialState , action) => {
    switch(action.type){

        case GET_POKE : 
        let preSelected = action.payload.map((pk) => pk.types ).flat();
            const dataArr = new Set(preSelected);
            let allTypes = [...dataArr];
           let ended =  allTypes.filter((t) => typeof t == "string")
        return {
            ...state,
            pokePermanent : action.payload,
            pokemons : action.payload,
            pokeOrigins : action.payload,
            pokeTypes : action.payload,
            types : ended,
        }

        
            
        case GET_POKEBYID :
            return {
                ...state,
                pokeDetails : action.payload
            }

            case CLEAR_ID : 
            return {
                ...state,
                pokemons : state.pokePermanent,
                pokeDetails : {}
            }

        case GET_BYNAME : 
            return { ...state,
            pokemons : action.payload
            }
            
        case FILTER_DBAPI : 
        if(action.payload == "all") {return {...state}}
            if(action.payload == "Api"){

                let allApi = state.pokePermanent.filter((el) =>  el.dbCreated? false : true)
                let mixedFilters = allApi.filter((pk) => state.pokeTypes.includes(pk))
                return {
                      ...state,
                      pokemons: mixedFilters,
                      pokeOrigins : allApi,
                      pokeFilters: mixedFilters  
                }
            
            }
            if(action.payload == "Created"){
                let allApi = state.pokePermanent.filter((el) =>  el.dbCreated? true : false)
                let mixedFilters = allApi.filter((pk) => state.pokeTypes.includes(pk))
                return {
                      ...state,
                      pokemons: mixedFilters,
                      pokeOrigins : allApi,
                      pokeFilters: mixedFilters  

                }
            
                
            }
           

        case FILTER_TYPES : 
            if(action.payload == "all") {return {...state}}
          
                let typeSelected = state.pokePermanent.filter((el) => {
                    if(!el.dbCreated){
                        if(el.types[0] == action.payload || el.types[1] == action.payload){

                         return true 
                        }
                        else return false 
                    } 
                    else {
                        let acum = el.types.filter((t) => t.name == action.payload)
                            if(acum.length >0){
                            return true 
                            }
                            else {
                            return false 
                            }
                        }       
                    })
                
                let mixedFilters = typeSelected.filter((pk) => state.pokeOrigins.includes(pk))
                
                return {
                      ...state,
                      pokemons: mixedFilters,
                      pokeTypes: typeSelected ,
                      pokeFilters: mixedFilters 
                }
        
                
                case ORDER_NAME : 
                
               if(action.payload == "asc"){
                let poke = state.pokemons.slice()
                let ords = poke.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                })
            
                if(state.pokeFilters.length > 0 ) { return {...state , pokeFilters : ords , entro : "si  entro1"}}
                return {
                    ...state,
                    pokemons : ords
                    
                }   
            }

            if(action.payload == "desc"){
                let poke = state.pokemons.slice()
                let ords = poke.sort(function (a, b) {
                    if (b.name > a.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })
            
                if(state.pokeFilters.length > 0 ) { return {...state , pokeFilters : ords , entro : "si entro2"}}
                return {
                    ...state,
                    pokemons : ords
                    
                }   
            }

            case ORDER_ATTACK : 
            if(action.payload == "asc"){
                let poke = state.pokemons.slice()
                let ords = poke.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return 1;
                    }
                    if (b.attack > a.attack) {
                        return -1;
                    }
                    return 0;
                })
            
                if(state.pokeFilters.length > 0 ) { return {...state , pokeFilters : ords , entro : "si1 entro"}}
                return {
                    ...state,
                    pokemons : ords
                    
                }   
            }

            if(action.payload == "desc"){
                let poke = state.pokemons.slice()
                let ords = poke.sort(function (a, b) {
                    if (b.attack > a.attack) {
                        return 1;
                    }
                    if (a.attack > b.attack) {
                        return -1;
                    }
                    return 0;
                })
            
                if(state.pokeFilters.length > 0 ) { return {...state , pokeFilters : ords,  entro : "si2 entro"}}
                return {
                    ...state,
                    pokemons : ords
                   
                }   
            }

            case POKE_POST : 
            return {
                ...state,
                create : action.payload
            }

            case CLEAR_HOME : 
                return {
                    ...state,
                    pokemons : state.pokePermanent,
                    pokeOrigins : state.pokePermanent,
                    pokeTypes :state.pokePermanent,
                    pokeFilters : []
                }
                
                  

        default : {
            return {...state};
        }
    }

}


export default  rootReducer
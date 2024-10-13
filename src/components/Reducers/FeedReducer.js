import { useEffect } from "react"

const feedReducer = (state,action){
    switch (action.type){
        case "fetch":
            loading : {state.isLoading}
            return useEffect(()=>{
                fetch("http://localhost:8080/feeds")
                .then(res => res.json())
                .then(data => {feed : state.feeds})

                .catch(error => {
                    console.log("Error fetching feeds");  
                })
            },[])
    }
}
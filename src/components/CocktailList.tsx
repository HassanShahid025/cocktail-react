import { useGlobalContext } from "../Context"
import { Cocktail } from "./Cocktail"
import { Loading } from "./Loading"


export const CocktailList = () => {
    const { loading, cocktails } = useGlobalContext()!
    if(loading){
        return(
            <Loading/>
        )
    }
    if(cocktails.length < 1){
        return(
            <h2 className="section-title">
                no cocktails matched your search
            </h2>
        )
    }
    return(
        <section className="section">
            <h2 className="section-title">cocktails</h2>
            <div className="cocktails-center">
                {cocktails.map((item:any) => {
                    return(
                        <Cocktail key={item.id} {...item}/>
                    )
                })}
            </div>
        </section>
    )

}
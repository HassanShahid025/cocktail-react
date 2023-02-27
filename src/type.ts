export interface IAppContext{
    loading: boolean;
    searchTerm: string;
    cocktails: never[];
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface ICocktail {
    name: string;
    img: any;
    info: any;
    category: any;
    glass: any;
    instructions: any;
    ingredients: any[];
}
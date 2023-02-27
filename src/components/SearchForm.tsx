import { FormEventHandler, LegacyRef, useRef } from "react";
import { useGlobalContext } from "../Context";

export const SearchForm = () => {
//   const searchValue = useRef(null);
  const { setSearchTerm } = useGlobalContext()!;
  const searchCocktail = useRef<HTMLInputElement>(null);
  const handleSubmit = (e:any) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchCocktail}
            onChange={() => setSearchTerm(searchCocktail.current?.value!)}
          />
        </div>
      </form>
    </section>
  );
};

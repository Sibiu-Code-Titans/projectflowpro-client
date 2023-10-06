import { useGetPokemonByNameQuery } from "./data/reducers/homepageReducer/homepageApi";
import { useGetPikachuQuery } from "./data/reducers/homepageReducer/testApi";

const HomePage = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const {
    data: pikachuData,
    error: pikachuError,
    isLoading: pikachuIsLoading,
  } = useGetPikachuQuery("pikachu");

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      {pikachuError ? (
        <>Oh no, there was an error</>
      ) : pikachuIsLoading ? (
        <>Loading...</>
      ) : pikachuData ? (
        <>
          <h3>{pikachuData.species.name}</h3>
          <img
            src={pikachuData.sprites.front_shiny}
            alt={pikachuData.species.name}
          />
        </>
      ) : null}
    </div>
  );
};

export default HomePage;

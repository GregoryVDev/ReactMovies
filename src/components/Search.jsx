export const Search = () => {
  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR`
    );
  }, []);

  return (
    <div className="form-component">
      <div className="container-search">
        <form>
          <input type="text" placeholder="Entrez le titre d'un film" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top<span>➔</span>
          </div>
          <div className="btn-sort" id="BadToGood">
            Flop<span>➔</span>
          </div>
        </div>
      </div>
      <div className="result">RESULTAT</div>
    </div>
  );
};

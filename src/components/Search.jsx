export const Search = ({ setSearch }) => {
  return (
    <div className="form-component">
      <div className="container-search">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="GoodToBad">
            Top<span>➔</span>
          </div>
          <div className="btn-sort" id="BadToGood">
            <span>➔</span>Flop
          </div>
        </div>
      </div>
      <div className="result">RESULTAT</div>
    </div>
  );
};

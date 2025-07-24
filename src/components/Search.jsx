export const Search = () => {
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
    </div>
  );
};

export default function PlaceSearch({ iscllick, change }) {
    const changed = (e) => {
      const inputValue = e.target.value;
      change(inputValue);
    };
  
    return (
      <div id="modal" onClick={() => iscllick()}>
        <input
          onClick={(e) => {
            e.stopPropagation();
          }}
          type="text"
          id="placetosearch"
          placeholder="search"
        />
        <button onClick={() => change(document.getElementById('placetosearch').value)}>search</button>
      </div>
    );
  }
  
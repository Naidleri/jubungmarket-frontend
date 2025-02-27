const Pagination = () => {
    return (
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-0.5">
          <button className="px-3 py-3 bg-blue-950 rounded-s-2xl ">Prev</button>
          <button className="px-3 py-3 bg-blue-950">2</button>
          <button className="px-3 py-3 bg-blue-950 rounded-e-2xl ">Next</button>
        </div>
      </div>
    );
  };
  
  export default Pagination;
const Features = () => {
  return (
    <>
      <p className="mt-16 mb-5 border-2 border-dark-600"></p>
      <div className="mt-10 ">
        <p className="text-xl mb-10 ">FEATURES</p>
        <h1 className="text-5xl font-bold">WHAT I DO </h1>
        <div className="grid grid-cols-3">
            {Array(6)
              .fill(null)
              .map((x,index) => (
                <div key={index}>1</div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Features;

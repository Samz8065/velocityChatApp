const GenderSelector = () => {
  return (
    <div className="flex mt-2 gap-x-6">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input type="radio" name="radio-10" className="radio radio-info" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="radio" name="radio-10" className="radio radio-info" />
        </label>
      </div>
    </div>
  );
};
export default GenderSelector;

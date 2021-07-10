const Preview = ({ data, onPrevStep }) => {
  return (
    <div className="form-panel w-75">
      <div className="prev__panel">
        <ul className="py-5">
          {data?.map((input, index) => (
            <li key={index + 1} className="py-3">
              <>
                <strong>{input.label}</strong>
                {input.value}
              </>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button type="button" className="btn" onClick={onPrevStep}>
          Previous
        </button>
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Preview;

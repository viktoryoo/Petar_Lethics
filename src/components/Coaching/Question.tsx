type Props = {
  question: string;
  placeholder: string;
  required: boolean;
  options: boolean;
};

const Question: React.FC<Props> = ({
  question,
  placeholder,
  required,
  options,
}) => {
  return (
    <label className="block mb-6">
      <span className="text-gray-700">{question}</span>
      {options && (
        <div className="block mb-6">
          
          <div className="relative mt-3">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Weight loss</option>
              <option>Muscle Gain</option>
              <option>Strength Gain</option>
              <option>General Fitness</option>
              <option>Short Distance Running Endurance</option>
              <option>Long Distance Running Endurance</option>
              <option>Functional Fitness</option>
              <option>Calisthenics</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <textarea
        className="
            block
            w-full
            mt-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        placeholder={placeholder}
        rows={5}
        required={required}
      />
    </label>
  );
};

export default Question;

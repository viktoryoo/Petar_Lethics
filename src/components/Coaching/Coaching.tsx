import Question from "./Question";

const Coaching: React.FC = () => {
  return (
    <div className="w-full md:w-96 md:max-w-full mx-auto mt-14">
      <div className="p-6 border border-gray-300 sm:rounded-md bg-gradient-to-tr from-violet-600 to-purple-800">
        <form>
          <Question
            question="Why did you choose me to coach you?"
            placeholder="Tell me please ..."
            required={true}
            options={false}
          />
          <Question
            question="What is your main physical fitness goal? Choose one of the goals listed or add one."
            placeholder="Your main goal is ..."
            required={false}
            options={true}
          />
          <Question
            question="What are your expectations from the coaching?"
            placeholder="Express your expectations..."
            required={true}
            options={false}
          />
          <Question
            question="What are your long-term goals?"
            placeholder="What is your vision ..."
            required={true}
            options={false}
          />
          <Question
            question="Why did you decide to seek out professional help with your physical fitness goals?"
            placeholder="Tell me please ..."
            required={true}
            options={false}
          />
          <Question
            question="Do you have any current or past injuries?"
            placeholder="Write down you injuries ..."
            required={true}
            options={false}
          />
          <Question
            question="What is your current profession/job? "
            placeholder="Your profession/job is ..."
            required={true}
            options={false}
          />
          <Question
            question="Do you have any training experience?"
            placeholder="Your experience ..."
            required={true}
            options={false}
          />
          <Question
            question="How many times a week and how long can you affort to work out at one time? Example three times a week for 1h."
            placeholder="You can affort ..."
            required={true}
            options={false}
          />
          <div className="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Contact Me
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Coaching;

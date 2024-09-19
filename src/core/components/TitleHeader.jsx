/* eslint-disable react/prop-types */
const TitleHeader = ({ title, className }) => {
  return (
    <div>
      <h2 className={`text-slate-800 font-semibold text-[24px] ${className}`}>
        {title}
      </h2>
    </div>
  );
};

export default TitleHeader;

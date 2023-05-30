import React from "react";

const Categories = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div id="categories" className="pt-10 relative">
      <ul className="flex flex-row gap-4 flex-wrap">
        {data.map((item) => (
          <li
            key={item}
            onClick={() => {
              setBodyPart(item);
              window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
            }}
            className={`py-2 px-4 font-poppins font-semibold border-[2px] cursor-pointer shadow-lg hover:scale-110 ease-in-out duration-150 ${
              bodyPart === item
                ? "border-t-primary border-t-[4px]"
                : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

import { useEffect, useState } from "react";
import colorNameList from "color-name-list";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [colors, setColors] = useState<any>();

  const handleSearch = () => {
    let colorsList = colorNameList.filter((o) => {
      if (o.name.includes(inputValue)) console.log(o.name);

      return o.name.includes(inputValue);
    });

    setColors(colorsList);
  };

  console.log(colors);
  return (
    <div>
      <div className="flex justify-center items-center  mt-20">
        <input
          className="p-4 border"
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue text-white p-3 m-3 rounded-lg"
          disabled={inputValue === ""}
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-16 mt-8">
          {colors &&
            colors.map((d: any) => (
              <div
                style={{
                  backgroundColor: d.hex,
                  width: "160px",
                  height: "160px",
                  textAlign: "center",
                }}
              >
                {d.hex}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

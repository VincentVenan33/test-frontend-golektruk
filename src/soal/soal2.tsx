import { useState } from "react";
const data = [
  { id: 1, country: "United States" },
  { id: 2, country: "Canada" },
  { id: 3, country: "Mexico" },
  { id: 4, country: "Brazil" },
  { id: 5, country: "Argentina" },
  { id: 6, country: "United Kingdom" },
  { id: 7, country: "France" },
  { id: 8, country: "Germany" },
  { id: 9, country: "Italy" },
  { id: 10, country: "Spain" },
  { id: 11, country: "Russia" },
  { id: 12, country: "China" },
  { id: 13, country: "Japan" },
  { id: 14, country: "South Korea" },
  { id: 15, country: "India" },
  { id: 16, country: "Australia" },
  { id: 17, country: "South Africa" },
  { id: 18, country: "Egypt" },
  { id: 19, country: "Nigeria" },
  { id: 20, country: "Kenya" }
];

function Soal2() {
  // buatlah select box tanpa menggunakan plugin
  console.log(data);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClear = () => {
    setSelectedCountry(null);
    setIsDropdownOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px"
      }}
    >
      <div>
        <p
          style={{
            fontSize: "18px",
            color: "white"
          }}
        >
          value: {selectedCountry ? selectedCountry.country : ""}
        </p>

        <div>
          <div className="input-container" style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Select"
              value={selectedCountry ? selectedCountry.country : "Select"}
              onClick={handleDropdownClick}
              style={{
                backgroundColor: "white",
                padding: "8px",
                borderRadius: "8px",
                flex: 1
              }}
              readOnly
            />
            {selectedCountry && (
              <span
                className="clear-button"
                onClick={handleClear}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                  cursor: "pointer",
                  fontSize: "25px"
                }}
              >
                x
              </span>
            )}
          </div>
          {isDropdownOpen && (
            <ul
              style={{
                position: "absolute",
                backgroundColor: "white",
                zIndex: 1,
                width: "210px",
                borderRadius: "8px",
                padding: "0",
                margin: "0"
              }}
            >
              {data.map((country) => (
                <li
                  key={country.id}
                  onClick={() => handleSelect(country)}
                  style={{
                    padding: "5px",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "lightgray")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "white")
                  }
                >
                  {country.country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Ekspektasi hasil */}
      <iframe
        src="/soal2.mp4"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          border: "1px solid white"
        }}
      ></iframe>
    </div>
  );
}

export default Soal2;

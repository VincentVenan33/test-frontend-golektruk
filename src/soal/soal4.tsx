import { useState, useRef, useEffect } from "react";

// Soal Nomor 4
// Buatlah sebuah website yang menampilkan daftar pokemon yang di load dengan infinite scroll

const BASE_URL = "https://pokeapi.co/api/v2";

const fetchPokemon = async (offset: number, limit: number) => {
  // fungsi untuk fetch data pokemon
  try {
    const response = await fetch(
      `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Gagal mendapatkan data Pokémon:", error);
    return [];
  }
};

const Soal4 = () => {
  const [pokemonList, setPokemonList] = useState<
    { name: string; url: string }[]
  >([]);
  //  Tambahkan state yang dibutuhkan
  // ...
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const theRef = useRef<HTMLDivElement | null>(null);

  // Fungsi untuk infinite scroll
  // ...
  const MuatlebihbanyakPokémon = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const newPokemon = await fetchPokemon(offset, 20); // Memuat 20 pokemon setiap kali
      if (newPokemon.length > 0) {
        setPokemonList((prevList) => [...prevList, ...newPokemon]);
        setOffset((prevOffset) => prevOffset + 20);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    if (theRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = theRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 50 && !isLoading) {
        MuatlebihbanyakPokémon();
      }
    }
  };

  useEffect(() => {
    MuatlebihbanyakPokémon();
  }, []);

  useEffect(() => {
    if (theRef.current) {
      theRef.current.addEventListener("scroll", handleScroll);
      return () => theRef.current?.removeEventListener("scroll", handleScroll);
    }
  }, [isLoading]);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh"
      }}
    >
      <div
        ref={theRef}
        style={{
          flexGrow: 1,
          color: "white",
          fontSize: "1.5em",
          textAlign: "center",
          fontFamily: "sans-serif",
          overflowY: "auto",
          maxHeight: "100vh"
        }}
      >
        <h1
          style={{
            fontWeight: "bolder"
          }}
        >
          Pokémon Infinite Scroll
        </h1>
        {/* list pokemon beserta loading */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {pokemonList.map((Pokémon, index) => (
            <li key={index} style={{ margin: "10px 0", fontSize: "1.2em" }}>
              {Pokémon.name}
            </li>
          ))}
        </ul>
        {isLoading && pokemonList.length === 0 && <p>Loading...</p>}
        {isLoading && pokemonList.length > 0 && <p>Loading more Pokémon...</p>}
      </div>
      <iframe
        src="/soal4.mp4"
        style={{
          height: "100vh",
          border: "1px solid white"
        }}
      ></iframe>
    </div>
  );
};

export default Soal4;

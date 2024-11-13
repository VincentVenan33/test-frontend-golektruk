import { useEffect, useState } from "react";

interface TipeData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function Soal3() {
  /**
   * ? 1. hilangkan semua error dan deskripsikan apa penyebab error.
   * ? 2. tampilkan data yang di panggil dari api tersebut...
   */

  return <SeachComponent />;
}

function SeachComponent() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<TipeData[]>([]);

  useEffect(() => {
    async function fetchData() {
      // Variabel search adalah sebuah string, bukan objek. Oleh karena itu, properti id tidak dapat diakses pada variabel tersebut. String tidak memiliki properti id

      // const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${search.id}`);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${search}`
      );
      const data = await response.json();
      console.log(data);
      // Terjadi kesalahan 'results.map is not a function' karena tipe data 'results' berubah dari array menjadi objek setelah proses fetching data dari API. Untuk mengatasi ini, kita perlu mengubah 'results' menjadi array of objects agar dapat diiterasi menggunakan method map

      // Data yang diperoleh dari API berupa objek, sehingga kita perlu mengubah struktur data 'results' menjadi array of objects. Hal ini memungkinkan kita untuk melakukan iterasi pada setiap elemen menggunakan method map

      // setResults(data)
      setResults(() => [data]);
    }

    if (search) fetchData();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((result) => (
          // Karena properti 'name' tidak ditemukan pada data yang diperoleh dari API, melainkan 'title', maka akses ke result.name akan menghasilkan kesalahan. Oleh karena itu, kita akan menggantinya dengan result.title
          // <li key={result.id}>{result.name}</li>
          <li style={{ color: "white" }} key={result.id}>
            {result.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

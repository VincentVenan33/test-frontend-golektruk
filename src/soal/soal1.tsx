import { useRef } from "react";

const Soal1 = () => {
  // 1. Buat kotak dibawah menjadi elemen drag and drop tanpa menggunakan plugin
  const divRef = useRef(null);

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const startY = e.clientY;
    const rect = divRef.current.getBoundingClientRect();
    const divX = rect.left;
    const divY = rect.top;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      divRef.current.style.left = divX + deltaX + "px";
      divRef.current.style.top = divY + deltaY + "px";
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <div
        ref={divRef}
        style={{
          backgroundColor: "#fff",
          width: 40,
          height: 40,
          borderRadius: "8px",
          position: "absolute",
          userSelect: "none"
        }}
        onMouseDown={handleMouseDown}
      />

      {/* Ekspektasi hasil */}
      <iframe
        src="/soal1.mp4"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          border: "1px solid white"
        }}
      ></iframe>
    </>
  );
};

export default Soal1;

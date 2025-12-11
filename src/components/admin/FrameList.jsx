// 📌 LIST SEMUA FRAME — TABEL STYLE SNAPPIE (FINAL)
export default function FrameList({ frames, onDelete }) {
  return (
    <div
      className="
        w-full max-w-[1500px]
        mt-8
        bg-white rounded-[12px]
        border-[2px] border-black
        shadow-[0_4px_0_#000]
        overflow-hidden
      "
    >
      {/* Header Tabel */}
      <div className="bg-snappiePink border-b-[2px] border-black grid grid-cols-6 font-semantic text-[13px] py-3 px-6">
        <span>Thumbnail</span>
        <span>Nama</span>
        <span>Jenis</span>
        <span>Harga</span>
        <span>Preview Frame</span>
        <span>Aksi</span>
      </div>

      {/* Data Loop */}
      {frames.map((frame) => (
        <div
          key={frame.id}
          className="
            grid grid-cols-6 items-center gap-3
            font-semantic text-[12px]
            py-4 px-6
            border-b border-black/20
          "
        >
          {/* 🖼 Thumbnail */}
          <img
            src={frame.thumb}
            alt={frame.namaFrame}
            className="w-[55px] h-[55px] object-cover rounded-[6px] border-[2px] border-black bg-white"
          />

          {/* Nama */}
          <span>{frame.namaFrame}</span>

          {/* Jenis */}
          <span className="text-[#4B5563]">
            {frame.jenis === "premium" ? "Premium" : "Gratis"}
          </span>

          {/* Harga */}
          <span>
            {frame.jenis === "gratis" ? "Rp 0" : `Rp ${frame.harga}.000`}
          </span>

          {/* Mini preview frameByStrip */}
          <div className="flex gap-2">
            {frame.frameByStrip?.[1] && (
              <img
                src={frame.frameByStrip[1]}
                className="w-[35px] h-[35px] border-2 border-black rounded"
              />
            )}
            {frame.frameByStrip?.[3] && (
              <img
                src={frame.frameByStrip[3]}
                className="w-[35px] h-[35px] border-2 border-black rounded"
              />
            )}
            {frame.frameByStrip?.[4] && (
              <img
                src={frame.frameByStrip[4]}
                className="w-[35px] h-[35px] border-2 border-black rounded"
              />
            )}
          </div>

          {/* Aksi (Edit/Delete) */}
          <div className="flex gap-3 text-[14px]">
            <button
              type="button"
              className="hover:scale-110 transition"
              onClick={() => alert("Feature edit soon")}
            >
              ✏️
            </button>

            <button
              type="button"
              onClick={() => onDelete(frame.id)}
              className="hover:scale-110 transition"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FrameAddForm({
  namaFrame, setNamaFrame,
  jenis, setJenis,
  harga, setHarga,
  setThumbnail,
  setFrame1,
  setFrame3,
  setFrame4,
  handleSubmit
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full max-w-[700px]
        bg-[#FFEB91]
        border-[3px] border-black 
        rounded-2xl 
        shadow-[0_5px_0_#000]
        p-8 mb-10
        font-roboto
      "
    >
      {/* Nama Frame */}
      <label className="text-[15px] font-medium mb-1 block">Nama Frame</label>
      <input
        type="text"
        placeholder="Masukkan nama frame..."
        value={namaFrame}
        onChange={(e) => setNamaFrame(e.target.value)}
        className="
          w-full h-[45px]
          border-[2px] border-black rounded-lg
          px-4 mb-4
        "
      />

      {/* Jenis Frame */}
      <label className="text-[15px] font-medium mb-1 block">Jenis Frame</label>
      <select
        value={jenis}
        onChange={(e) => setJenis(e.target.value)}
        className="
          w-full h-[45px] 
          border-[2px] border-black rounded-lg
          px-4 mb-4 bg-white
        "
      >
        <option value="gratis">Gratis</option>
        <option value="premium">Premium</option>
      </select>

      {/* Harga hanya muncul jika premium */}
      {jenis === "premium" && (
        <>
          <label className="text-[15px] font-medium mb-1 block">Harga Frame</label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="
              w-full h-[45px]
              border-[2px] border-black rounded-lg
              px-4 mb-4
            "
            placeholder="Masukkan harga..."
          />
        </>
      )}

      {/* Thumbnail */}
      <label className="text-[15px] font-medium mb-1 block">
        Thumbnail (Icon Frame)
      </label>
      <input
        type="file"
        onChange={(e) => setThumbnail(e.target.files[0])}
        className="
          w-full h-[45px] 
          border-[2px] border-black rounded-lg
          px-4 mb-4 bg-white
        "
      />

      {/* Frame Strip 1 */}
      <label className="text-[15px] font-medium mb-1 block">
        Frame Strip 1
      </label>
      <input
        type="file"
        onChange={(e) => setFrame1(e.target.files[0])}
        className="
          w-full h-[45px] 
          border-[2px] border-black rounded-lg
          px-4 mb-4 bg-white
        "
      />

      {/* Frame Strip 3 */}
      <label className="text-[15px] font-medium mb-1 block">
        Frame Strip 3
      </label>
      <input
        type="file"
        onChange={(e) => setFrame3(e.target.files[0])}
        className="
          w-full h-[45px] 
          border-[2px] border-black rounded-lg
          px-4 mb-4 bg-white
        "
      />

      {/* Frame Strip 4 */}
      <label className="text-[15px] font-medium mb-1 block">
        Frame Strip 4
      </label>
      <input
        type="file"
        onChange={(e) => setFrame4(e.target.files[0])}
        className="
          w-full h-[45px] 
          border-[2px] border-black rounded-lg
          px-4 mb-6 bg-white
        "
      />

      {/* Submit */}
      <button
        type="submit"
        className="
          w-full h-[50px]
          bg-snappieGreen
          border-[3px] border-black
          rounded-xl
          font-pixel text-[14px]
          hover:brightness-95 hover:scale-[0.98]
          transition-all
        "
      >
        Simpan Frame
      </button>
    </form>
  );
}

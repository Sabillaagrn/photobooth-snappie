export default function ColourList({ colours }) {
  return (
    <div
      className="
        w-full max-w-[1500px]
        bg-white rounded-[12px]
        border-[2px] border-black
        shadow-[0_4px_0_#000]
        overflow-hidden mt-10
      "
    >
      {/* Header */}
      <div
        className="
          bg-snappiePink border-b-[2px] border-black
          grid grid-cols-3 text-center
          font-semantic text-[13px]
          py-3 px-6
        "
      >
        <span>Preview</span>
        <span>Nama Colour</span>
        <span>Hex Code</span>
      </div>

      {/* Rows */}
      {colours.map((c) => (
        <div
          key={c.id}
          className="
            grid grid-cols-3 items-center justify-center text-center gap-3
            font-semantic text-[12px]
            py-4 px-6
            border-b border-black/20
          "
        >
          {/* Preview Color */}
          <div
            className="
              w-[50px] h-[50px]
              mx-auto rounded-[6px]
              border-[2px] border-black
            "
            style={{ backgroundColor: c.hex }}
          ></div>

          <span>{c.name}</span>
          <span>{c.hex}</span>
        </div>
      ))}
    </div>
  );
}

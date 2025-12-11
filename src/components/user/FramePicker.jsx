export default function FramePicker({ frames, selectedFrame, onPickFrame }) {
  return (
    <div className="w-[500px] bg-white rounded-[28px] shadow-2xl border-[2.5px] border-black overflow-hidden">

      <div className="bg-[#F4A9B8] px-6 py-3 border-b-2 border-black flex items-center justify-center">
        <h2
          className="font-press text-2xl text-[#FFE97F] tracking-wide"
          style={{ textShadow: "2px 4px 5px #000" }}
        >
          CHOOSE YOUR FRAME
        </h2>
      </div>

      <div className="p-10">
        <div className="bg-[#FFE97F] rounded-2xl border-[2.5px] border-black p-6">
          <div className="flex flex-wrap gap-9">

            {frames.map((f) => (
              <button
                key={f.id}
                onClick={() => onPickFrame(f)}
                className={`w-12 h-12 rounded-full border-[3px] overflow-hidden hover:scale-110 transition
                    ${selectedFrame?.id === f.id ? "ring-4 ring-black" : ""}`}
              >
                {f.type === "color" ? (
                  <div className="w-full h-full" style={{ backgroundColor: f.color }} />
                ) : (
                  <img src={f.thumb} className="w-full h-full object-cover" />
                )}
              </button>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

// src/pages/admin/ManageFrame.jsx
import { useState, useEffect } from "react";
import FrameAddForm from "../../components/admin/FrameAddForm";
import FrameList from "../../components/admin/FrameList";

// helper: File -> dataURL (base64)
const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export default function ManageFrame() {
  // POPUP
  const [showAddForm, setShowAddForm] = useState(false);

  // FORM STATE
  const [namaFrame, setNamaFrame] = useState("");
  const [jenis, setJenis] = useState("gratis");
  const [harga, setHarga] = useState("");
  const [thumb, setThumb] = useState(null);

  // FILE PER STRIP
  const [frame1, setFrame1] = useState(null);
  const [frame3, setFrame3] = useState(null);
  const [frame4, setFrame4] = useState(null);

  // DATA FRAME
  const [frames, setFrames] = useState([]);

  // LOAD DATA DARI LOCALSTORAGE
  useEffect(() => {
    const saved = localStorage.getItem("frames");
    if (saved) {
      setFrames(JSON.parse(saved));
    }
  }, []);

  // SIMPAN FRAME BARU
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ubah semua file jadi dataURL (kalau ada)
    const [thumbData, f1Data, f3Data, f4Data] = await Promise.all([
      thumb ? fileToDataUrl(thumb) : Promise.resolve(null),
      frame1 ? fileToDataUrl(frame1) : Promise.resolve(null),
      frame3 ? fileToDataUrl(frame3) : Promise.resolve(null),
      frame4 ? fileToDataUrl(frame4) : Promise.resolve(null),
    ]);

    const newFrame = {
      id: `FRM-${String(frames.length + 1).padStart(3, "0")}`,
      namaFrame,
      jenis,
      harga: jenis === "gratis" ? 0 : Number(harga || 0),

      // langsung simpan dataURL
      thumb: thumbData,
      frameByStrip: {
        1: f1Data,
        3: f3Data,
        4: f4Data,
      },
    };

    const updated = [...frames, newFrame];

    setFrames(updated);
    localStorage.setItem("frames", JSON.stringify(updated));

    // reset form
    setNamaFrame("");
    setJenis("gratis");
    setHarga("");
    setThumb(null);
    setFrame1(null);
    setFrame3(null);
    setFrame4(null);
    setShowAddForm(false);
  };

  // DELETE
  const handleDelete = (id) => {
    const updated = frames.filter((f) => f.id !== id);
    setFrames(updated);
    localStorage.setItem("frames", JSON.stringify(updated));
  };

  return (
    <>
      {/* POPUP FORM ADD FRAME */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[650px] bg-[#FFF3AA] border-[4px] border-black rounded-3xl shadow-[0_8px_0_#000]">
            {/* HEADER */}
            <div className="bg-snappiePink border-b-[4px] border-black rounded-t-3xl p-4 flex justify-between items-center">
              <h3 className="font-pixel text-[18px] text-[#FAE446]">
                Tambah Frame
              </h3>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-black font-bold text-[18px] hover:scale-110 transition"
              >
                ✖
              </button>
            </div>

            {/* FORM */}
            <div className="p-6">
              <FrameAddForm
                namaFrame={namaFrame}
                setNamaFrame={setNamaFrame}
                jenis={jenis}
                setJenis={setJenis}
                harga={harga}
                setHarga={setHarga}
                setThumbnail={setThumb}
                setFrame1={setFrame1}
                setFrame3={setFrame3}
                setFrame4={setFrame4}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="w-full min-h-[calc(100vh-76px)]">
        <h1 className="font-pixel text-[28px] mb-10">Manage Frame</h1>

        {/* ACTION BUTTON */}
        <div className="w-full bg-white border-2 border-black rounded-[12px] shadow-[0_4px_0_#000] px-12 py-6 flex justify-center gap-10">
          <button
            onClick={() => setShowAddForm(true)}
            className="w-[340px] h-[70px] font-pixel border-2 border-black rounded-[12px] bg-white hover:bg-snappiePink hover:text-white transition"
          >
            + Tambah Frame Baru
          </button>
        </div>

        {/* FRAME LIST */}
        <FrameList frames={frames} onDelete={handleDelete} />
      </div>
    </>
  );
}

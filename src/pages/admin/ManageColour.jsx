import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ColourAddForm from "../../components/admin/ColourAddForm";
import ColourList from "../../components/admin/ColourList";

export default function ManageColour() {
  const navigate = useNavigate();

  const [colours, setColours] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // LOAD COLOURS FROM STORAGE
  useEffect(() => {
    const saved = localStorage.getItem("colors");
    if (saved) {
      setColours(JSON.parse(saved));
    }
  }, []);

  // SAVE NEW COLOUR
  const handleAddColour = ({ name, hex }) => {
    const newColor = {
      id: `CLR-${String(colours.length + 1).padStart(3, "0")}`,
      name,
      hex,
    };

    const updated = [...colours, newColor];
    setColours(updated);
    localStorage.setItem("colors", JSON.stringify(updated));

    setShowAddForm(false);
  };

  return (
    <div className="w-full min-h-[calc(100vh-76px)] px-10 pt-10">

      <h1 className="font-pixel text-[28px] mb-8">Manage Colour</h1>

      {/* Tabs */}
      <div className="flex gap-6 mb-6">
        <button
          onClick={() => navigate("/admin/frame")}
          className="w-[150px] h-[55px] border-[2px] border-black rounded-[14px]
          font-pixel bg-white hover:bg-snappiePink hover:text-white transition"
        >
          Frame
        </button>

        <button
          className="w-[150px] h-[55px] border-[2px] border-black rounded-[14px]
          font-pixel bg-snappiePink text-white shadow-[0_4px_0_#000]"
        >
          Colour
        </button>
      </div>

      {/* ACTION BAR */}
      <div className="w-full bg-white border-2 border-black rounded-[12px] shadow-[0_4px_0_#000] px-12 py-6 flex justify-center gap-10 mb-4">
        <button
          onClick={() => setShowAddForm(true)}
          className="w-[300px] h-[65px] font-pixel border-[2px] border-black
          rounded-[10px] bg-white hover:bg-snappiePink hover:text-white 
          shadow-[0_4px_0_#000] transition"
        >
          + Tambah Colour
        </button>
      </div>

      {/* LIST */}
      <ColourList colours={colours} />

      {/* POPUP */}
      {showAddForm && (
        <ColourAddForm
          onClose={() => setShowAddForm(false)}
          onSave={handleAddColour}
        />
      )}
    </div>
  );
}

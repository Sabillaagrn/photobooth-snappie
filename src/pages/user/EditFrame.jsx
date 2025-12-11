// EditFrame.jsx
import { useState } from "react";
import { useLocation } from "react-router-dom";
import FramePicker from "../../components/user/FramePicker";
import FramePreview from "../../components/user/FramePreview";
import { ALL_FRAMES } from "../../data/frameLists";

export default function EditFrame() {
  const location = useLocation();
  const photos = location.state?.photos || [];
  const [selectedFrame, setSelectedFrame] = useState(null);

  const stripCount = Math.min(photos.length, 4);

  // Konversi ukuran ke pixel
  const CM = 37.79527559;
  const CONFIG = {
    4: { width: 8.87 * CM, height: 4.9 * CM, x: 0.84 * CM, yStart: 2 * CM, gap: 0.7 * CM, frameWidth: 10.5 * CM, frameHeight: 29.7 * CM },
    3: { width: 8.87 * CM, height: 5 * CM, x: 0.85 * CM, yStart: 1.2 * CM, gap: 1.4 * CM, frameWidth: 10.5 * CM, frameHeight: 22.5 * CM },
    2: { width: 8.87 * CM, height: 9.5 * CM, x: 0.84 * CM, yStart: 4 * CM, gap: 1.5 * CM, frameWidth: 10.5 * CM, frameHeight: 29.7 * CM },
    1: { width: 12.5 * CM, height: 8.5 * CM, x: 0.8 * CM, yStart: 1 * CM, gap: 0, frameWidth: 14 * CM, frameHeight: 10.5 * CM }
  };

  const SLOT = CONFIG[stripCount];

  // =====================================================
  // HANDLE DOWNLOAD
  // =====================================================
  const handleDownload = async () => {
    if (!selectedFrame) return alert("Pilih frame dulu!");

    const canvas = document.createElement("canvas");
    canvas.width = SLOT.frameWidth;
    canvas.height = SLOT.frameHeight;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Photos
    for (let i = 0; i < stripCount; i++) {
      const img = new Image();
      img.src = photos[i];

      await new Promise((resolve) => {
        img.onload = () => {
          const scale = Math.max(SLOT.width / img.width, SLOT.height / img.height);
          const w = img.width * scale;
          const h = img.height * scale;

          const x = SLOT.x + (SLOT.width - w) / 2;
          const y = SLOT.yStart + i * (SLOT.height + SLOT.gap) + (SLOT.height - h) / 2;

          ctx.drawImage(img, x, y, w, h);
          resolve();
        };
      });
    }

    // Find frame data
    const frameData = ALL_FRAMES.find(f => f.id === selectedFrame.id);
    if (!frameData) return alert("Frame tidak ditemukan!");

    // FRAME WARNA
    if (frameData.type === "color") {
      ctx.strokeStyle = frameData.color;
      ctx.lineWidth = 30;
      ctx.strokeRect(0, 0, SLOT.frameWidth, SLOT.frameHeight);
    }

    // FRAME GAMBAR
    if (frameData.type === "image") {
      const frameImg = new Image();
      frameImg.src = frameData.frameByStrip[stripCount];

      await new Promise((resolve) => {
        frameImg.onload = () => {
          ctx.drawImage(frameImg, 0, 0, SLOT.frameWidth, SLOT.frameHeight);
          resolve();
        };
      });
    }

    // Download
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `photobooth-${frameData.id}.png`;
    link.click();
  };

  // =====================================================
  // RETURN UI
  // =====================================================
  return (
    <div
      className="min-h-screen bg-[#FFF3D8] flex items-start justify-center p-20 gap-16"
      style={{
        backgroundImage: "url(/webImage/Camera.png)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      {/* PREVIEW AREA */}
      <div className="scale-75 origin-top flex flex-col items-center gap-4">
        <FramePreview
          photos={photos}
          selectedFrame={selectedFrame}
          stripCount={stripCount}
        />
      </div>

      {/* PICKER + BUTTONS */}
      <div className="self-start flex flex-col items-center gap-4">
        <FramePicker
          frames={ALL_FRAMES}
          selectedFrame={selectedFrame}
          onPickFrame={setSelectedFrame}
        />

        <div className="flex gap-8">
          <button
            onClick={handleDownload}
            disabled={photos.length === 0}
            className="font-press mt-4 px-10 py-2 rounded-[15px] font-bold border-[2.5px] border-black shadow-lg transition bg-[#FFE97F] hover:scale-105 disabled:bg-[#BBDA97] disabled:cursor-not-allowed"
          >
            Download
          </button>

          <button
            onClick={() => window.history.back()}
            className="font-press mt-4 px-10 py-2 rounded-[15px] font-bold border-[2.5px] border-black shadow-lg transition bg-[#FF9999] hover:scale-105"
          >
            Back
          </button>
        </div>
      </div>

    </div>
  );
}

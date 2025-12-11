// src/data/frameLists.js
import { convertAdminFrames } from "../utils/convertAdminFrames";
import { convertAdminColours } from "../utils/colorConverter";

// Ambil data mentah dari localStorage
const adminFrames = JSON.parse(localStorage.getItem("frames") || "[]");
const adminColours = JSON.parse(localStorage.getItem("colors") || "[]");

// Konversi agar struktur cocok untuk user (FramePicker & EditFrame)
export const FRAME_THUMBNAILS = convertAdminFrames(adminFrames);
export const FRAME_COLOR_FRAMES = convertAdminColours(adminColours);

// Gabungkan warna + gambar
export const ALL_FRAMES = [
  ...FRAME_COLOR_FRAMES,
  ...FRAME_THUMBNAILS,
];

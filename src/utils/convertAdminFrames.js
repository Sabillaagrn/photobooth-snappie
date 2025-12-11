// src/utils/convertAdminFrames.js
export function convertAdminFrames(adminFrames) {
  return adminFrames.map((f) => ({
    id: f.id,
    type: "image",
    thumb: f.thumb,               // ini sudah dataURL
    isFree: f.jenis === "gratis",
    frameByStrip: f.frameByStrip || {},
  }));
}

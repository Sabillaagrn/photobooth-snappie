export function convertAdminColours(colours) {
  return colours.map((c) => ({
    id: c.id,
    type: "color",
    color: c.hex || c.color, // support hex field atau color field
    isFree: true,
  }));
}

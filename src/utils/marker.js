export function markerHtml(index) {
  return `
  <div style="position: relative;width: 100px; height: 100px;">
    <div style="position: absolute; right: 15px; width: 30px; height: 30px; background-color: rgba(255, 164, 9, 0.9);z-index:95;border-radius:50%;display:flex;align-items:center;justify-content:center;opacity:90%;">
      ${index}
    </div>
    <img src="/img/logo64.png" style="position: absolute;left:10px;" />
  </div>`;
}

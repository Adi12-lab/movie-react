export function formatNumber(number) {
  if (Number.isInteger(number)) {
    return number.toFixed(1); // Mengubah angka bulat menjadi 1 angka di belakang koma
  } else if (typeof number === 'number') {
    return parseFloat(number.toFixed(1)); // Mengubah angka dengan desimal menjadi 1 angka di belakang koma
  }
  return '';
}

  
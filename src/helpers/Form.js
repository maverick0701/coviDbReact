export default function covertNumToDisplay(number) {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

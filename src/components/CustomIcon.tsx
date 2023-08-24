export default function CustomIcon({ icon, width = 24, height = 24 }: any) {
  return (
    <svg width={width} height={height}>
      <use href={`/sprite.svg/#icon-${icon}`}></use>
    </svg>
  );
}

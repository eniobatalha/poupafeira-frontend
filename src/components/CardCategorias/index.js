import Image from "next/image";

export default function CardCategorias({ nome, img, isSelected, onSelect }) {
  return (
    <div className="flex items-center">
      <div
        onClick={onSelect}
        className={`rounded-lg w-[80px] h-[100px] shadow-x1 bg-white p-2 m-1.5 cursor-pointer ${
          isSelected ? 'border-2 border-solid border-[#FAA834] bg-[#FAA834]' : ''
        }`}
      >
        <Image src={img} alt='half' width={50} height={50} />
        <h5 className="text-[18px] text-center">{nome}</h5>
      </div>
      {/* Outros cards */}
    </div>
  );
}

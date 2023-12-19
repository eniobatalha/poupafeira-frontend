import Image from "next/image";

export default function CardCategorias({ nome, img, isSelected, onSelect }) {
    return (
        <div
            onClick={onSelect}
            style={{
                border: isSelected ? '3px solid #FAA834' : 'none',
                background: isSelected ? '#FAA834' : '#fff'
            }}
            className="rounded-lg w-[80px] h-[100px] shadow-xl bg-white p-2 m-1.5 cursor-pointer"
        >
            <Image src={img} alt='half' width={50} height={50} />
            <h5 className="text-[12px] text-center">{nome}</h5>
        </div>
    );
}

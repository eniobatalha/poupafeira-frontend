import Image from "next/image";

export default function CardCategorias({nome, img, selected}) {
    return (
        <div style={{border: selected ? '3px solid #FAA834' : 'none', background: selected ? '#FAA834' : '#fff'}} className="rounded-lg w-[80px] h-[100px] shadow-xl bg-white p-3 m-3">
            <Image src={img} alt='half' />
            <h5 className="text-[12px] text-center">{nome}</h5>
        </div>);
}
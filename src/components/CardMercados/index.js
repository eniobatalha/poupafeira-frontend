import Image from "next/image";

export default function CardMercados({ nome, info, img, endereco }) {

    return (
        <div className="flex flex-col justify-center items-center rounded-lg w-[90vw] h-[110px] bg-white">
                <Image style={{ height: 'auto', width: 'auto' }} width={50} height={50} src={img} alt="" ></Image>
                <h5 className="underline text-[20px] text-[#072F4D]">{nome}</h5>
                <h5 className="text-[#A52327]"><b>{endereco}</b></h5>
                <h5 className="text-[#A52327]"><b>{info}</b></h5>
        </div>
    );
}
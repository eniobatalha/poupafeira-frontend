import Image from "next/image";

export default function CardMercados({ nome, info, img, endereco }) {

    return (
        <div className="flex flex-col justify-center items-center rounded-lg w-[90vw] h-[220px] bg-white">
                <Image style={{ height: 'auto', width: 'auto' }} width={50} height={50} src={img} alt="" ></Image>
                <h5 className="underline text-[20px] text-[#072F4D]">{nome}</h5>
                <h5 className="text-[#A52327] ml-3 mr-3 text-center"><b>{endereco}</b></h5>
                <h5 className="text-[#A52327]">{info}</h5>
        </div>
    );
}
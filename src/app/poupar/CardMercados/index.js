
export default function CardMercados({ nome, logradouro, info, valor }) {

    return (
        <div className="flex flex-col justify-center items-center rounded-lg w-[90vw] h-[110px] bg-white">
                <h5 className="underline text-[20px] text-[#072F4D]">{nome}</h5>
                <h5 className="text-[12px]">{logradouro}</h5>
                <h5 className="text-[#A52327]"><b>{info}</b></h5>
                <h5 className="self-end mr-3">Total: R${valor}</h5> 
        </div>
    );
}
import { carrinhoStorage } from "@/app/globalStorage";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function CardMinhaLista({ nome, img, quantidade, medida, index }) {

    const { mercadorias, setMercadorias } = carrinhoStorage()

    const deleteMercadoria = () =>{
        console.log('re')
        const newMercadoria = mercadorias.filter((item, i)=>{
            return i !== index
        })  
        console.log(newMercadoria)
        setMercadorias(newMercadoria)
    }

    return (
        <div className="flex rounded-lg w-[90vw] h-[110px] bg-white">
            <div className="w-[50%] flex justify-center items-center">
                <Image width={80} src={img}  alt='half' />

            </div>
            <div className="w-[30%] flex flex-col justify-center items-center">
                <h5>{nome}</h5>
                <h5 className="text-[20px]">{quantidade}{medida}</h5>
            </div>
            <div onClick={deleteMercadoria} className="w-[20%] flex flex-col justify-center items-center">
                <FontAwesomeIcon icon={faTrash} size="2x" color="#FAA834" />
            </div>
        </div>
    );
}

import { CartContext } from "@/context/cartContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useContext } from "react";

export default function CardMinhaLista({ id, nome, img, quantidade, medida }) {

    const { removeFromCart } = useContext(CartContext)

    const handleRemoveFromCart = (idProduct) => {
        removeFromCart(idProduct)
    }

    return (
        <div className="flex rounded-lg w-[90vw] h-[110px] bg-white">
            <div className="w-[50%] flex justify-center items-center">
                <Image width={80} height={80} src={img}  alt='half' />

            </div>
            <div className="w-[30%] flex flex-col justify-center items-center">
                <h5>{nome}</h5>
                <h5 className="text-[20px]">{quantidade}{medida}</h5>
            </div>
            <div /*onClick={handleRemoveFromCart(id)}*/ className="w-[20%] flex flex-col justify-center items-center">
                <FontAwesomeIcon icon={faTrash} size="2x" color="#FAA834" />
            </div>
        </div>
    );
}
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import showPhoneImg from "@/assets/img/showPhone.webp";
import Link from "next/link";

const TakeATest = () => {
  return (
    <>
      <div className={styles.container} id="HOME">
        <div className={styles.container_text}>
          <h2 className="lato">
            Permita que seus clientes vejam o seu cardápio do próprio celular
          </h2>

          <p className="lato">
            Já teve problemas com atualização de cardápios ? Com o sistema da on
            hands você consegue atualizar todos os items preços, fotos e
            descrições do seu cardápio com alguns cliques !!
          </p>
          <Link href="https://wa.me/5512997423662?text=Gostaria+de+entender+melhor+o+produto+de+voc%C3%AAs">
            <button>FAÇA UM TESTE</button>
          </Link>
        </div>

        <div className={styles.image}>
          <Image src={showPhoneImg} alt="Iphone 15" width={400} height={400} />
        </div>
      </div>
    </>
  );
};

export default TakeATest;

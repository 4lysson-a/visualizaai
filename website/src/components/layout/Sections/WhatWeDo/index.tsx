"use client";

import React from "react";
import styles from "./styles.module.css";
import Clips from "@/components/shared/Clips";
import Load from "@/components/shared/Load";
import QrCode from "@/components/shared/QrCode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WhatWeDo = () => {
  if (typeof window != "undefined" && window.innerWidth < 912) {
    return (
      <>
        <div className={styles.mobile_container} id="OQUEFAZEMOS">
          <h2 className="lato">O QUE FAZEMOS ?</h2>
          <p className="lato">
            &nbsp; Nosso app permite você liste todos os produtos oferecidos
            pelo seu estabelecimento e compartilhe com seus clientes de forma
            prática e rápida
          </p>
        </div>

        <Swiper
          loop={true}
          centeredSlides={true}
          spaceBetween={240}
          pagination={{ clickable: true }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.swiperSlide_link}>
            <Clips />
            <h3 className="lato">LINK DO CARDÁPIO</h3>
            <p className="lato">
              Através do nosso aplicativo, é possível copiar o link do seu
              cardápio de forma simples, facilitando a sua utilização nas suas
              redes sociais.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide_load}>
            <Load />
            <h3 className="lato">ATUALIZAÇÃO</h3>
            <p className="lato">
              É fácil e rápido atualizar os produtos e preços do seu cardápio
              com apenas alguns cliques na tela
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide_qrcode}>
            <QrCode />
            <h3 className="lato">QR Code</h3>
            <p className="lato">
              O cliente simplesmente escaneia o QR Code na mesa, obtendo acesso
              instantâneo ao cardápio completo diretamente em seu celular.
            </p>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }

  return (
    <>
      <div className={styles.container} id="OQUEFAZEMOS">
        <div className={styles.title}>
          <h2 className="lato">O que fazemos ?</h2>
          <p className="lato">
            &nbsp; &nbsp; Nosso app permite você liste todos os produtos
            oferecidos pelo seu estabelecimento e compartilhe com seus clientes
            de forma prática e rápida
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card_link}>
            <Clips />
            <h3 className="lato">LINK DO CARDÁPIO</h3>
            <p className="lato">
              Através do nosso aplicativo, é possível copiar o link do seu
              cardápio de forma simples, facilitando a sua utilização nas suas
              redes sociais.
            </p>
          </div>

          <div className={styles.card_update}>
            <Load />
            <h3 className="lato">ATUALIZAÇÃO</h3>
            <p className="lato">
              É fácil e rápido atualizar os produtos e preços do seu cardápio
              com apenas alguns cliques na tela
            </p>
          </div>

          <div className={styles.card_qrcode}>
            <QrCode />
            <h3 className="lato">QR Code</h3>
            <p className="lato">
              O cliente simplesmente escaneia o QR Code na mesa, obtendo acesso
              instantâneo ao cardápio completo diretamente em seu celular.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;

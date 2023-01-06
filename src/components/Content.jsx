import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Content1 from "../images/unsplash-1.jpg";
import Content2 from "../images/unsplash-2.jpg";
import Content3 from "../images/unsplash-3.jpg";

const Content = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, delay: 375 });
  }, []);
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* Card 1 */}
      <div
        className="flex flex-row justify-between w-full sm:w-9/12 p-10 mt-32"
        data-aos="fade-down"
      >
        <div className="w-full sm:w-8/12">
          <h1 className="text-orange-700 font-sans italic text-lg sm:text-2xl font-bold tracking-widest ">
            ACİL İHTİYAÇLAR PANİK YARATABİLİR
          </h1>
          <br></br>
          <br></br>
          <p className="font-poppins font-normal text-base sm:text-lg tracking-wider">
            Derin bir nefes al, cep telefonuna uzan ve kendi kendine şunu söyle
            <span className="text-black italic font-semibold">
              &nbsp;“<span className="text-[#ff6000]">hemen</span>hallederim” !
            </span>
            <br></br>
            <br></br>
            Hiç olmadık bir yerde otomobilinle yolda veya eve gelip kapıda
            kaldığında, son anda hatırladığın yıl dönümün için telaşla açık
            kuyumcu ya da çiçekci aradığında, seyahete gittiğin tanımadık bir
            yerde açık kuaföre, gece vakti bir büfeye, boşalan akün için acil
            takviyeye, yazın klimacıya, kışın acilen kombiciye ihtiyaç
            duyduğunda...
            <br></br>
            <br></br>
            Kısacası aklına gelebilecek her türlü acil ihtiyacında sakın
            panikleme!
          </p>
        </div>
        <div className="w-3/12 self-center hidden sm:block">
          <img
            src={Content1}
            alt="$$$$$"
            className="rounded-tl-full rounded-br-full w-full"
          />
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="flex flex-row justify-between w-full sm:w-9/12 p-10 mt-32 "
        data-aos="fade-right"
      >
        <div className="w-full sm:w-8/12">
          <h1 className="text-orange-700 font-sans italic text-lg sm:text-2xl font-bold tracking-widest ">
            ERTELEME, VAZGEÇME, ÜŞENME
          </h1>
          <br></br>
          <br></br>
          <p className="font-poppins font-normal text-base sm:text-lg tracking-wider">
            Şimdi kim uğraşacak? Araştırıp soruşturmak için hiç vaktim yok! Ben
            nereden bulayım şimdi onu? Daha sonra bakarız! Bir ara hallederim !
            Boş ver, şimdi onunla mı uğralılır. Yaptırmasak da olur ! Şimdilik
            böyle de idare ederiz !<br></br>
            <br></br>
            Nasıl? Bayağı tanıdık geldi mi? Ama unutma, insanı halletiği değil
            aslında halledemediği işler yorar. Hayatında gereksiz
            yorgunluklardan uzak durmak için o işi sakın erteleme, vazgeçme ve
            üşenme !<br></br>
            <br></br>
            Derin bir nefes al, cep telefonuna uzan ve kendi kendine şunu söyle
            <span className="text-black italic font-semibold">
              &nbsp;“<span className="text-[#ff6000]">hemen</span>hallederim” !
            </span>
          </p>
        </div>
        <div className="w-3/12 self-center order-first hidden sm:block">
          <img
            src={Content2}
            alt="$$$$$"
            className="rounded-tl-full rounded-br-full w-full"
          />
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="flex flex-row justify-between w-full sm:w-9/12 p-10 mt-32 mb-40"
        data-aos="fade-left"
      >
        <div className="w-full sm:w-8/12">
          <h1 className="text-orange-700 font-sans italic text-lg sm:text-2xl font-bold tracking-widest ">
            HERKES İŞİNİ YAPSIN, ZAMAN SANA KALSIN
          </h1>
          <br></br>
          <br></br>
          <p className="font-poppins font-normal text-base sm:text-lg tracking-wider">
            Her işi tek başımıza mükemmel bir şekilde yapamadığımız için
            birilerine ihtiyaç duyarız. Nerde olursak olalım, ihtiyaç anında
            işini iyi yapan ve alanında uzman olan profesyonellere hızlıca
            ulaşıp acil çözümler üretebilmek bize satın alamayacağımız en
            değerli şeyi kazndırır...Zaman !<br></br>
            <br></br>
            Zamanı kazanıp hayatına değer katabilmek için, her ihtiyacında cep
            telefonuna uzan ve kendi kendine şunu söyle; ben çok değerliyim ve
            istersem bir çok şeyi
            <span className="text-black italic font-semibold">
              &nbsp;“<span className="text-[#ff6000]">hemen</span>hallederim” !
            </span>
          </p>
        </div>
        <div className="w-3/12 self-center hidden sm:block">
          <img
            src={Content3}
            alt="$$$$$"
            className="rounded-tl-full rounded-br-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

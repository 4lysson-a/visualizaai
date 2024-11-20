import React from 'react';

import Loading from '@/components/shared/Loading';

import clsx from 'clsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify';

const LoadingScreen = () => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center',
        'fixed top-0 z-50 left-0 w-full h-full bg-background bg-opacity-60'
      )}
    >
      <div>
        <Loading />
        <h1 className="text-[#763C28] font-bold text-xl">Estamos gerando seu pdf ...</h1>
      </div>
    </div>
  );
};

const Print = ({ ...rest }) => {
  return (
    <div className="bg-white h-full w-full text-black" {...rest}>
      <div>Note: Here the dimensions of div are same as A4</div>
      <div>You Can add any component here</div>
    </div>
  );
};

export default function Teste2() {
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const handleDownloadPDF = async () => {
    try {
      setLoading(true);
      setShow(true);

      await new Promise(resolve => setTimeout(resolve, 2000));

      const input = document.getElementById('divToPrint');
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL('image/svg+xml');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save('download.pdf');
      });
    } catch {
      toast.error('Erro ao gerar PDF');
    } finally {
      setShow(false);
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full p-12 flex flex-col gap-4">
      {loading && <LoadingScreen />}

      <div className="mb5">
        <button onClick={handleDownloadPDF}>Print</button>
      </div>

      {show && <Print id="divToPrint" />}
    </div>
  );
}

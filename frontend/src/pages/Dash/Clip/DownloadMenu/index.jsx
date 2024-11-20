import React from 'react';
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify';
import Print from './Print';
import jsPDF from 'jspdf';
import Loading from '@/components/shared/Loading';

export default function DownloadMenu() {
  const [loading, setLoading] = React.useState(false);

  const handleFalseLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const captureAndShare = async () => {
    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const element = document.getElementById('print');
    if (element) {
      const canvas = await html2canvas(element, {
        scale: 0.5
      });
      const imgData = canvas.toDataURL('image/jpeg', 0.75);

      // Dimensões padrão do A4 em milímetros
      const pdfWidth = 210;
      const pdfHeight = 297;

      // Criando o PDF no formato A4
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [pdfWidth, pdfHeight]
      });

      // Ajustando a largura e altura da imagem para se encaixar no A4
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidthFit = pdfWidth;
      const pdfHeightFit = (imgProps.height * pdfWidthFit) / imgProps.width;

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidthFit, pdfHeightFit, null, 'FAST');

      if (navigator.share) {
        pdf.output('blob').then(blob => {
          const file = new File([blob], 'cardapio.pdf', {
            type: 'application/pdf'
          });

          navigator.share({
            files: [file],
            title: 'Cardápio em PDF',
            text: 'Confira o cardápio do estabelecimento'
          });
        });

        handleFalseLoading();
      } else {
        try {
          const pdfBlob = pdf.output('blob');
          const link = document.createElement('a');
          link.href = URL.createObjectURL(pdfBlob);
          link.download = 'cardapio.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch {
          toast.error('Erro ao baixar o PDF');
        } finally {
          handleFalseLoading();
        }
      }
    } else {
      toast.error('Erro ao baixar o PDF');
      handleFalseLoading();
    }
  };

  return (
    <div className="relative w-full h-full items-center flex flex-col">
      <div className="flex pointer-events-none flex-col gap-5 opacity-30">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">Baixe seu cardápio como PDF</h2>
          <p>Clique no botão abaixo para baixar o cardápio em PDF</p>
        </div>

        <button
          type="button"
          onClick={captureAndShare}
          className="bg-[var(--primary)] w-full p-2 xm:pl-5 xm:pr-5 rounded-full font-bold text-[var(--full)] gap-3 flex items-center justify-center active:scale-95 outline-none"
        >
                    Gerar PDF do
        </button>

        <Print show={loading} />

        {loading && (
          <>
            <div className="h-full w-full bg-background fixed top-0 left-0 z-[99] p-12 flex flex-col items-center justify-center">
              <Loading />
              <div>
                <h1 className="text-xl">Estamos gerando seu PDF, isso pode demorar um pouco ...</h1>
                <p className="opacity-70">Não saia ou feche o aplicativo.</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

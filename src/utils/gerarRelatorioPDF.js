import jsPDF from 'jspdf';
import 'jspdf-autotable';

async function gerarRelatorioPDF() {
  const doc = new jsPDF();

  const dadosRelatorio = await buscarDadosRelatorio();

  const marginLeft = 20;
  const marginTop = 20;
  doc.setProperties({ top: marginTop, right: 20, bottom: 20, left: marginLeft });
  doc.setFont('helvetica', 'normal', 12);

  const logoImg = new Image();
  logoImg.src = '/images/images-removebg-preview.png'; 
  await logoImg.decode(); 
  doc.addImage(logoImg, 'PNG', marginLeft, marginTop, 50, 50);

  doc.text('Polo EAD UNIFAA - Valença', marginLeft, marginTop + 60);

  doc.autoTable({
    startY: marginTop + 70,  
    head: [['Aluno', 'Prova', 'Data']],
    body: dadosRelatorio.map((item) => [item.aluno, item.prova, item.data]),
  });

  doc.save("Relatorio.pdf");
}

async function buscarDadosRelatorio() {
  return [
    { aluno: 'Weberson Serafim', prova: 'Disciplina 1 - A2', data: '10/11/2024' },
    { aluno: 'Jorge Dias', prova: 'Disciplina 1 - A3', data: '15/11/2024' },
    { aluno: 'Rafael Rodrigues', prova: 'Disciplina 2 - A2', data: '20/11/2024' },
    { aluno: 'Matheus Santos', prova: 'Disciplina 2 - A3', data: '25/11/2024' },
  ];
}

export default gerarRelatorioPDF;
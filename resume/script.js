function downloadPDF() {
    const pdfURL = "Rain White Resume-1.pdf";
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = "Rain White Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
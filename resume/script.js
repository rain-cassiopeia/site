function downloadPDF() {
    var link = document.createElement('a');
    link.href = "Rain White Resume-1.pdf";
    link.download = "Rain White Resume.pdf";
    link.click();
}
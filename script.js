document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Images/M-FE-Res.pdf';
    link.download = 'Res-P.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
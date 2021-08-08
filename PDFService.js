const PDFDocument = require('pdfkit')

exports.generatePDF = (onData, onEnd) => {
    const doc = new PDFDocument();
    doc.on('data', onData)
    doc.on('end', onEnd)
    doc.fontSize(20)
    doc.text('First Generated PDF Document')
    doc.end()
}
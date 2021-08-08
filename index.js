const express = require("express")
const app = express()
const { generatePDF } = require('./PDFService')

app.get('/download', (req, res) => {
    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment;filename=document.pdf'
    });
    generatePDF(
        (chunk) => stream.write(chunk),
        () => stream.end()
    )
})

app.listen(5000, () => {
    console.log('App listening at port 5000')
})
const PDFMerger = require('pdf-merger-js')
const merger = new PDFMerger()
const filePaths = process.argv.slice(2).slice(0, -1)
const fileName = process.argv[process.argv.length - 1]

async function merge(filePaths, fileName) {
    filePaths.forEach(function (val) {
        merger.add(val)
    })

    if (!fileName.toLowerCase().includes('.pdf')) {
        fileName += '.pdf'
    }

    await merger.save(fileName)
}

merge(filePaths, fileName)
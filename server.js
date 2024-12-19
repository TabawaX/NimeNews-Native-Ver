const express = require('express')
const path = require('path')

const app = express()

// Menyajikan file statis (HTML, CSS, dll)
app.use(express.static(path.join(__dirname, '')))

// Menangani permintaan ke halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Menentukan port server
const PORT = process.env.PORT || 2020
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`)
})
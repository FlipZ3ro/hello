// Baca isi package.json
const packageJson = require('./package.json');

// Cetak Git Source URL jika tersedia
if (packageJson.repository && packageJson.repository.url) {
    console.log("Git Source URL:", packageJson.repository.url);
} else {
    console.log("Git Source URL tidak tersedia dalam package.json");
}
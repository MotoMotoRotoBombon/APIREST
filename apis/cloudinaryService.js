const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // Carga las variables

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function subirArchivoCloudinary(rutaArchivo) {
  try {
    console.log(`Subiendo archivo ${rutaArchivo} a Cloudinary...`);
    const result = await cloudinary.uploader.upload(rutaArchivo, {
      folder: 'facturas',
      resource_type: 'raw',
    });

    console.log(`Archivo subido exitosamente: ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error('Error subiendo archivo a Cloudinary:', error.message || error);
    throw new Error('No se pudo subir el archivo a Cloudinary.');
  }
}

module.exports = { subirArchivoCloudinary };

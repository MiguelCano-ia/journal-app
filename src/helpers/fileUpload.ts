export const fileUpload = async ( file: File ) => {

  if ( !file ) throw new Error('No file to upload!')
  
  const cloudName = import.meta.env.VITE_CLODINARY_NAME;
  const cloudUrl = `https://api.cloudinary.com/v1_1/${ cloudName }/upload`;

  const formData = new FormData();
  formData.append('upload_preset','react-journal');
  formData.append('file', file);

  try {
    
    const resp = await fetch( cloudUrl, {
      method: 'POST',
      body: formData,
    });
    if (!resp.ok ) throw new Error('Image no uploaded');

    const cloudResp = await resp.json();

    return cloudResp

  } catch ( error ) {
      return new Error(`Error: ${String( error )}`);
  }
}
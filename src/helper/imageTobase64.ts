// const imageTobase64 = async(image) =>{
//     const reader = new FileReader()
//     reader.readAsDataURL(image)

//     const data = await new Promise((resolve,reject)=>{
//         reader.onload = () => resolve(reader.result)

//         reader.onerror = error => reject(error)
//     })

//     return data

// }

// export default imageTobase64

const imageToBase64 = (image: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        resolve(result); // Return the base64 string data here
      } else {
        reject(new Error('Failed to convert image to base64 string.'));
      }
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(image);
  });
};

export default imageToBase64;

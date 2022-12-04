import axios from 'axios';
import fs from 'fs';

const downloadFromUrl = async (url: string, filename: string): Promise<any> => {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });
  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(filename))
      .on('error', reject)
      .on('close', () => {
        resolve(filename);
      });
  });
};

export default {
  downloadFromUrl,
};

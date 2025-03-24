import { saveAs } from 'file-saver';
import Cookies from 'js-cookie';

export { Cookies as cookies };

export const downloadFile = async ({
  url,
  fileName,
}: {
  url: string;
  fileName: string;
}) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const blob = await response.blob();
    saveAs(blob, fileName);
  } catch (error) {
    console.error(error);
  }
};

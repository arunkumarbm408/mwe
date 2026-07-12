/**
 * Reusable utility to open WhatsApp with a prefilled message for product inquiries.
 * Replace the placeholder phone number with your actual export business number.
 */
export const WHATSAPP_NUMBER = '916360859627'; // Indian country code 91 followed by 10 digit number

export const openWhatsApp = (productName) => {
  const message = `Hello Maaworld Exim,

I am interested in importing/exporting:
Product Name: ${productName}

Please share details regarding price, MOQ, packaging, and shipping.

Thank you.`;

  const encodedText = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  window.open(url, '_blank');
};

export const openWhatsAppGeneral = () => {
  const message = `Hello Maaworld Exim,

I would like to make a general inquiry about your agricultural import & export services. Please contact me back.

Thank you.`;
  const encodedText = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  window.open(url, '_blank');
};

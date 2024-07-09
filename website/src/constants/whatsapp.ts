export const WHATSAPP_NUMBER = '+55 (12) 9 9742-3662';

const whatsapp_number_without_special_chars = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');

export const WHATSAPP_NUMBER_LINK = `https://wa.me/${whatsapp_number_without_special_chars}`;

export const openWhatsapp = () => {
	return window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
};

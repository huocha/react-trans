import en from './en.json';
import fr from './fr.json';

const langs = {
	en,
	fr
};

export default function (lang = 'en') {
	return langs[lang];
}

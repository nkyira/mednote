export const initialState = {
	patient: { age: '', sex: '' },
	motif: {
		abPain: '',
		constip: '',
		nausea: '',
		rectorrh: '',
		hemat: '',
		hern: '',
		pertedApp: ''
	},
	antChir: {
		appendix: '',
		cholex: '',
		cureHern: '',
		chirGyn: '',
		chirUro: '',
		chirOrtho: ''
	},
	antMed: {},
	traitement: {},
	recurrence: '',
	symptomesB: {},
	anamUro: {},
	anamGyn: {},
	anamCardio: {},
	abPainDet: {
		depuis: '',
		localisation: [],
		intensite: '',
		qualite: [],
		evolution: [],
		facteurSoulageant: [],
	},
	constipDet: {
		depuis: '',
		frequence: '',
		consistance: [],
		vomissement: [],
		gaz: '',
	},
	nauseaDet: {
		depuis: '',
		frequence: '',
		type: [],
		associe: [],
		traitement: '',
		retardRegle: [],
		grossesse: [],
		contage: [],
		consommation: [],
	},
}


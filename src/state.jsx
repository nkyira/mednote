export const initialState = {
	patient: { age: '', sex: '' },
	motif: {
		abPain: '',
		constip: '',
		nausea: '',
		rectoRrh: '',
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
}


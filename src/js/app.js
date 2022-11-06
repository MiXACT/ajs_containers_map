export default class ErrorRepository {
	constructor() {
		this.errors = new Map([
			[1, 'Error number ONE.'],
			[2, 'Error number TWO.'],
			[3, 'Error number THREE.'],
		]);
	}

	translate(code) {
		let errorDescription;
		if (this.errors.has(code)) errorDescription = this.errors.get(code);
		else errorDescription = 'Unknown error';
		return errorDescription;
	}
}

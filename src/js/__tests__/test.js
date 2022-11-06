import ErrorRepository from '../app';

test('testing ErrorRepository', () => {
	const errorGen = new ErrorRepository();

	expect(errorGen.translate(1)).toEqual('Error number ONE.');
	expect(errorGen.translate(undefined)).toEqual('Unknown error');
});

const formatVolumeIconPath = require('../assets/scripts/main')

describe('Volume is', () => {
	test('over 66', () => {
		expect(formatVolumeIconPath(67)).toContain('3');
	});
	test('0', () => {
		expect(formatVolumeIconPath(0)).toContain('0');
	});
	test('66', () => {
		expect(formatVolumeIconPath(66)).toContain('2');
	});
	test('over 33', () => {
		expect(formatVolumeIconPath(34)).toContain('2');
	});
	test('over 0', () => {
		expect(formatVolumeIconPath(1)).toContain('1');
	});
})

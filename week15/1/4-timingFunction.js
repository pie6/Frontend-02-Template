const cubicBezier = (x1, y1, x2, y2) => {
	const ZERO_LIMIT = 1e-6;

	const ax = 3 * x1 - 3 * x2 + 1
	const bx = 3 * x2 - 6 * x1
	const cx = 3 * x1


	const ay = 3 * y1 - 3 * y2 + 1
	const by = 3 * y2 - 6 * y1
	const cy = 3 * y1

	function sampleCurveDerivativeX(t) {
		return (3 * ax * t + 2 * bx) * t + cx;
	}

	function sampleCurveX(t) {
		return ((ax * t + bx) * t + cx) * t
	}

	function sampleCurveY(t) {
		return ((ay * t + by) * t + cy) * t
	}

	function solveCurveX(x) {
		var t2 = x;
		var derivative
		var x2
		var t1;
		var t0;

		for (let index = 0; index < 8; index++) {
			x2 = sampleCurveX(t2) - x
			if (Math.abs(x2) < ZERO_LIMIT) {
				return t2
			}
			derivative = sampleCurveDerivativeX(t2)
			if (Math.abs(derivative) < ZERO_LIMIT) {
				break
			}
			t2 -= x2 / derivative

		}

		t1 = 1
		t0 = 0
		t2 = x

		while (t1 > t0) {
			x2 = sampleCurveX(t2) - x
			if (Math.abs(x2) < ZERO_LIMIT) {
				return t2
			}
			if (x2 > 0) {
				t1 = t2
			} else {
				t0 = t2
			}
			t2 = (t1 + t0) / 2
		}
		return t2
	}


	function solve(x) {
		return sampleCurveY(solveCurveX(x))
	}
	return solve
};

export let linear = v => v;


export let ease = cubicBezier(.25, .1, .25, .1)
export let easeIn = cubicBezier(.42, .0, 1, 1)
export let easeOut = cubicBezier(0, 0, .58, 1)
export let easeInOut = cubicBezier(.42,0,.58,1)
/*
 Copyright (c) 2014-2017, Jan Bösenberg & Jürg Lehni

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
import paper from "paper";

const Numerical = new (function () {
    var abscissas = [
        [0.5773502691896257645091488],
        [0, 0.7745966692414833770358531],
        [0.3399810435848562648026658, 0.8611363115940525752239465],
        [0, 0.5384693101056830910363144, 0.9061798459386639927976269],
        [
            0.2386191860831969086305017, 0.6612093864662645136613996,
            0.9324695142031520278123016,
        ],
        [
            0, 0.4058451513773971669066064, 0.7415311855993944398638648,
            0.9491079123427585245261897,
        ],
        [
            0.1834346424956498049394761, 0.525532409916328985817739,
            0.7966664774136267395915539, 0.9602898564975362316835609,
        ],
        [
            0, 0.324253423403808929038538, 0.613371432700590397308702,
            0.8360311073266357942994298, 0.9681602395076260898355762,
        ],
        [
            0.148874338981631210884826, 0.4333953941292471907992659,
            0.6794095682990244062343274, 0.8650633666889845107320967,
            0.973906528517171720077964,
        ],
        [
            0, 0.269543155952344972331532, 0.5190961292068118159257257,
            0.7301520055740493240934163, 0.8870625997680952990751578,
            0.978228658146056992803938,
        ],
        [
            0.1252334085114689154724414, 0.3678314989981801937526915,
            0.5873179542866174472967024, 0.7699026741943046870368938,
            0.9041172563704748566784659, 0.9815606342467192506905491,
        ],
        [
            0, 0.2304583159551347940655281, 0.4484927510364468528779129,
            0.6423493394403402206439846, 0.8015780907333099127942065,
            0.9175983992229779652065478, 0.9841830547185881494728294,
        ],
        [
            0.1080549487073436620662447, 0.3191123689278897604356718,
            0.5152486363581540919652907, 0.6872929048116854701480198,
            0.8272013150697649931897947, 0.9284348836635735173363911,
            0.9862838086968123388415973,
        ],
        [
            0, 0.2011940939974345223006283, 0.3941513470775633698972074,
            0.5709721726085388475372267, 0.7244177313601700474161861,
            0.8482065834104272162006483, 0.9372733924007059043077589,
            0.9879925180204854284895657,
        ],
        [
            0.0950125098376374401853193, 0.2816035507792589132304605,
            0.4580167776572273863424194, 0.6178762444026437484466718,
            0.7554044083550030338951012, 0.8656312023878317438804679,
            0.9445750230732325760779884, 0.9894009349916499325961542,
        ],
    ];

    var weights = [
        [1],
        [0.8888888888888888888888889, 0.5555555555555555555555556],
        [0.6521451548625461426269361, 0.3478548451374538573730639],
        [
            0.5688888888888888888888889, 0.4786286704993664680412915,
            0.236926885056189087514264,
        ],
        [
            0.4679139345726910473898703, 0.3607615730481386075698335,
            0.1713244923791703450402961,
        ],
        [
            0.417959183673469387755102, 0.3818300505051189449503698,
            0.2797053914892766679014678, 0.1294849661688696932706114,
        ],
        [
            0.3626837833783619829651504, 0.3137066458778872873379622,
            0.222381034453374470544356, 0.1012285362903762591525314,
        ],
        [
            0.3302393550012597631645251, 0.3123470770400028400686304,
            0.2606106964029354623187429, 0.180648160694857404058472,
            0.0812743883615744119718922,
        ],
        [
            0.295524224714752870173893, 0.2692667193099963550912269,
            0.2190863625159820439955349, 0.1494513491505805931457763,
            0.0666713443086881375935688,
        ],
        [
            0.2729250867779006307144835, 0.2628045445102466621806889,
            0.2331937645919904799185237, 0.1862902109277342514260976,
            0.1255803694649046246346943, 0.0556685671161736664827537,
        ],
        [
            0.2491470458134027850005624, 0.2334925365383548087608499,
            0.2031674267230659217490645, 0.1600783285433462263346525,
            0.1069393259953184309602547, 0.047175336386511827194616,
        ],
        [
            0.2325515532308739101945895, 0.2262831802628972384120902,
            0.2078160475368885023125232, 0.1781459807619457382800467,
            0.1388735102197872384636018, 0.0921214998377284479144218,
            0.0404840047653158795200216,
        ],
        [
            0.2152638534631577901958764, 0.2051984637212956039659241,
            0.1855383974779378137417166, 0.1572031671581935345696019,
            0.1215185706879031846894148, 0.0801580871597602098056333,
            0.0351194603317518630318329,
        ],
        [
            0.2025782419255612728806202, 0.1984314853271115764561183,
            0.1861610000155622110268006, 0.1662692058169939335532009,
            0.1395706779261543144478048, 0.1071592204671719350118695,
            0.0703660474881081247092674, 0.0307532419961172683546284,
        ],
        [
            0.1894506104550684962853967, 0.1826034150449235888667637,
            0.1691565193950025381893121, 0.1495959888165767320815017,
            0.1246289712555338720524763, 0.0951585116824927848099251,
            0.0622535239386478928628438, 0.0271524594117540948517806,
        ],
    ];

    var abs = Math.abs,
        sqrt = Math.sqrt,
        pow = Math.pow,
        log2 =
            Math.log2 ||
            function (x) {
                return Math.log(x) * Math.LOG2E;
            },
        EPSILON = 1e-12,
        MACHINE_EPSILON = 1.12e-16;

    function clamp(value, min, max) {
        return value < min ? min : value > max ? max : value;
    }

    function getDiscriminant(a, b, c) {
        function split(v) {
            var x = v * 134217729,
                y = v - x,
                hi = y + x,
                lo = v - hi;
            return [hi, lo];
        }

        var D = b * b - a * c,
            E = b * b + a * c;
        if (abs(D) * 3 < E) {
            var ad = split(a),
                bd = split(b),
                cd = split(c),
                p = b * b,
                dp = bd[0] * bd[0] - p + 2 * bd[0] * bd[1] + bd[1] * bd[1],
                q = a * c,
                dq =
                    ad[0] * cd[0] -
                    q +
                    ad[0] * cd[1] +
                    ad[1] * cd[0] +
                    ad[1] * cd[1];
            D = p - q + (dp - dq);
        }
        return D;
    }

    function getNormalizationFactor() {
        var norm = Math.max.apply(Math, arguments);
        return norm && (norm < 1e-8 || norm > 1e8)
            ? pow(2, -Math.round(log2(norm)))
            : 0;
    }

    return {
        EPSILON: EPSILON,
        MACHINE_EPSILON: MACHINE_EPSILON,
        CURVETIME_EPSILON: 1e-8,
        GEOMETRIC_EPSILON: 1e-7,
        TRIGONOMETRIC_EPSILON: 1e-8,
        KAPPA: (4 * (sqrt(2) - 1)) / 3,

        isZero: function (val) {
            return val >= -EPSILON && val <= EPSILON;
        },

        clamp: clamp,

        integrate: function (f, a, b, n) {
            var x = abscissas[n - 2],
                w = weights[n - 2],
                A = (b - a) * 0.5,
                B = A + a,
                i = 0,
                m = (n + 1) >> 1,
                sum = n & 1 ? w[i++] * f(B) : 0;
            while (i < m) {
                var Ax = A * x[i];
                sum += w[i++] * (f(B + Ax) + f(B - Ax));
            }
            return A * sum;
        },

        findRoot: function (f, df, x, a, b, n, tolerance) {
            for (var i = 0; i < n; i++) {
                var fx = f(x),
                    dx = fx / df(x),
                    nx = x - dx;
                if (abs(dx) < tolerance) {
                    x = nx;
                    break;
                }
                if (fx > 0) {
                    b = x;
                    x = nx <= a ? (a + b) * 0.5 : nx;
                } else {
                    a = x;
                    x = nx >= b ? (a + b) * 0.5 : nx;
                }
            }
            return clamp(x, a, b);
        },

        solveQuadratic: function (a, b, c, roots, min, max) {
            var x1,
                x2 = Infinity;
            if (abs(a) < EPSILON) {
                if (abs(b) < EPSILON) return abs(c) < EPSILON ? -1 : 0;
                x1 = -c / b;
            } else {
                b *= -0.5;
                var D = getDiscriminant(a, b, c);
                if (D && abs(D) < MACHINE_EPSILON) {
                    var f = getNormalizationFactor(abs(a), abs(b), abs(c));
                    if (f) {
                        a *= f;
                        b *= f;
                        c *= f;
                        D = getDiscriminant(a, b, c);
                    }
                }
                if (D >= -MACHINE_EPSILON) {
                    var Q = D < 0 ? 0 : sqrt(D),
                        R = b + (b < 0 ? -Q : Q);
                    if (R === 0) {
                        x1 = c / a;
                        x2 = -x1;
                    } else {
                        x1 = R / a;
                        x2 = c / R;
                    }
                }
            }
            var count = 0,
                boundless = min == null,
                minB = min - EPSILON,
                maxB = max + EPSILON;
            if (isFinite(x1) && (boundless || (x1 > minB && x1 < maxB)))
                roots[count++] = boundless ? x1 : clamp(x1, min, max);
            if (
                x2 !== x1 &&
                isFinite(x2) &&
                (boundless || (x2 > minB && x2 < maxB))
            )
                roots[count++] = boundless ? x2 : clamp(x2, min, max);
            return count;
        },

        solveCubic: function (a, b, c, d, roots, min, max) {
            var f = getNormalizationFactor(abs(a), abs(b), abs(c), abs(d)),
                x,
                b1,
                c2,
                qd,
                q;
            if (f) {
                a *= f;
                b *= f;
                c *= f;
                d *= f;
            }

            function evaluate(x0) {
                x = x0;
                var tmp = a * x;
                b1 = tmp + b;
                c2 = b1 * x + c;
                qd = (tmp + b1) * x + c2;
                q = c2 * x + d;
            }

            if (abs(a) < EPSILON) {
                a = b;
                b1 = c;
                c2 = d;
                x = Infinity;
            } else if (abs(d) < EPSILON) {
                b1 = b;
                c2 = c;
                x = 0;
            } else {
                evaluate(-(b / a) / 3);
                var t = q / a,
                    r = pow(abs(t), 1 / 3),
                    s = t < 0 ? -1 : 1,
                    td = -qd / a,
                    rd = td > 0 ? 1.324717957244746 * Math.max(r, sqrt(td)) : r,
                    x0 = x - s * rd;
                if (x0 !== x) {
                    do {
                        evaluate(x0);
                        x0 = qd === 0 ? x : x - q / qd / (1 + MACHINE_EPSILON);
                    } while (s * x0 > s * x);
                    if (abs(a) * x * x > abs(d / x)) {
                        c2 = -d / x;
                        b1 = (c2 - c) / x;
                    }
                }
            }
            var count = Numerical.solveQuadratic(a, b1, c2, roots, min, max),
                boundless = min == null;
            if (
                isFinite(x) &&
                (count === 0 ||
                    (count > 0 && x !== roots[0] && x !== roots[1])) &&
                (boundless || (x > min - EPSILON && x < max + EPSILON))
            )
                roots[count++] = boundless ? x : clamp(x, min, max);
            return count;
        },
    };
})();

export const OffsetUtils = {
    offsetPath: function (path, offset, result) {
        var outerPath = new paper.Path({ insert: false }),
            epsilon = Numerical.GEOMETRIC_EPSILON,
            enforeArcs = true;
        for (var i = 0; i < path.curves.length; i++) {
            var curve = path.curves[i];
            if (curve.hasLength(epsilon)) {
                var segments = this.getOffsetSegments(curve, offset),
                    start = segments[0];
                if (outerPath.isEmpty()) {
                    outerPath.addSegments(segments);
                } else {
                    var lastCurve = outerPath.lastCurve;
                    if (!lastCurve.point2.isClose(start.point, epsilon)) {
                        if (
                            enforeArcs ||
                            lastCurve
                                .getTangentAtTime(1)
                                .dot(start.point.subtract(curve.point1)) >= 0
                        ) {
                            this.addRoundJoin(
                                outerPath,
                                start.point,
                                curve.point1,
                                Math.abs(offset)
                            );
                        } else {
                            // Connect points with a line
                            outerPath.lineTo(start.point);
                        }
                    }
                    outerPath.lastSegment.handleOut = start.handleOut;
                    outerPath.addSegments(segments.slice(1));
                }
            }
        }
        if (path.isClosed()) {
            if (
                !outerPath.lastSegment.point.isClose(
                    outerPath.firstSegment.point,
                    epsilon
                ) &&
                (enforeArcs ||
                    outerPath.lastCurve
                        .getTangentAtTime(1)
                        .dot(
                            outerPath.firstSegment.point.subtract(
                                path.firstSegment.point
                            )
                        ) >= 0)
            ) {
                this.addRoundJoin(
                    outerPath,
                    outerPath.firstSegment.point,
                    path.firstSegment.point,
                    Math.abs(offset)
                );
            }
            outerPath.closePath();
        }
        return outerPath;
    },

    /**
     * Creates an offset for the specified curve and returns the segments of
     * that offset path.
     *
     * @param {Curve} curve the curve to be offset
     * @param {Number} offset the offset distance
     * @returns {Segment[]} an array of segments describing the offset path
     */
    getOffsetSegments: function (curve, offset) {
        if (curve.isStraight()) {
            var n = curve.getNormalAtTime(0.5).multiply(offset),
                p1 = curve.point1.add(n),
                p2 = curve.point2.add(n);
            return [new paper.Segment(p1), new paper.Segment(p2)];
        } else {
            var curves = this.splitCurveForOffseting(curve),
                segments = [];
            for (var i = 0, l = curves.length; i < l; i++) {
                var offsetCurves = this.getOffsetCurves(curves[i], offset, 0),
                    prevSegment;
                for (var j = 0, m = offsetCurves.length; j < m; j++) {
                    var curve = offsetCurves[j],
                        segment = curve.segment1;
                    if (prevSegment) {
                        prevSegment.handleOut = segment.handleOut;
                    } else {
                        segments.push(segment);
                    }
                    segments.push((prevSegment = curve.segment2));
                }
            }
            return segments;
        }
    },

    /**
     * Approach for Curve Offsetting based on:
     *   "A New Shape Control and Classification for Cubic Bézier Curves"
     *   Shi-Nine Yang and Ming-Liang Huang
     */
    offsetCurve_middle: function (curve, offset) {
        var v = curve.getValues(),
            p1 = curve.point1.add(paper.Curve.getNormal(v, 0).multiply(offset)),
            p2 = curve.point2.add(paper.Curve.getNormal(v, 1).multiply(offset)),
            pt = paper.Curve.getPoint(v, 0.5).add(
                paper.Curve.getNormal(v, 0.5).multiply(offset)
            ),
            t1 = paper.Curve.getTangent(v, 0),
            t2 = paper.Curve.getTangent(v, 1),
            div = (t1.cross(t2) * 3) / 4,
            d = pt.multiply(2).subtract(p1.add(p2)),
            a = d.cross(t2) / div,
            b = d.cross(t1) / div;
        return new paper.Curve(p1, t1.multiply(a), t2.multiply(-b), p2);
    },

    offsetCurve_average: function (curve, offset) {
        var v = curve.getValues(),
            p1 = curve.point1.add(paper.Curve.getNormal(v, 0).multiply(offset)),
            p2 = curve.point2.add(paper.Curve.getNormal(v, 1).multiply(offset)),
            t = this.getAverageTangentTime(v),
            u = 1 - t,
            pt = paper.Curve.getPoint(v, t).add(
                paper.Curve.getNormal(v, t).multiply(offset)
            ),
            t1 = paper.Curve.getTangent(v, 0),
            t2 = paper.Curve.getTangent(v, 1),
            div = t1.cross(t2) * 3 * t * u,
            v = pt.subtract(
                p1
                    .multiply(u * u * (1 + 2 * t))
                    .add(p2.multiply(t * t * (3 - 2 * t)))
            ),
            a = v.cross(t2) / (div * u),
            b = v.cross(t1) / (div * t);
        return new paper.Curve(p1, t1.multiply(a), t2.multiply(-b), p2);
    },

    /**
     * This algorithm simply scales the curve so its end points are at the
     * calculated offsets of the original end points.
     */
    offsetCurve_simple: function (crv, dist) {
        // calculate end points of offset curve
        var p1 = crv.point1.add(crv.getNormalAtTime(0).multiply(dist));
        var p4 = crv.point2.add(crv.getNormalAtTime(1).multiply(dist));
        // get scale ratio
        var pointDist = crv.point1.getDistance(crv.point2);
        // TODO: Handle cases when pointDist == 0
        var f = p1.getDistance(p4) / pointDist;
        if (crv.point2.subtract(crv.point1).dot(p4.subtract(p1)) < 0) {
            f = -f; // probably more correct than connecting with line
        }
        // Scale handles and generate offset curve
        return new paper.Curve(
            p1,
            crv.handle1.multiply(f),
            crv.handle2.multiply(f),
            p4
        );
    },

    getOffsetCurves: function (curve, offset, method) {
        var errorThreshold = 0.01,
            radius = Math.abs(offset),
            offsetMethod = this["offsetCurve_" + (method || "middle")],
            that = this;

        function offsetCurce(curve, curves, recursion) {
            var offsetCurve = offsetMethod.call(that, curve, offset),
                cv = curve.getValues(),
                ov = offsetCurve.getValues(),
                count = 16,
                error = 0;
            for (var i = 1; i < count; i++) {
                var t = i / count,
                    p = paper.Curve.getPoint(cv, t),
                    n = paper.Curve.getNormal(cv, t),
                    roots = paper.Curve.getCurveLineIntersections(
                        ov,
                        p.x,
                        p.y,
                        n.x,
                        n.y
                    ),
                    dist = 2 * radius;
                for (var j = 0, l = roots.length; j < l; j++) {
                    var d = paper.Curve.getPoint(ov, roots[j]).getDistance(p);
                    if (d < dist) dist = d;
                }
                var err = Math.abs(radius - dist);
                if (err > error) error = err;
            }
            if (error > errorThreshold && recursion++ < 8) {
                if (error === radius) {
                    // console.log(cv);
                }
                var curve2 = curve.divideAtTime(that.getAverageTangentTime(cv));
                offsetCurce(curve, curves, recursion);
                offsetCurce(curve2, curves, recursion);
            } else {
                curves.push(offsetCurve);
            }
            return curves;
        }

        return offsetCurce(curve, [], 0);
    },

    /**
     * Split curve into sections that can then be treated individually by an
     * offset algorithm.
     */
    splitCurveForOffseting: function (curve) {
        var curves = [curve.clone()], // Clone so path is not modified.
            that = this;
        if (curve.isStraight()) return curves;

        function splitAtRoots(index, roots) {
            for (var i = 0, prevT, l = roots && roots.length; i < l; i++) {
                var t = roots[i],
                    curve = curves[index].divideAtTime(
                        // Renormalize curve-time for multiple roots:
                        i ? (t - prevT) / (1 - prevT) : t
                    );
                prevT = t;
                if (curve) curves.splice(++index, 0, curve);
            }
        }

        // Recursively splits the specified curve if the angle between the two
        // handles is too large (we use 60° as a threshold).
        function splitLargeAngles(index, recursion) {
            var curve = curves[index],
                v = curve.getValues(),
                n1 = paper.Curve.getNormal(v, 0),
                n2 = paper.Curve.getNormal(v, 1).negate(),
                cos = n1.dot(n2);
            if (cos > -0.5 && ++recursion < 4) {
                curves.splice(
                    index + 1,
                    0,
                    curve.divideAtTime(that.getAverageTangentTime(v))
                );
                splitLargeAngles(index + 1, recursion);
                splitLargeAngles(index, recursion);
            }
        }

        // Split curves at cusps and inflection points.
        var info = curve.classify();
        if (info.roots && info.type !== "loop") {
            splitAtRoots(0, info.roots);
        }

        // Split sub-curves at peaks.
        for (var i = curves.length - 1; i >= 0; i--) {
            splitAtRoots(i, paper.Curve.getPeaks(curves[i].getValues()));
        }

        // Split sub-curves with too large angle between handles.
        for (var i = curves.length - 1; i >= 0; i--) {
            //splitLargeAngles(i, 0);
        }
        return curves;
    },

    /**
     * Returns the first curve-time where the curve has its tangent in the same
     * direction as the average of the tangents at its beginning and end.
     */
    getAverageTangentTime: function (v) {
        var tan = paper.Curve.getTangent(v, 0).add(
                paper.Curve.getTangent(v, 1)
            ),
            tx = tan.x,
            ty = tan.y,
            abs = Math.abs,
            flip = abs(ty) < abs(tx),
            s = flip ? ty / tx : tx / ty,
            ia = flip ? 1 : 0, // the abscissa index
            io = ia ^ 1, // the ordinate index
            a0 = v[ia + 0],
            o0 = v[io + 0],
            a1 = v[ia + 2],
            o1 = v[io + 2],
            a2 = v[ia + 4],
            o2 = v[io + 4],
            a3 = v[ia + 6],
            o3 = v[io + 6],
            aA = -a0 + 3 * a1 - 3 * a2 + a3,
            aB = 3 * a0 - 6 * a1 + 3 * a2,
            aC = -3 * a0 + 3 * a1,
            oA = -o0 + 3 * o1 - 3 * o2 + o3,
            oB = 3 * o0 - 6 * o1 + 3 * o2,
            oC = -3 * o0 + 3 * o1,
            roots = [],
            epsilon = Numerical.CURVETIME_EPSILON,
            count = Numerical.solveQuadratic(
                3 * (aA - s * oA),
                2 * (aB - s * oB),
                aC - s * oC,
                roots,
                epsilon,
                1 - epsilon
            );
        // Fall back to 0.5, so we always have a place to split...
        return count > 0 ? roots[0] : 0.5;
    },

    addRoundJoin: function (path, dest, center, radius) {
        // return path.lineTo(dest);
        var middle = path.lastSegment.point.add(dest).divide(2),
            through = center.add(middle.subtract(center).normalize(radius));
        path.arcTo(through, dest);
    },
};

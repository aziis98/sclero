const modules = {};

(function (exports) {

    const $container = document.querySelector('#container');

    const repeatLetter = (l) => (n) => _.repeat(l, n);

    const genR = (n) => repeatLetter('r')(n);
    const genN = (n) => repeatLetter('n')(n);

    const genNR = (n) => _.sample([genR, genN])(n);

    const genA = (n) => repeatLetter('a')(n * 2 / 3);
    const genH = (n) => repeatLetter('h')(n * 0 + 1);

    const random = (min, max) => _.random(min, max);
    const list = (size) => _.range(size);
    const map = (f) => (list) => list.map(f);

    const randomRepeatedLetter = () => _.sample([genNR, genA, genH])(random(8, 10));

    const gen = () => 'G' + [_.sample([genR, genN])(random(3, 10))].concat(list(random(12, 15)).map(it => randomRepeatedLetter())).join('');

    window.onload = function generate() {
        $container.innerHTML = _.escape(gen());
        document.body.onclick = generate;
    };


    exports.gen = gen;
    exports.repeatLetter = repeatLetter;
    exports.randomRepeatedLetter = randomRepeatedLetter;

})(modules);
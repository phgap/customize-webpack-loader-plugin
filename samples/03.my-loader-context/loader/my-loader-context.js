const loader = function (source) {

    // console.log('this.context.version', this.context.version);
    console.log(this);
    console.log('this.context:', this.context);
    console.log('this.data:', this.data);
    this.cacheable(false);
    // return source;
    // this.callback(new Error('========== loader error'));
    this.emitFile('output.js', source);
    this.callback(null, source);
    // this.callback(new Error('========== loader error'), source);
    // const callback = this.async();
    // callback(null, {})
}

// loader.pitch = function (remainingRequest, precedingRequest, data) {
//     // data.value = 3;
// }

module.exports = loader;
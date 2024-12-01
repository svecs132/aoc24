function assert(pred: (x: typeof this) => boolean): typeof this {
    if (!pred(this)) {
        const msg = `${pred}`.replace(/^\(.*?\) => /, '')
        throw new Error(`Assertion \`${msg}\` failed`)
    }
    return this
}

Object.prototype.assert = assert

function pipe<T, U>(f: (x: T) => U): U {
    return f(this)
}

Object.prototype.pipe = pipe

export function input(): Promise<string> {
    return Bun.file(Bun.argv.assert(v => v.length === 3)[2]).text()
}

declare module 'felt' {
    function Felt(recipe?: any, opts?: Felt.Opts);
    function Felt(config: string, opts?: Felt.Opts);
    function Felt(opts?: Felt.Opts);
    namespace Felt {
        interface Opts {
            src: string,
            cache?: string,
            root?: Function,
            handlers?: {},
            patterns?: string | string[],
            update?: string,
            reflesh?: boolean,
            watch?: boolean,
            debug?: boolean
        }
    }
    export = Felt;
}
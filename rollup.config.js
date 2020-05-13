import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';

const isProduction = process.env.NODE_ENV === 'production';

export default (async () => ({
  input: 'src/ts/js/entry.ts',
  output: {
    file: 'htdocs/js/bundle.js',
    format: 'umd',
    sourcemap: !isProduction
  },
  plugins: [
    resolve(),
    commonjs(),
    eslint(),
    typescript(),
    babel(),
    isProduction && (await import('rollup-plugin-terser')).terser()
  ]
}))();

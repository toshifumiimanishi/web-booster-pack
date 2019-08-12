import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const isProduction = process.env.NODE_ENV === 'production';

export default (async () => ({
  input: 'src/_ts/js/entry.ts',
  output: {
    file: 'htdocs/js/bundle.js',
    format: 'umd',
  },
  plugins: [
    resolve(),
    commonjs(),
    isProduction && (await import('rollup-plugin-terser')).terser()
  ]
}))();

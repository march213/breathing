import GlslCanvas from 'glslCanvas';
import fragString from './shader.frag?raw';
import './style.css';

const canvas = document.querySelector('canvas');
const sandbox = new GlslCanvas(canvas);

sandbox.load(fragString);
sandbox.setUniform('displacement1', 'displacement1.jpg');

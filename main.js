import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene(); // Create scene graph root
const FOV = 75;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(
  FOV,
  window.innerWidth / window.innerHeight,
  near,
  far
); // Create perspective camera

const renderer = new THREE.WebGLRenderer(); // Create renderer
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Append renderer to the DOM

const radius = 1;
const widthSegments = 32;
const heightSegments = 32;
const sphereGeometry = new THREE.SphereGeometry(
  radius,
  widthSegments,
  heightSegments
);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(sphereGeometry, material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

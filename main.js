import * as THREE from 'three';
import { OrbitControls } from './node_modules/three/examples/jsm/Addons.js';
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a geometry for the coin (cylinder)
    const geometry = new THREE.CylinderGeometry(1, 1, 0.1, 100);
    
    // Load the Ethereum texture
    const textureLoader = new THREE.TextureLoader();
    const ethereumTexture = textureLoader.load('https://i.imgur.com/dTTRCQs.png');
    
    // Create a material with the texture
    const material = new THREE.MeshBasicMaterial({ map: ethereumTexture });
    
    // Create the coin mesh
    const coin = new THREE.Mesh(geometry, material);
    coin.rotation.y = Math.PI / 2;
    camera.position.set(0, 1.5, 3); 
    camera.lookAt(coin.position); 
    // Add the coin to the scene
    scene.add(coin);
    
 const light = new THREE.HemisphereLight(0xFFFFFF,0x23A8F2)
 light.position.set(10, 10, 10)
 scene.add(light)
    // Position the camera
    camera.position.z = 3;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        coin.rotation.z += 0.001;; // Rotate the coin for effect
        renderer.render(scene, camera);
    }

    animate();


scene.add(camera)
renderer.setPixelRatio(2)
//renderer.render(scene, camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = false
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = false
controls.autoRotateSpeed = 0

 window.addEventListener('resize', ()=>{
      window.innerWidth;
      window.innerHeight;
 })

  

//     renderer.setSize(sizes.width, sizes.height)
// })

// const loop = ()=>{
//     controls.update()
// renderer.render(scene, camera)
// window.requestAnimationFrame(loop)

// }
// loop()

// const tl = gsap.core.timeline({defaults: {duration: 1, } })
// tl.fromTo(mesh.scale, {z: 0, x: 0, y:0}, {z:1, x:1, y: 1})
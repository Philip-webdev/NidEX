import * as THREE from './tree/master/node_modules/three';
import { OrbitControls } from './tree/master/node_modules/three/examples/jsm/Addons.js';
const scene = new THREE.Scene()

const geometry = new THREE.OctahedronGeometry(2, 0)
const light = new THREE.PointLight(0xFFFFFF, 50, 150)
light.position.set(10, 10, 10)
scene.add(light)

const material = new THREE.MeshStandardMaterial(
    { color: 0x23A8F2
    }
)
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}




const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 10, 100)
camera.position.z = 15


scene.add(camera)

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(sizes.width, sizes.width)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = false
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 10

window.addEventListener('resize', ()=>{
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

const loop = ()=>{
    controls.update()
renderer.render(scene, camera)
window.requestAnimationFrame(loop)

}
loop()

const tl = gsap.core.timeline({defaults: {duration: 1, } })
tl.fromTo(mesh.scale, {z: 0, x: 0, y:0}, {z:1, x:1, y: 1})
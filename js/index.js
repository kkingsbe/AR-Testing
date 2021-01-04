var scene, camera, renderer, controls
const width = window.innerWidth
const height = window.innerHeight
const ratio = width / height

const init = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, ratio, 1, 1000)
  camera.position.z = 14
  camera.position.y = 14
  camera.position.x = 6

  controls = new THREE.OrbitControls(camera, document.getElementById("viewport"))
  //axis = new THREE.AxisHelper(300)
  //scene.add(axis)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setClearColor("#07070e")
  renderer.setSize(width, height)

  document.getElementById("viewport").append(renderer.domElement)

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  const animate = () => {
    //sphere.position.y += 0.1
  }

  const render = () => {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
    controls.update()
    animate()
  }
  render()
}

const getPointLight = (color, intensity, distance) => {
  let light = new THREE.PointLight(color, intensity, distance)
  return light
}

init()


//const light = new THREE.AmbientLight(0x404040, 20)
//scene.add(light)

hlight = new THREE.AmbientLight(0x404040, 5)
scene.add(hlight)

directionalLight = new THREE.DirectionalLight(0xffffff, 10)
directionalLight.position.set(0,1,0)
directionalLight.castShadow = true
scene.add(directionalLight)

light = new THREE.PointLight(0xc4c4c4, 5)
light.position.set(0, 300, 500)
scene.add(light)

light2 = new THREE.PointLight(0xc4c4c4, 5)
light2.position.set(500, 100, 0)
scene.add(light2)

light3 = new THREE.PointLight(0xc4c4c4, 5)
light3.position.set(0, 100, -500)
scene.add(light3)

light4 = new THREE.PointLight(0xc4c4c4, 5)
light4.position.set(-500, 300, 500)
scene.add(light4)

var loader = new THREE.GLTFLoader()
loader.load(
  "/Porcoolpine.glb",
  function(gltf) {
    scene.add(gltf.scene)
    console.log(gltf)
  }
)
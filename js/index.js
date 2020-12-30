var scene, camera, renderer, controls
const width = window.innerWidth
const height = window.innerHeight
const ratio = width / height

const init = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, ratio, 1, 1000)
  camera.position.z = 7
  camera.position.y = 7
  camera.position.x = 3

  controls = new THREE.OrbitControls(camera, document.getElementById("viewport"))
  axis = new THREE.AxisHelper(300)
  scene.add(axis)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setClearColor("#e3e3e3")
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

var loader = new THREE.GLTFLoader()
loader.load(
  "/Porcoolpine.glb",
  function(gltf) {
    const material = new THREE.MeshBasicMaterial({color: 0xffff00})
    const mesh = new THREE.Mesh(gltf.scene, material)
    scene.add(mesh)
  }
)
import * as THREE from 'three';
import Experience from "./Experience";

export default class Renderer {
	constructor() {
		// Instancializing a singletong
		this.experience = new Experience();

		// Setup
		this.canvas = this.experience.canvas;
		this.sizes = this.experience.sizes;
		this.scene = this.experience.scene;
		this.camera = this.experience.camera;

		// Methods
		this.setInstance();
	}

	setInstance() {		
		this.instance = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true
		});
		this.instance.physicallyCorrectLights = true;
		this.instance.outputEncoding = THREE.sRGBEncoding;
		this.instance.toneMapping = THREE.CineonToneMapping;
		this.instance.toneMappingExposure = 1.75;
		this.instance.shadowMap.enabled = true;
		this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
		this.instance.setClearColor('#211d20');
		this.instance.setSize(this.sizes.width, this.sizes.height);
		this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	}

	resize() {
		this.instance.setSize(this.sizes.width, this.sizes.height);
		this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	}

	update() {
		this.instance.render(this.scene, this.camera.instance);
	}
}
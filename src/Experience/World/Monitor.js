import * as THREE from 'three';
import Experience from "../Experience";

export default class Monitor {
	constructor() {
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.resources = this.experience.resources;
		this.time = this.experience.time;
		this.debug = this.experience.debug;
		this.world = this.experience.world;

		// Setup
		this.resources = this.resources.items;		

		// Methods
		this.setModel();
	}

	setModel() {	
		this.model = {};		

		// Video
		this.model.video = document.createElement('video');
		this.model.video.muted = false;
		this.model.video.loop = true;
		this.model.video.controls = true;
		this.model.video.playsInline = true;
		this.model.video.autoplay = true;
		this.model.video.src = '/assets/videoPortfolio.mp4';

		this.model.video.style.position = 'fixed';
		this.model.video.style.top = 0;
		this.model.video.style.left = 0;
		this.model.video.style.zIndez = 1;

		// document.body.append(this.model.video);

		// Texture
		this.model.texture = new THREE.VideoTexture(this.model.video);
		this.model.texture.encoding = THREE.sRGBEncoding;

		// Material
		this.model.material = new THREE.MeshBasicMaterial({
			map: this.model.texture
		});

		this.model.mesh = this.resources.monitorScreenModel.scene.children[0];
		this.model.mesh.material = this.model.material;
		this.scene.add(this.model.mesh);
	}

	update() {
	}
}
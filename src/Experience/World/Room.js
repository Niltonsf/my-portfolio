import * as THREE from 'three';
import Experience from "../Experience";

export default class Room {
	constructor() {
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.resources = this.experience.resources;
		this.time = this.experience.time;
		this.debug = this.experience.debug;

		// Setup
		this.resources = this.resources.items;

		// Methods
		this.setModel();
	}

	setModel() {
		// Getting the model and the texture;
		this.model = this.resources.roomModel.scene;
		this.texture = this.resources.roomTexture;
		this.texture.flipY = false;
		this.texture.encoding = THREE.sRGBEncoding;

		// Inserting model and scaling
		this.model.scale.set(1, 1, 1);
		this.scene.add(this.model);

		// Creating the texture
		const bakedTexture = new THREE.MeshBasicMaterial({ 
			map: this.texture,
		});

		// Setting children with the texture
		this.model.traverse((child) => {
			child.material = bakedTexture;
		});
	}
}
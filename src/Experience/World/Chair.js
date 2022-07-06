import * as THREE from 'three';
import Experience from "../Experience";

export default class Chair {
	constructor() {
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.resources = this.experience.resources;
		this.time = this.experience.time;
		this.debug = this.experience.debug;
		this.world = this.experience.world;

		// Debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder({
				title: 'Chair',
				expanded: true
			});
		}

		// Setup
		this.resources = this.resources.items;		

		// Methods
		this.setModel();
	}

	setModel() {
		this.model = {
			animation: {
				speed: 0.0005
			}
		};		
		
		this.model.group = this.resources.chairModel.scene.children[0];
		this.scene.add(this.model.group);

		this.model.group.traverse((_child) => {
			if(_child instanceof THREE.Mesh) {				
				_child.material = this.world.room.model.material;
			}
		})

		// Debug
		if (this.debug.active) {
			this.debugFolder.addInput(
				this.model.animation,
				'speed',
				{
					min: 0.0,
					max: 0.0100,
					step: 0.0001
				}				
			)
		}
	}

	update() {
		this.model.group.rotation.y = Math.sin(this.time.elapsed * this.model.animation.speed) * 0.4;
	}
}
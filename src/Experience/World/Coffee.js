import * as THREE from 'three';
import Experience from "../Experience";
import vertexShader from '../Shaders/Coffee/vertex.glsl';
import fragmentShader from '../Shaders/Coffee/fragment.glsl';

export default class Coffee {
	constructor() {
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.resources = this.experience.resources;
		this.time = this.experience.time;
		this.debug = this.experience.debug;

		// Debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder({
				title: 'Coffee',
				expanded: true
			});
		}

		// Setup
		this.resources = this.resources.items;

		// Methods
		this.setModel();
	}

	setModel() {
		this.model = {};
		this.model.color = '#8c8685';
		this.model.material = new THREE.ShaderMaterial({
			transparent: true,
			depthWrite: false,
			vertexShader,
			fragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uTimeFrequency: { value: 0.0004 },
				uUvFrequency: { value: new THREE.Vector2(4, 5) },
				uColor: { value: new THREE.Color(this.model.color) }
			}
		});
		this.model.mesh = this.resources.coffeeModel.scene.children[0];
		this.model.mesh.material = this.model.material;

		this.scene.add(this.model.mesh);

		// Debug
		if (this.debug.active) {
			this.debugFolder.addInput(
				this.model,
				'color',
				{
					view: 'color'
				}
			).on('change', () => {
				this.model.material.uniforms.uColor.value.set(this.model.color)
			});

			this.debugFolder.addInput(
				this.model.material.uniforms.uTimeFrequency, 
				'value',
				{
					label: 'frequency',
					min: 0.0001,
					max: 0.005,
					step: 0.0001
				}
			);	

			this.debugFolder.addInput(
				this.model.material.uniforms.uUvFrequency.value, 
				'x',
				{
					min: 0.001,
					max: 20.0,
					step: 0.001
				}
			);	

			this.debugFolder.addInput(
				this.model.material.uniforms.uUvFrequency.value, 
				'y',
				{
					min: 0.001,
					max: 20.0,
					step: 0.001
				}
			);			
		}
	}

	update() {
		this.model.material.uniforms.uTime.value = this.time.elapsed;
	}
}
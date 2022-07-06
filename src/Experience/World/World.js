import * as THREE from 'three';
import Experience from "../Experience";
import Environment from "./Environment";
import Room from './Room';
import Coffee from './Coffee';

export default class World {
	constructor() {
		this.experience = new Experience();

		this.scene = this.experience.scene;
		this.resources = this.experience.resources;	

		// Wait for resources
		this.resources.on('ready', () => {
			// Class Instance
			this.room = new Room();
			this.coffee = new Coffee();
			// this.environment = new Environment();
		});
	}

	update() {
		// if (this.fox) this.fox.update();
		if(this.coffee) this.coffee.update();
	}
}
import * as THREE from 'three';
import Experience from "../Experience";
import Environment from "./Environment";
import Room from './Room';
import Coffee from './Coffee';
import Chair from './Chair';

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
			this.chair = new Chair();
			// this.environment = new Environment();
		});
	}

	update() {		
		if(this.coffee) this.coffee.update();
		if(this.chair) this.chair.update();
	}
}
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import EventEmitter from "./EventEmitter";

export default class Resources extends EventEmitter {
	constructor(sources) {
		// Instanciating event emitter
		super();

		// Setup
		this.sources = sources;
		this.items = {};
		this.loLoad = this.sources.length;
		this.loaded = 0;

		// Methods
		this.setLoaders();
		this.startLoading();
	}

	setLoaders() {
		this.loaders = {};
		this.loaders.gltfLoader = new GLTFLoader();
		this.loaders.textureLoader = new THREE.TextureLoader();
		this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
	}

	startLoading() {
		// Load each source
		for (const source of this.sources) {
			switch (source.type) {
				case 'gltfModel':
					this.loaders.gltfLoader.load(
						source.path,
						(file) => {
							this.sourceLoaded(source, file);
						}
					);
					break;
				case 'texture':
					this.loaders.textureLoader.load(
						source.path,
						(file) => {
							this.sourceLoaded(source, file);
						}
					);
					break;
				case 'cubeTexture':
					this.loaders.cubeTextureLoader.load(
						source.path,
						(file) => {
							this.sourceLoaded(source, file);
						}
					);
					break;
				default:
					console.log('Erro in loading texture');
					return;
			}			
		}
	}

	sourceLoaded(source, file) {
		this.items[source.name] = file;
		this.loaded++;
		if (this.loaded === this.loLoad) {			
			this.trigger('ready');
		}
	}
}
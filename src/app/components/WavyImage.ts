import * as THREE from 'three';

// Function type signature
export default function initializeScene(container: HTMLDivElement, imgSrc: string): void {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, planeMesh: THREE.Mesh;
    let easeFactor: number = 0.02;
    let mousePosition: { x: number; y: number } = { x: 0.5, y: 0.5 };
    let targetMousePosition: { x: number; y: number } = { x: 0.5, y: 0.5 };
    let aberrationIntensity: number = 0.0;
    let prevPosition: { x: number; y: number } = { x: 0.5, y: 0.5 };

    const vertexShader: string = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const fragmentShader: string = `
        varying vec2 vUv;
        uniform sampler2D u_texture;    
        uniform vec2 u_mouse;
        uniform vec2 u_prevMouse;
        uniform float u_aberrationIntensity;

        void main() {
            vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
            vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
            
            vec2 mouseDirection = u_mouse - u_prevMouse;
            
            vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
            float pixelDistanceToMouse = length(pixelToMouseDirection);
            float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
        
            vec2 uvOffset = strength * - mouseDirection * 0.2;
            vec2 uv = vUv - uvOffset;

            vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
            vec4 colorG = texture2D(u_texture, uv);
            vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

            gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
        }
    `;

    // Create a THREE.js texture loader
    const textureLoader = new THREE.TextureLoader();

    textureLoader.load(imgSrc, (texture: THREE.Texture) => {
        // Initialize the scene, camera, and renderer
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(
            80,
            container.offsetWidth / container.offsetHeight,
            0.01,
            10
        );
        camera.position.z = 1;

        const shaderUniforms = {
            u_mouse: { value: new THREE.Vector2() },
            u_prevMouse: { value: new THREE.Vector2() },
            u_aberrationIntensity: { value: 0.0 },
            u_texture: { value: texture },
        };

        planeMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            new THREE.ShaderMaterial({
                uniforms: shaderUniforms,
                vertexShader,
                fragmentShader,
            })
        );

        scene.add(planeMesh);

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        function animate(): void {
            requestAnimationFrame(animate);

            mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
            mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

            if (planeMesh) {
                (planeMesh.material as THREE.ShaderMaterial).uniforms.u_mouse.value.set(mousePosition.x, 1.0 - mousePosition.y);
                (planeMesh.material as THREE.ShaderMaterial).uniforms.u_prevMouse.value.set(prevPosition.x, 1.0 - prevPosition.y);

                aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);
                (planeMesh.material as THREE.ShaderMaterial).uniforms.u_aberrationIntensity.value = aberrationIntensity;
            }

            renderer.render(scene, camera);
        }

        animate();

        // Event listeners for mouse movement
        container.addEventListener('mousemove', (event: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            prevPosition = { ...targetMousePosition };

            targetMousePosition.x = (event.clientX - rect.left) / rect.width;
            targetMousePosition.y = (event.clientY - rect.top) / rect.height;

            aberrationIntensity = 1;
        });
    });
}

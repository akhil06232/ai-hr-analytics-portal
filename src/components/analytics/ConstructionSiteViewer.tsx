
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Construction, Activity, AlertTriangle, Users } from 'lucide-react';

export function ConstructionSiteViewer() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const controlsRef = useRef<any>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x808080,
      roughness: 0.8,
      metalness: 0.2
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Building structure
    const buildingGroup = new THREE.Group();

    // Foundation
    const foundationGeometry = new THREE.BoxGeometry(4, 0.2, 4);
    const concreteMaterial = new THREE.MeshStandardMaterial({
      color: 0x888888,
      roughness: 0.7,
      metalness: 0.2
    });
    const foundation = new THREE.Mesh(foundationGeometry, concreteMaterial);
    foundation.position.y = 0.1;
    foundation.castShadow = true;
    foundation.receiveShadow = true;
    buildingGroup.add(foundation);

    // Walls
    const wallGeometry = new THREE.BoxGeometry(0.2, 2, 4);
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      roughness: 0.5,
      metalness: 0.3
    });

    // Front wall
    const frontWall = new THREE.Mesh(wallGeometry, wallMaterial);
    frontWall.position.set(-2, 1.1, 0);
    frontWall.castShadow = true;
    buildingGroup.add(frontWall);

    // Back wall
    const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
    backWall.position.set(2, 1.1, 0);
    backWall.castShadow = true;
    buildingGroup.add(backWall);

    // Side walls
    const sideWallGeometry = new THREE.BoxGeometry(4, 2, 0.2);
    const leftWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
    leftWall.position.set(0, 1.1, -2);
    leftWall.castShadow = true;
    buildingGroup.add(leftWall);

    const rightWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
    rightWall.position.set(0, 1.1, 2);
    rightWall.castShadow = true;
    buildingGroup.add(rightWall);

    scene.add(buildingGroup);

    // Progress indicator (wireframe overlay)
    const progressGeometry = new THREE.BoxGeometry(4.2, 2.2, 4.2);
    const progressMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const progressOverlay = new THREE.Mesh(progressGeometry, progressMaterial);
    progressOverlay.position.set(0, 1.1, 0);
    scene.add(progressOverlay);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate building slightly
      buildingGroup.rotation.y += 0.002;
      progressOverlay.rotation.y += 0.002;
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Construction className="w-5 h-5 text-blue-600" />
            Construction Site Digital Twin
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Safety Alerts
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Update View
            </button>
          </div>
        </div>
        <div ref={mountRef} className="h-[400px] rounded-lg overflow-hidden bg-gray-900" />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-green-600" />
          Site Analytics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-medium text-blue-800">Progress</p>
            <p className="text-2xl font-bold text-blue-600">67%</p>
            <p className="text-sm text-blue-600">On schedule</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="font-medium text-green-800">Active Workers</p>
            <p className="text-2xl font-bold text-green-600">24</p>
            <p className="text-sm text-green-600">All zones covered</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="font-medium text-purple-800">Safety Score</p>
            <p className="text-2xl font-bold text-purple-600">98%</p>
            <p className="text-sm text-purple-600">No incidents today</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <p className="font-medium text-orange-800">Equipment</p>
            <p className="text-2xl font-bold text-orange-600">12/15</p>
            <p className="text-sm text-orange-600">Active machinery</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50 rounded-lg flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <div>
              <p className="font-medium text-red-800">Safety Alert</p>
              <p className="text-sm text-red-600">Zone B requires additional safety equipment</p>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg flex items-center gap-4">
            <Users className="w-8 h-8 text-blue-600" />
            <div>
              <p className="font-medium text-blue-800">Crew Update</p>
              <p className="text-sm text-blue-600">New crew assigned to foundation work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,1,3);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0x111111, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
	
		var migeometria = new THREE.Geometry();
        var migeometria2 = new THREE.Geometry();
	var a=0.0;
	var b=0.5;
	var c=-0.5;
	
	migeometria.vertices.push( new THREE.Vector3( a, a, a ) );
	migeometria.vertices.push( new THREE.Vector3( b, a, a ) );
	migeometria.vertices.push( new THREE.Vector3( b, b, a ) );
	
	migeometria.vertices.push( new THREE.Vector3( a, a, a ) );
	migeometria.vertices.push( new THREE.Vector3( b, b, a ) );
	migeometria.vertices.push( new THREE.Vector3( a, b, a ) );
	//cara1
	
	migeometria.vertices.push( new THREE.Vector3( a, a, a ) );
	migeometria.vertices.push( new THREE.Vector3( a, a, c ) );
	migeometria.vertices.push( new THREE.Vector3( b, a, a ) );

	migeometria.vertices.push( new THREE.Vector3( a, a, c ) );
	migeometria.vertices.push( new THREE.Vector3( b, a, c ) );
	migeometria.vertices.push( new THREE.Vector3( b, a, a ) );
	//cara2
	migeometria.vertices.push( new THREE.Vector3( b, a, a ) );
	migeometria.vertices.push( new THREE.Vector3( b, a, c ) );
	migeometria.vertices.push( new THREE.Vector3( b, b, c ) );

	migeometria.vertices.push( new THREE.Vector3( b, a, a ) );
	migeometria.vertices.push( new THREE.Vector3( b, b, c ) );
	migeometria.vertices.push( new THREE.Vector3( b, b, a ) );
	//cara3
	
	migeometria.vertices.push( new THREE.Vector3( b, a, c ) );
	migeometria.vertices.push( new THREE.Vector3( a, b, c ) );
	migeometria.vertices.push( new THREE.Vector3( b, b, c ) );

	migeometria.vertices.push( new THREE.Vector3( b, a, c ) );
	migeometria.vertices.push( new THREE.Vector3( a, a, c ) );
	migeometria.vertices.push( new THREE.Vector3( a, b, c ) );
	//cara4
	migeometria.vertices.push( new THREE.Vector3( a, a, a ) );
	migeometria.vertices.push( new THREE.Vector3( a, b, a ) );
	migeometria.vertices.push( new THREE.Vector3( a, a, c ) );

	migeometria.vertices.push( new THREE.Vector3( a, b, a  ) );
	migeometria.vertices.push( new THREE.Vector3( a, b, c ) );
	migeometria.vertices.push( new THREE.Vector3( a, a, c ) );
	//cara5
	
	migeometria.vertices.push( new THREE.Vector3( a, b, a ) );
	migeometria.vertices.push( new THREE.Vector3( b, b, a ) );
	migeometria.vertices.push( new THREE.Vector3( b, b, c ) );

	migeometria.vertices.push( new THREE.Vector3( a, b, a  ) );
	migeometria.vertices.push( new THREE.Vector3( b, b, c ) );
	migeometria.vertices.push( new THREE.Vector3( a, b, c ) );
	//cara6
	//-------------------------------------------------
	var a1=-0.3;
	var b1=0.0;
	var c1=0.0;
	//c1
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -0.3,0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, -0.3, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.0 ) );
	
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -0.3, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, 0.0, 0.0 ) );
	//c2
	migeometria2.vertices.push( new THREE.Vector3( 0.3, -0.3,0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, -0.3, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.4 ) );
	
	migeometria2.vertices.push( new THREE.Vector3( 0.3, -0.3, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.0 ) );
	//c3
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -0.3,-0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -0.3, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, 0.0, 0.0 ) );
	
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -0.3, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, 0.0, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, 0.0, -0.4 ) );
	
	//cuello
	//-------------------------------------------
	//c1
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -0.2, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.3, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.85, -0.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.3, 0.0) );
	
	//c2
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -0.2, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.2, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.3, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.2, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.3, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.3, -0.4) );
	//c3
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -0.2, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.3, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.85, -0.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.3, 0.0) );
	//c4
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -0.2, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.3, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.85, -0.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.3, 0.0) );
	//pecho
	//--------------------------
	//c1
	migeometria2.vertices.push( new THREE.Vector3( -0.3, -0.4, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.35, -1, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.75, -0.4, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.35, -1, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.70, -1.1, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.75, -0.4, 0.0) );
	//c2
	migeometria2.vertices.push( new THREE.Vector3( 0.70, -1.1, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.70, -1.1, -0.5) );
	migeometria2.vertices.push( new THREE.Vector3( 0.75, -0.4, -0.5 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.70, -1.1, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.75, -0.4, -0.5 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.75, -0.4, 0.0) );
	//c3
	migeometria2.vertices.push( new THREE.Vector3( -0.3, -0.4, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.3, -0.4, -0.5) );
	migeometria2.vertices.push( new THREE.Vector3( -0.35, -1, -0.5 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.3, -0.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.35, -1, -0.5 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.35, -1, 0.0) );
	//torso
	//---------------------------------------------------------
	//c1
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -1, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.25, -1.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.55, -1, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.25, -1.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.5, -1.47, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.55, -1, 0.0) );
	//c2
	migeometria2.vertices.push( new THREE.Vector3( 0.5, -1.47, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.5, -1.47, -0.5) );
	migeometria2.vertices.push( new THREE.Vector3( 0.55, -1, -0.5 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.5, -1.47, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.55, -1, -0.5 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.55, -1, 0.0) );
	//c3
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -1, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -1., -0.5) );
	migeometria2.vertices.push( new THREE.Vector3( -0.25, -1.4, -0.5 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.2, -1, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3(-0.25, -1.4, -0.5 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.25, -1.4, -0.0) );
	//abdomen
	//-----------------------------------------
	//c1
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -1.4, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.55, -1.6, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.8, -1.5, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.55, -1.6, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.75, -1.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.8, -1.5, 0.0) );
	
	//c2
	migeometria2.vertices.push( new THREE.Vector3( -0.45, -1.4, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -1.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -1.5, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.5, -1.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.8, -1.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -1.5, -0.4) );
	//cintura
	//-------------------------------------------------
	migeometria2.vertices.push( new THREE.Vector3( 0.0, -1.6, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, -1.8, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -1.8, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.0, -1.6, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -1.8, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -1.6, 0.0) );
	//entrepierna
	//------------------
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -1.6, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.5, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.2, -1.6, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, -1.6, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.5, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, -1.6, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, -1.6, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, -1.6, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -1.6, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -1.6, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.5, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.2, -1.6, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.5, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.5, 0.0) );
	//muslo1
	//----------------------
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -1.6, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.5, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.2, -1.6, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -1.6, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.5, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -1.6, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -1.6, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -1.6, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -1.6, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -1.6, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.5, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.2, -1.6, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.5, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.5, 0.0) );
	//muslo2
	//----------------------
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.7, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.5, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.7, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.5, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.5, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.5, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.5, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.7, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.7, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.7, 0.0) );
	//rodilla
	//------------------------
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.7, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.5, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.7, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.5, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.5, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.6, -2.5, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.5, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.7, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.7, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.7, 0.0) );
	//rodilla2
	//------------------------
	migeometria2.vertices.push( new THREE.Vector3( -0.35, -2.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.3, -3.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.15, -3.5, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.4, -2.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.15, -3.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.7, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( -0.15, -3.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.15, -3.5, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.7, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.15, -3.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.7, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.2, -2.7, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( -0.35, -2.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.35, -2.7, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( -0.3, -3.5, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.35, -2.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.3, -3.5, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.3, -3.5, 0.0) );
	//pierna
	//--------------------------------------
	migeometria2.vertices.push( new THREE.Vector3( 0.42, -2.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, -3.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.45, -3.5, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.4, -2.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.45, -3.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.58, -2.7, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( 0.45, -3.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.45, -3.5, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( 0.58, -2.7, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.45, -3.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.58, -2.7, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.58, -2.7, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( 0.42, -2.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.42, -2.7, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, -3.5, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.42, -2.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, -3.5, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, -3.5, 0.0) );
	//pierna2
	//--------------------------------------
	migeometria2.vertices.push( new THREE.Vector3( -0.32, -3.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.32, -3.55, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.12, -3.55, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.32, -3.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.12, -3.55, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.12, -3.5, 0.0) );
	//pantorrilla
	//---------------------
	migeometria2.vertices.push( new THREE.Vector3( 0.25, -3.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.25, -3.55, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.5, -3.55, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.25, -3.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.5, -3.55, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.5, -3.5, 0.0) );
	//pantorrilla2
	//---------------------
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.55, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.70, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.70, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.55, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.70, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.55, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.70, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.70, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.55, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.70, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.55, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.55, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.55, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.55, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.70, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.55, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.70, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.70, 0.0) );
	//superficie
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.55, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.55, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.55, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.5, -3.55, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.55, -0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.1, -3.55, -0.4) );
	//pie
	//------------------------------
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.55, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.70, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.70, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.55, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.70, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.55, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.70, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.70, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.55, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.70, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.55, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.55, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.55, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.55, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.70, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.55, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.70, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.70, 0.0) );
	//superficie
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.55, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.55, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.55, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.2, -3.55, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.55, -0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.65, -3.55, -0.4) );
	//pie2
	//------------------------------
	migeometria2.vertices.push( new THREE.Vector3( -0.6, -0.2, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -0.45, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.3, -0.3, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.6, -0.2, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.3, -0.4, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -0.1, 0.0) );
	
	//der
	migeometria2.vertices.push( new THREE.Vector3( -0.3, -0.4, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.3, -0.4, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -0.1, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.3, -0.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -0.1, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.4, -0.1, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( -0.6, -0.2, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.6, -0.2, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -0.4, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.6, -0.2, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -0.4, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -0.4, 0.0) );
	//hombro1
	//---------------------------------
	migeometria2.vertices.push( new THREE.Vector3( 0.8, -0.25, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.1, -0.35, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.8, -0.25, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.1, -0.35, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1, -0.1, 0.0) );
	
	//der
	migeometria2.vertices.push( new THREE.Vector3( 1.1, -0.35, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.1, -0.35, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 1, -0.1, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.1, -0.35, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1, -0.1, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1, -0.1, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( 0.8, -0.25, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.8, -0.25, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.5, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.8, -0.25, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.5, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.5, 0.0) );
	//hombro2
	//---------------------------------
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -0.2, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.2, -0.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -0.7, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.5, -0.2, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -0.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.4, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -0.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -0.7, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.4, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.15, -0.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.4, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.45, -0.4, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -0.2, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -0.5, -0.2, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( -1.2, -0.5, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( -0.5, -0.2, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.2, -0.5, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.2, -0.5, 0.0) );
	//brazo1
	//------------------------------------------
	
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.4, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.1, -1.2, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.25, -1.1,0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.25, -1.1, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.05, -0.3, 0.0) );
	
	//der
	migeometria2.vertices.push( new THREE.Vector3( 1.25, -1.1, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.25, -1.1, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 1.05, -0.3, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.25, -1.1, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.05, -0.3, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.05, -0.3, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.4, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.4, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 1.1, -1.2, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.9, -0.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.1, -1.2, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.1, -1.2, 0.0) );
	//BRAZO2
	//---------------------------------
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -0.45, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.3, -0.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.05, -0.5, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.3, -0.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.06, -0.8, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1, -0.45, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( -1.06, -0.8, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.06, -0.8, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( -1, -0.45, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.06, -0.8, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1, -0.45, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1, -0.45, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -0.45, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -0.45, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( -1.3, -0.7, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.25, -0.45, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.3, -0.7, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.3, -0.7, 0.0) );
	//codo1
	//--------------------------------------------
	migeometria2.vertices.push( new THREE.Vector3( 1.05, -1.2, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1.38, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.35, -1.2, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.05, -1.2, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.35, -1.2, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1., 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( 1.35, -1.2, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.35, -1.2, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.35, -1.2, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( 1.05, -1.2, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.05, -1.2, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1.38, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.05, -1.2, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1.38, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1.38, 0.0) );
	//codo2
	//--------------------------------------------
	
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -0.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.4, -1.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -1.6, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.25, -0.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -1.6, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.08, -0.6, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -1.6, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -1.6, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( -1.08, -0.6, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.25, -1.6, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.08, -0.6, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.08, -0.6, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -0.7, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -0.7, -0.3) );
	migeometria2.vertices.push( new THREE.Vector3( -1.4, -1.5, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.25, -0.7, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.4, -1.5, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.4, -1.5, 0.0) );
	//antebrazo1
	//------------------------------------------
	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1.1, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.3, -1.28, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.8, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1.1, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.8, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.65, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.8, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.8, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.65, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.8, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.65, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.65, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1.1, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1.1, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 1.3, -1.28, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.2, -1.1, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.3, -1.28, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.3, -1.28, 0.0) );
	//antebrazo2
	//--------------------------------------------
	migeometria2.vertices.push( new THREE.Vector3( -1.45, -1.4, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.35, -1.65, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -1.55, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.45, -1.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -1.55, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -1.3, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -1.55, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -1.55, -0.35) );
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -1.3, -0.35 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.15, -1.55, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -1.3, -0.35 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -1.3, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( -1.45, -1.4, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.45, -1.4, -0.35) );
	migeometria2.vertices.push( new THREE.Vector3( -1.35, -1.65, -0.35 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.45, -1.4, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.35, -1.65, -0.35 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.35, -1.65, 0.0) );
	//mano1
	//--------------------------------
	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.6, -0.8, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.9, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.9, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.8, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.9, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.9, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.8, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.9, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.8, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.8, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.5, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.5, -0.4) );
	migeometria2.vertices.push( new THREE.Vector3( 1.6, -0.8, -0.4 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.6, -0.8, -0.4 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.6, -0.8, 0.0) );
	//mano2
	//--------------------------------------------
	migeometria2.vertices.push( new THREE.Vector3( -1.34, -1.65, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.28, -1.95, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.25, -1.55, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.24, -1.6, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.05, -1.83, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -1.55, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( -1.05, -1.83, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.05, -1.83, -0.2) );
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -1.55, -0.2 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.05, -1.83, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -1.55, -0.2 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.15, -1.55, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( -1.34, -1.65, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.34, -1.65, -0.2) );
	migeometria2.vertices.push( new THREE.Vector3( -1.28, -1.95, -0.2 ) );

	migeometria2.vertices.push( new THREE.Vector3( -1.34, -1.65, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( -1.28, -1.95, -0.2 ) );
	migeometria2.vertices.push( new THREE.Vector3( -1.28, -1.95, 0.0) );
	//dedos1
	//---------------------------------------
	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.65, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.8, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 2.2, -0.5, 0.0 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.7, -0.5, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.65, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.2, 0.0) );
	//der
	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.65, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.65, -0.2) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.2, -0.2 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.65, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.2, -0.2 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.2, 0.0) );
	//izq
	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.65, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.65, -0.2) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.8, -0.2 ) );

	migeometria2.vertices.push( new THREE.Vector3( 1.8, -0.65, 0.0) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.8, -0.2 ) );
	migeometria2.vertices.push( new THREE.Vector3( 1.9, -0.8, 0.0) );
	//dedos2
	//---------------------------------------
	

	migeometria.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria.faces.push( new THREE.Face3( 3, 4, 5 ) );
	migeometria.faces.push( new THREE.Face3( 6, 7, 8 ) );
	migeometria.faces.push( new THREE.Face3( 9, 10, 11 ) );
	migeometria.faces.push( new THREE.Face3( 12, 13, 14 ) );
	migeometria.faces.push( new THREE.Face3( 15, 16, 17 ) );
	migeometria.faces.push( new THREE.Face3( 18, 19, 20 ) );
	migeometria.faces.push( new THREE.Face3( 21, 22, 23 ) );
	migeometria.faces.push( new THREE.Face3( 24, 25, 26 ) );
	migeometria.faces.push( new THREE.Face3( 27, 28, 29 ) );
	migeometria.faces.push( new THREE.Face3( 30, 31, 32 ) );
	migeometria.faces.push( new THREE.Face3( 33, 34, 35 ) );
	
	migeometria2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria2.faces.push( new THREE.Face3( 3, 4, 5 ) );
	migeometria2.faces.push( new THREE.Face3( 6, 7, 8 ) );
	migeometria2.faces.push( new THREE.Face3( 9, 10, 11 ) );
	migeometria2.faces.push( new THREE.Face3( 12, 13, 14 ) );
	migeometria2.faces.push( new THREE.Face3( 15, 16, 17 ) );
	migeometria2.faces.push( new THREE.Face3( 18, 19, 20 ) );
	migeometria2.faces.push( new THREE.Face3( 21, 22, 23 ) );
	migeometria2.faces.push( new THREE.Face3( 24, 25, 26 ) );
	migeometria2.faces.push( new THREE.Face3( 27, 28, 29 ) );
	migeometria2.faces.push( new THREE.Face3( 30, 31, 32 ) );
	migeometria2.faces.push( new THREE.Face3( 33, 34, 35 ) );
	migeometria2.faces.push( new THREE.Face3( 36, 37, 38 ) );
	migeometria2.faces.push( new THREE.Face3( 39, 40, 41 ) );
	migeometria2.faces.push( new THREE.Face3( 42, 43, 44 ) );
	migeometria2.faces.push( new THREE.Face3( 45, 46, 47 ) );
	migeometria2.faces.push( new THREE.Face3( 48, 49, 50 ) );
	migeometria2.faces.push( new THREE.Face3( 51, 52, 53 ) );
	migeometria2.faces.push( new THREE.Face3( 54, 55, 56 ) );
	migeometria2.faces.push( new THREE.Face3( 57, 58, 59 ) );
	migeometria2.faces.push( new THREE.Face3( 60, 61, 62 ) );
	migeometria2.faces.push( new THREE.Face3( 63, 64, 65 ) );
	migeometria2.faces.push( new THREE.Face3( 66, 67, 68 ) );
	migeometria2.faces.push( new THREE.Face3( 69, 70, 71 ) );
	migeometria2.faces.push( new THREE.Face3( 72, 73, 74 ) );
	migeometria2.faces.push( new THREE.Face3( 75, 76, 77 ) );
	migeometria2.faces.push( new THREE.Face3( 78, 79, 80 ) );
	migeometria2.faces.push( new THREE.Face3( 81, 82, 83 ) );
	migeometria2.faces.push( new THREE.Face3( 84, 85, 86 ) );
	migeometria2.faces.push( new THREE.Face3( 87, 88, 89 ) );
	migeometria2.faces.push( new THREE.Face3( 90, 91, 92 ) );
	migeometria2.faces.push( new THREE.Face3( 93, 94, 95 ) );
	migeometria2.faces.push( new THREE.Face3( 96, 97, 98 ) );
	migeometria2.faces.push( new THREE.Face3( 99, 100, 101 ) );
	migeometria2.faces.push( new THREE.Face3( 102, 103, 104 ) );
	migeometria2.faces.push( new THREE.Face3( 105, 106, 107 ) );
	migeometria2.faces.push( new THREE.Face3( 108, 109, 110 ) );
	migeometria2.faces.push( new THREE.Face3( 111, 112, 113 ) );
	migeometria2.faces.push( new THREE.Face3( 114, 115, 116 ) );
	migeometria2.faces.push( new THREE.Face3( 117, 118, 119 ) );
	migeometria2.faces.push( new THREE.Face3( 120, 121, 122 ) );
	migeometria2.faces.push( new THREE.Face3( 123, 124, 125 ) );
	migeometria2.faces.push( new THREE.Face3( 126, 127, 128 ) );
	migeometria2.faces.push( new THREE.Face3( 129, 130, 131 ) );
	migeometria2.faces.push( new THREE.Face3( 132, 133, 134 ) );
	migeometria2.faces.push( new THREE.Face3( 135, 136, 137 ) );
	migeometria2.faces.push( new THREE.Face3( 138, 139, 140 ) );
	migeometria2.faces.push( new THREE.Face3( 141, 142, 143 ) );
	migeometria2.faces.push( new THREE.Face3( 144, 145, 146 ) );
	migeometria2.faces.push( new THREE.Face3( 147, 148, 149 ) );
	migeometria2.faces.push( new THREE.Face3( 150, 151, 152 ) );
	migeometria2.faces.push( new THREE.Face3( 153, 154, 155 ) );
	migeometria2.faces.push( new THREE.Face3( 156, 157, 158) );
	migeometria2.faces.push( new THREE.Face3( 159, 160, 161 ) );
	migeometria2.faces.push( new THREE.Face3( 162, 163, 164 ) );
	migeometria2.faces.push( new THREE.Face3( 165, 166, 167 ) );
	migeometria2.faces.push( new THREE.Face3( 168, 169, 170 ) );
	migeometria2.faces.push( new THREE.Face3( 171, 172, 173 ) );
	migeometria2.faces.push( new THREE.Face3( 174, 175, 176 ) );
	migeometria2.faces.push( new THREE.Face3( 177, 178, 179 ) );
	migeometria2.faces.push( new THREE.Face3( 180, 181, 182 ) );
	migeometria2.faces.push( new THREE.Face3( 183, 184, 185 ) );
	migeometria2.faces.push( new THREE.Face3( 186, 187, 188 ) );
	migeometria2.faces.push( new THREE.Face3( 189, 190, 191 ) );
	migeometria2.faces.push( new THREE.Face3( 192, 193, 194 ) );
	migeometria2.faces.push( new THREE.Face3( 195, 196, 197 ) );
	migeometria2.faces.push( new THREE.Face3( 198, 199, 200 ) );
	migeometria2.faces.push( new THREE.Face3( 201, 202, 203 ) );
	migeometria2.faces.push( new THREE.Face3( 204, 205, 206 ) );
	migeometria2.faces.push( new THREE.Face3( 207, 208, 209 ) );
	migeometria2.faces.push( new THREE.Face3( 210, 211, 212 ) );
	migeometria2.faces.push( new THREE.Face3( 213, 214, 215 ) );
	migeometria2.faces.push( new THREE.Face3( 216, 217, 218 ) );
	migeometria2.faces.push( new THREE.Face3( 219, 220, 221 ) );
	migeometria2.faces.push( new THREE.Face3( 222, 223, 224 ) );
	migeometria2.faces.push( new THREE.Face3( 225, 226, 227 ) );
	migeometria2.faces.push( new THREE.Face3( 228, 229, 230) );
	migeometria2.faces.push( new THREE.Face3( 231, 232, 233 ) );
	migeometria2.faces.push( new THREE.Face3( 234, 235, 236 ) );
	migeometria2.faces.push( new THREE.Face3( 237, 238, 239 ) );
	migeometria2.faces.push( new THREE.Face3( 240, 241, 242 ) );
	migeometria2.faces.push( new THREE.Face3( 243, 244, 245 ) );
	migeometria2.faces.push( new THREE.Face3( 246, 247, 248 ) );
	migeometria2.faces.push( new THREE.Face3( 249, 250, 251 ) );
	migeometria2.faces.push( new THREE.Face3( 252, 253, 254 ) );
	migeometria2.faces.push( new THREE.Face3( 255, 256, 257 ) );
	migeometria2.faces.push( new THREE.Face3( 258, 259, 260 ) );
	migeometria2.faces.push( new THREE.Face3( 261, 262, 263 ) );
	migeometria2.faces.push( new THREE.Face3( 264, 265, 266 ) );
	migeometria2.faces.push( new THREE.Face3( 267, 268, 269 ) );
	migeometria2.faces.push( new THREE.Face3( 270, 271, 272 ) );
	migeometria2.faces.push( new THREE.Face3( 273, 274, 275 ) );
	migeometria2.faces.push( new THREE.Face3( 276, 277, 278 ) );
	migeometria2.faces.push( new THREE.Face3( 279, 280, 281 ) );
	migeometria2.faces.push( new THREE.Face3( 282, 283, 284 ) );
	migeometria2.faces.push( new THREE.Face3( 285, 286, 287 ) );
	migeometria2.faces.push( new THREE.Face3( 288, 289, 290 ) );
	migeometria2.faces.push( new THREE.Face3( 291, 292, 293 ) );
	migeometria2.faces.push( new THREE.Face3( 294, 295, 296 ) );
	migeometria2.faces.push( new THREE.Face3( 297, 298, 299 ) );
	migeometria2.faces.push( new THREE.Face3( 300, 301, 302 ) );
	migeometria2.faces.push( new THREE.Face3( 303, 304, 305 ) );
	migeometria2.faces.push( new THREE.Face3( 306, 307, 308 ) );
	migeometria2.faces.push( new THREE.Face3( 309, 310, 311 ) );
	migeometria2.faces.push( new THREE.Face3( 312, 313, 314 ) );
	migeometria2.faces.push( new THREE.Face3( 315, 316, 317 ) );
	migeometria2.faces.push( new THREE.Face3( 318, 319, 320 ) );
	migeometria2.faces.push( new THREE.Face3( 321, 322, 323 ) );
	migeometria2.faces.push( new THREE.Face3( 324, 325, 326 ) );
	migeometria2.faces.push( new THREE.Face3( 327, 328, 329 ) );
	migeometria2.faces.push( new THREE.Face3( 330, 331, 332 ) );
	migeometria2.faces.push( new THREE.Face3( 333, 334, 335 ) );
	migeometria2.faces.push( new THREE.Face3( 336, 337, 338 ) );
	migeometria2.faces.push( new THREE.Face3( 339, 340, 341 ) );
	migeometria2.faces.push( new THREE.Face3( 342, 343, 344 ) );
	migeometria2.faces.push( new THREE.Face3( 345, 346, 347 ) );
	migeometria2.faces.push( new THREE.Face3( 348, 349, 350 ) );
	migeometria2.faces.push( new THREE.Face3( 351, 352, 353 ) );
	migeometria2.faces.push( new THREE.Face3( 354, 355, 356 ) );
	migeometria2.faces.push( new THREE.Face3( 357, 358, 359 ) );
	migeometria2.faces.push( new THREE.Face3( 360, 361, 362 ) );
	migeometria2.faces.push( new THREE.Face3( 363, 364, 365 ) );
	migeometria2.faces.push( new THREE.Face3( 366, 367, 368 ) );
	migeometria2.faces.push( new THREE.Face3( 369, 370, 371 ) );
	migeometria2.faces.push( new THREE.Face3( 372, 373, 374 ) );
	migeometria2.faces.push( new THREE.Face3( 375, 376, 377 ) );
	migeometria2.faces.push( new THREE.Face3( 378, 379, 380 ) );
	migeometria2.faces.push( new THREE.Face3( 381, 382, 383 ) );
	migeometria2.faces.push( new THREE.Face3( 384, 385, 386 ) );
	migeometria2.faces.push( new THREE.Face3( 387, 388, 389 ) );
	migeometria2.faces.push( new THREE.Face3( 390, 391, 392 ) );
	migeometria2.faces.push( new THREE.Face3( 393, 394, 395 ) );
	migeometria2.faces.push( new THREE.Face3( 396, 397, 398 ) );
	migeometria2.faces.push( new THREE.Face3( 399, 400, 401 ) );
	migeometria2.faces.push( new THREE.Face3( 402, 403, 404 ) );
	migeometria2.faces.push( new THREE.Face3( 405, 406, 407 ) );
	migeometria2.faces.push( new THREE.Face3( 408, 409, 410 ) );
	migeometria2.faces.push( new THREE.Face3( 411, 412, 413 ) );
	migeometria2.faces.push( new THREE.Face3( 414, 415, 416 ) );
	migeometria2.faces.push( new THREE.Face3( 417, 418, 419 ) );
	migeometria2.faces.push( new THREE.Face3( 420, 421, 422 ) );
	migeometria2.faces.push( new THREE.Face3( 423, 424, 425 ) );
	migeometria2.faces.push( new THREE.Face3( 426, 427, 428 ) );
	migeometria2.faces.push( new THREE.Face3( 429, 430, 431 ) );
	migeometria2.faces.push( new THREE.Face3( 432, 433, 434 ) );
	migeometria2.faces.push( new THREE.Face3( 435, 436, 437 ) );
	migeometria2.faces.push( new THREE.Face3( 438, 439, 440 ) );
	migeometria2.faces.push( new THREE.Face3( 441, 442, 443 ) );
	migeometria2.faces.push( new THREE.Face3( 444, 445, 446 ) );
	migeometria2.faces.push( new THREE.Face3( 447, 448, 449 ) );
	migeometria2.faces.push( new THREE.Face3( 450, 451, 452 ) );
	migeometria2.faces.push( new THREE.Face3( 453, 454, 455 ) );
	migeometria2.faces.push( new THREE.Face3( 456, 457, 458 ) );
	migeometria2.faces.push( new THREE.Face3( 459, 460, 461 ) );
	migeometria2.faces.push( new THREE.Face3( 462, 463, 464 ) );
	migeometria2.faces.push( new THREE.Face3( 465, 466, 467 ) );
	//migeometria2.faces.push( new THREE.Face3( 468, 469, 470 ) );
	//migeometria2.faces.push( new THREE.Face3( 471, 472, 473 ) );
	


	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xFF0115 } ); // Material de color rojo
    var miobjeto = new THREE.Mesh (migeometria, material); // Crea el objeto
	
	var material2 = new THREE.MeshBasicMaterial( { color: 0xFF0115 } ); // Material de color rojo
    var miobjeto2 = new THREE.Mesh (migeometria2, material2); // Crea el objeto
	
	// SCENE

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	scene.add( miobjeto );
	scene.add( miobjeto2 );

}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}

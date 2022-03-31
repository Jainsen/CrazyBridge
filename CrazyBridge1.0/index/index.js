var ros = new ROSLIB.Ros({
    url : 'ws://192.168.1.65:8080'
    });

    ros.on('connection', function() {
    console.log('Connected to websocket server.');
    });

    ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
    });

    ros.on('close', function() {
    console.log('Connection to websocket server closed.');
    });

    // Publishing a Topic
    // ------------------

    var cmdVel = new ROSLIB.Topic({
    ros : ros,
    name : '/cmd_vel',
    messageType : 'geometry_msgs/Twist'
    });


    function readValues() {
    var linearX = document.getElementById("tbCx").value;
    var linearY = document.getElementById("tbCy").value;
    var linearZ = document.getElementById("tbCz").value;


    var angularX = document.getElementById("tbVx").value;
    var angularY = document.getElementById("tbVy").value;
    var angularZ = document.getElementById("tbVz").value;

    var twist = new ROSLIB.Message({
    linear: {
    x: linearX,
    y: linearY,
    z: linearZ
    },
    angular: {
    x: angularX,
    y: angularY,
    z: angularZ
    }
    });
    console.log("Publishing cmd_vel");
    cmdVel.publish(twist);
    
    }
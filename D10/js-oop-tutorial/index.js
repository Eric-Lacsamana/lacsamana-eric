// Object Literal
const circle = {
  radius: 1,
  location: { x: 1, y: 1 },
  draw() {
    console.log("draw");
  },
};

circle.draw();

// Factory Function
function createCircle(radius) {
  return {
    radius: radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
circle1.draw();

// Constructor Function (updated)
function Circle(radius) {
  this.radius = radius; // Properly set the radius
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(10);
console.log(another);

// Constructor Function using the Function constructor (not recommended)
function Circle2(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle2 = new Circle2(1);

// Demonstrating object reference behavior
let x = { value: 10 };
let y = x;

x.value = 20;

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); // Should log { value: 11 }

// Constructor Function (with location management)
function Circle3(radius) {
  this.radius = radius;
  this.location = {
    x: 0,
    y: 0,
  };

  this.draw = function () {
    console.log("draw");
  };

  this.setLocation = function (location) {
    if (!location.x || !location.y) throw new Error("Invalid location");
    this.location = location;
  };
}

const circle3 = new Circle3(10);
circle3.setLocation({ x: 1, y: 2 });
delete circle3.location; // Delete location

const propertyName = "location";
circle3[propertyName] = { x: 1, y: 2 };

// Iterating over properties
for (let key in circle3) {
  console.log(key, circle3[key]);
}

const keys = Object.keys(another);
console.log(keys);

if ("radius" in another) {
  console.log("Circle has radius");
}

// Circle4 with proper encapsulation and location management
function Circle4(radius) {
  this.radius = radius;
  let defaultLocation = {
    x: 0,
    y: 0,
  };

  let computeOptimumLocation = function () {};

  this.draw = function () {
    computeOptimumLocation(0.1);
    console.log("draw");
  };

  Object.defineProperty(this, "location", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location");
      defaultLocation = value;
    },
  });
}

// Circle5 with setter/getter for defaultLocation
function Circle5(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location");
      defaultLocation = value;
    },
  });
}

// Stopwatch example with private variables and duration tracking
function Stopwatch() {
  let startTime, endTime, running = false, duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch is already started");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

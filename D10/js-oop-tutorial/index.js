const circle = {
    radius: 1,
    location: {
      x: 1,
      y: 1,
    },
    draw: function () {
      console.log("draw");
    },
  };
  
  circle.draw();
  
  // Factory function
  function createCircle() {
    return {
      radius: 1,
      draw: function () {
        console.log("draw");
      },
    };
  }
  
  const circle1 = createCircle(1);
  circle1.draw();
  
  // Constructor Function
  function Circle() {
    this.radius = this.radius;
    this.draw = function () {
      console.log("draw");
    };
  }
  
  const another = new Circle(10);
  console.log(another);
  
  const Circle2 = new Function(
    "radius",
    `
  this.radius = this.radius;
    this.draw = function () {
      console.log("draw");
    };
  `
  );
  
  const circle2 = new Circle2(1);
  
  let x = {
    value: 10,
  };
  
  let y = x;
  
  x.value = 20;
  
  let obj = { value: 10 };
  
  function increase(obj) {
    obj.value++;
  }
  
  increase(obj);
  console.log(obj);
  
  // Constructor Function
  function Circle3() {
    this.radius = this.radius;
    this.draw = function () {
      console.log("draw");
    };
  }
  
  const circle3 = new Circle3(10);
  circle3.location = {
    x: 1,
  };
  delete circle3["location"];
  
  const propertyName = "";
  circle3[propertyName] = { x: 1 };
  
  for (let key in circle3) {
    console.log(key, circle3[key]);
  }
  
  const keys = Object.keys(another);
  console.log(keys);
  
  if ("radius" in another) {
    console.log("Circle has radius");
  }
  
  function Circle4() {
    this.radius = this.radius;
    let defaultLocation = {
      x: 0,
      y: 0,
    };
    let computeOptimumLocation = function () {};
    this.draw = function () {
      computeOptimumLocation(0.1);
      console.log("draw");
    };
  }
  
  function Circle5() {
    this.radius = this.radius;
    let defaultLocation = {
      x: 0,
      y: 0,
    };
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
  
  function Stopwatch() {
    let startTime, endTime, running, duration;
  
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
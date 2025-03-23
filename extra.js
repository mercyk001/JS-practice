//BUBBLESORT.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
            
    // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


let arr = [5, 6, 1, 3, 4, 2];
console.log(bubbleSort(arr));



//STAIRCASE.

function steps(n) {
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i));
    }
}


let levels = 2
steps(levels);




//VOLUME.

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}


let radius = "5"; 
let height = "10"; 
let cylinder = new Cylinder(Number(radius), Number(height));
console.log("Volume of the cylinder: " + cylinder.getVolume());
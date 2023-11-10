
class Smartphone {
    constructor(color, weight, size, rdc, ram) {
        this.color = color;
        this.weight = weight;
        this.size = size;
        this.cameraResolution = rdc;
        this.ramMemory = ram;
        this.isPoweredOn = false;
    }
    PressPowerButton() {
        if (this.isPoweredOn == false) {
            alert("Mobile is on");
            this.isPoweredOn = true;
        } else {
            alert("Mobile is off");
            this.isPoweredOn = false;
        }
    }

    Reboot() {
        if (this.isPoweredOn == true) {
            alert("Mobile is rebooting");
        } else {
            alert("Mobile is off");
        }
    }
    TakePhoto() {
        alert(`Photo take it with resolution: ${this.cameraResolution}`);
    }
    RecordVideo() {
        alert(`Video recording with ${this.cameraResolution}`);
    }
    MobileInfo() {
        return `
		Color: <b>${this.color}</b></br>
		Weight: <b>${this.weight}</b></br>
		Size: <b>${this.size}</b></br>
		Resolution of the Video: <b>${this.cameraResolution}</b></br>
		Ram Memory: <b>${this.ramMemory}</b></br>
		`;
    }
}


phone1 = new Smartphone("red", "150g", "5'", "hd", "1GB");
phone2 = new Smartphone("black", "155g", "5.4'", "full hd", "2GB");
phone3 = new Smartphone("white", "15046g", "5.9'", "full hd", "2GB");

// phone1.PressPowerButton();
// phone1.TakePhoto();
// phone1.RecordVideo();
// phone1.Reboot();



document.write(`
	${phone1.MobileInfo()} <br>
	${phone2.MobileInfo()} <br>
	${phone3.MobileInfo()} <br>
	`);

document.write("<br> <strong>High-end Phones specs</strong> <br>");

class ExpensivePhone extends Smartphone {
    constructor(color, weight, size, rdc, ram, rdce) {
        super(color,weight, size, rdc, ram);
        this.extraCameraResolution = rdce;
    }
    SlowModeRecording() {
        alert("Recording in slow mode");
    }
    FacialRecognition() {
        alert("Facial Recognition Activated")
    }
    InfoExpensivePhone() {
        return `
        ${this.MobileInfo()}
        Extra camer resolution: ${this.extraCameraResolution} </br>
        `;
    }
}

phone4 = new ExpensivePhone("red", "150g", "5", "hd", "1GB", "4k");
phone5 = new ExpensivePhone("black", "155g", "5.4", "full hd", "2GB", "4k");

document.write(`
    ${phone4.InfoExpensivePhone()} <br>
    ${phone5.InfoExpensivePhone()} <br>
    `);
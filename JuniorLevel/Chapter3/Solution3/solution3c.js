class App {
    constructor(downloads, rating, weight) {
        this.downloads = downloads;
        this.rating = rating;
        this.weight = weight;
        this.started = false;
        this.installed = false;
    }

    Install() {
        if (this.installed == false) {
            this.installed = true;
            alert("App installed correctly")
        }
    }
    Uninstall() {
        if (this.installed == true) {
            this.installed = false;
            alert("App uninstalled correctly")
        }
    }
    Open() {
        if (this.started == false && this.installed == true) {
            this.started = true;
            alert("App opened correctly");
        }
    }
    Close() {
        if (this.started == true && this.installed == true) {
            this.started = false;
            alert("App closed correctly");
        }
    }

    AppInfo() {
        return `
		Downloads: <b>${this.downloads}</b></br>
		Rating: <b>${this.rating}</b></br>
		Weight: <b>${this.weight}</b></br>
		`
    }

}


let app = new App("16.000", "5 stars", "900mb");
let app2 = new App("1.000", "4 stars", "400mb");
let app3 = new App("6.000", "4.5 stars", "100mb");
let app4 = new App("23.000", "4.8 stars", "1gb");
let app5 = new App("900", "5 stars", "250");
let app6 = new App("17", "3.7 stars", "522mb");
let app7 = new App("42.981", "2.9 stars", "723mb");


document.write(`
	${app.AppInfo()} <br>
	${app2.AppInfo()} <br>
	${app3.AppInfo()} <br>
	${app4.AppInfo()} <br>
	${app5.AppInfo()} <br>
	${app6.AppInfo()} <br>
	${app7.AppInfo()} <br>
	`);
export class Sleeping {
//TODO define these more individually so we dont request so much data we dont need but this is fine for now

    constructor(today, yesterday, lastWeek, Month, year) {
        var today = this.today;
        var yesterday = this.yesterday;
        var lastWeek = this.lastWeek;
        var Month = this.Month;
        var Year = this.year;
    }
    /*****************************    Weekly Sleep   ************************************** */
    getWeek() {

        return this.today;
return this.yesterday;
return this.lastWeek;
    }

    setWeek(value) {

        this.today = value;
        this.yesterday = value;
        this.lastWeek = value;
    }

    /*****************************    Monthly Sleep     ************************************** */
    getMonth() {
        return this.Month
    }

    setMonth(value) {
        this.Month = value;
    }
    /*****************************    Yearly Sleep     ************************************** */
    getYear() {
        return this.Month
    }

    setYear(value) {
        this.Year = value;
    }
}
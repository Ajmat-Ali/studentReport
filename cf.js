function StudentDetails(name,roll_no,Class,section,marks){
    this.name=name;
    this.roll_no=roll_no;
    this.Class=Class;
    this.section=section;
    this.marks=marks;

    this.printTop3Subjects = function(){
        let aryMarks = [];
        let aryNames = [];
        for(let key in this.marks){
            aryMarks.push(this.marks[key])
            aryNames.push(key)
        }
        
        aryNames.sort((subject1, subject2) => this.marks[subject2] - this.marks[subject1]);

        for (let i = 0; i < 3; i++) {
            const subject = aryNames[i];
            const marks = this.marks[subject];
            console.log(`${i + 1}. ${aryNames[i]} - ${marks}`);
        }
        
    }

    this.printReportCard = function(){
        let total = 0;
        for(let key in this.marks){
            total += this.marks[key]
        }
        const percentage = (total / (5 * 100)) * 100;
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name}`);
        console.log(`| Roll no. - ${this.roll_no}`);
        console.log(`| Class    - ${this.Class}`);
        console.log(`| Section  - ${this.section}`);
        for (const subject in this.marks) {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${this.marks[subject]}`);
        }

        console.log(`| Percentage - ${percentage.toFixed(1)}%`);
        console.log("+--------------------+");
    }

}

let stu1 = new StudentDetails("ajmat",2,"xii","A",{
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
})
stu1.printTop3Subjects();
stu1.printReportCard()






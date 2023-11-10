const subjects = {
    physics: [90, 6, 3, "physics"],
    maths: [84, 8, 2, "maths"],
    logic: [92, 8, 4, "logic"],
    chemistry: [96, 8, 4, "chemistry"],
    calculo: [91, 6, 3, "calculo"],
    programming: [79, 7, 4, "programming"],
    biology: [75, 9, 2, "biology"],
    bbdd: [98, 9, 1, "bbdd"],
    algebra: [100, 10, 4, "algebra"]
}


const showApprove = () => {
    for (subject in subjects) {

        let assistance = subjects[subject][0];
        let average = subjects[subject][1];
        let works = subjects[subject][2]

        console.log(subjects[subject][3]);

        if (assistance >= 90) {
            console.log("%c   Assistance in order", "color:green");
        } else {
            console.log("%c   You have missed a lot of classes", "color:red");
        }

        if (average >= 7) {
            console.log("%c   Average in order", "color:green");
        } else {
            console.log("%c   Average under the minimum", "color:red");
        }

        if (works >= 3) {
            console.log("%c   Practical Work in Order", "color:green");
        } else {
            console.log("%c   Not enough Practical work ", "color:red");
        }
    }
}

showApprove()


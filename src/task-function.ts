type Student = {
    name: string;
    score: number;
}

const getResultMessage = (student: Student): string => {
 if (student.score >= 60) {
   return `${student.name}さんは合格です。`;
 } else {
   return `${student.name}さんは不合格です。`;
 }
};

const studentA = {
 name: '侍太郎',
// score: '70点',
 score: 70,
};

let resultMessage = getResultMessage(studentA);

console.log(resultMessage);


/*

//教材の意図から外れそうな別コード

type Student = (name: string, score: number) => string;

const getResultMessage: Student = (name, score) => {
 if (score >= 60) {
   return `${name}さんは合格です。`;
 } else {
   return `${name}さんは不合格です。`;
 }
};

const studentA = {
 name: '侍太郎',
// score: '70点',
 score: 70,
};

let resultMessage = getResultMessage(studentA.name, studentA.score);

console.log(resultMessage);
*/
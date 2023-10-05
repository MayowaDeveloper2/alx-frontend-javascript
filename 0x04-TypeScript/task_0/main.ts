interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Mayowa",
	lastName: "Akintoye",
	age: 25,
	location: "Nigeria"
};

const student2: Student = {
        firstName: "John",
        lastName: "Doe",
        age: 28,
        location: "London"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "pink";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');

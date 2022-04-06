const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  // [32, 57, 22]
  // Task 1
  // Print the name list - As an array
  
  const getName = scores.map(student => student.name);
  console.log(getName);

  // Task 2
  // >=40 pass.. find those student that passed (Use array method)

  const passedstudents = scores.filter((student) => student.marks >= 40);
  console.log(passedstudents);
  
  // Task 3
  //  Find all the names who failed the exams (Array methods)
    
  const Failedstudents = scores.filter((student) => student.marks <=40);
  console.log(Failedstudents);

  
  // Task 4
  // Find the Average marks

  const totalmarks = scores.reduce((sum, stu) => sum + stu.marks, 0);
  const noofstudents = scores.length;
  const average = totalmarks / noofstudents;
  const roundedaverage = Number(average).toFixed(2);
  console.log(roundedaverage);

  // Task 5
  // Find the topper's name

  const topper = scores.reduce((winner, stu) =>
   winner.marks > stu.marks ? winner : stu
  );
  console.log(topper.name);

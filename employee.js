// declarations
let base_emp = [];
let sal_emp = [];
let comm_emp = [];
let i = 0;
let enter = "enter weekly pay for employee"
let noEnter = "enter valid employee type"

//get employee type, store entry in each array
   do { let employeeType = prompt(`enter an employee type:
\n 'B' for base employee \n 'S' for salary employee\n 'C' for commission employee \n press 'Enter' to see entry count`);

    if (employeeType == "B") {i++;
        base_emp[base_emp.length] = parseFloat(prompt(enter));
//if statements
    }   else if (employeeType == "S") {i++;
        sal_emp[sal_emp.length] = parseFloat(prompt(enter));

    }   else if (employeeType == "C") {i++;
        comm_emp[comm_emp.length] = parseFloat(prompt(enter));
    
    }   else if (employeeType != "B" || "S" || "C") {
        alert(noEnter + `\nCount:\n'B': ${base_emp.length}\n'S': ${sal_emp.length}\n'C': ${comm_emp.length}`);
   }
}   while(i < 12)

function sumEmpArr (sumArray) { //function to sum each array
    let total = 0;
    
     for (let number of sumArray){
         total += number;
     }
     return total;
}        
//print each employee's weekly salary and weekly salary total
document.write("<h4>Commission Employee's Weekly Pay</h4>","Emp1: $",comm_emp[0],"<br>Emp2: $",comm_emp[1],
"<br>Emp3: $",comm_emp[2],"<br>Emp4: $",comm_emp[3]);

document.write("<br>Total Weekly Commission Employee's Pay: $",sumEmpArr(comm_emp));

document.write("<h4>Base Employee's Weekly Pay</h4>","Emp5: $",base_emp[0],"<br>Emp6: $",base_emp[1],
"<br>Emp7: $",base_emp[2],"<br>Emp8: $",base_emp[3]);

document.write("<br>Total Weekly Base Employee's Pay: $",sumEmpArr(base_emp));

document.write("<h4>Salary Employee's Weekly Pay</h4>","Emp9: $",sal_emp[0],"<br>Emp10: $",sal_emp[1],
"<br>Emp11: $",sal_emp[2],"<br>Emp12: $",sal_emp[3]);

document.write("<br>Total Weekly Salary Employee's Pay: $",sumEmpArr(sal_emp));






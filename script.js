let student = []

        function addStudent() {
            let name = document.getElementById("name").value;
            let m1 = parseInt(document.getElementById("m1").value) || 0;
            let m2 = parseInt(document.getElementById("m2").value) || 0;
            let m3 = parseInt(document.getElementById("m3").value) || 0;
            let m4 = parseInt(document.getElementById("m4").value) || 0;
            let m5 = parseInt(document.getElementById("m5").value) || 0;



            if (!name) {
                alert("Please Enter Student Name!!")
                return;
            }

            let total = m1 + m2 + m3 + m4 + m5
            let avg = (total / 5).toFixed(2)
            let grade = CalculateGrade(avg)

            student.push({ name, m1, m2, m3, m4, m5, total, avg, grade });

            displayStud();

            document.getElementById("name").value = ""
            document.getElementById("m1").value = ""
            document.getElementById("m2").value = ""
            document.getElementById("m3").value = ""
            document.getElementById("m4").value = ""
            document.getElementById("m5").value = ""
        }

        //grade function
        function CalculateGrade(average) {
            if (average >= 90) {
                return 'A'
            } else if (average >= 80) {
                return 'B'
            } else if (average >= 70) {
                return 'C'
            } else if (average >= 60) {
                return 'D'
            } else {
                return 'F'
            }
        }

        function displayStud() {
            let table = document.getElementById("tableBody")
            table.innerHTML = ""

            student.forEach(t => {
                table.innerHTML += `
                <tr>
                    <td>${t.name}</td>
                    <td>${t.m1}</td>
                    <td>${t.m2}</td>
                    <td>${t.m3}</td>
                    <td>${t.m4}</td>
                    <td>${t.m5}</td>
                    <td><b>${t.total}</b></td>
                    <td>${t.avg}</td>
                    <td><span class="grade ${t.grade}">${t.grade}</span></td>
                 </tr>`;
            });
        }
fetch('./schedule.json')
    .then(response => {
      return response.json();
    })
    .then(jsondata => {

        

        const scheduleData = jsondata.schedule;
        console.log(scheduleData);
        const tbody = document.querySelector('.tbody');

        const bkYellow = [
            10,
            11,
            12,
            18,
            22,
            27,
            33,
            50,
        ]

        scheduleData.forEach((item, index) => {

            const newTr = document.createElement('tr');

            let strTd = '';

            if (bkYellow.includes(index)) {

                newTr.style.backgroundColor = 'yellow';

                strTd = `
                    <td>${item.time}</td>
                    <td>${item.place}</td>
                    <td>${item.progress}</td>
                    <td>${item.pic}</td>
                    <td>${item.etc}</td>
                `;

            } else {

                strTd = `
                    <td>${item.time}</td>
                    <td>${item.place}</td>
                    <td>${item.progress}</td>
                    <td>${item.pic}</td>
                    <td>${item.etc}</td>
                `;
            }

            newTr.innerHTML = strTd;

            tbody.append(newTr);
        })

    });




const temperatureValueElement = document.getElementById('temperature-value');
const temperatureTextElement = document.getElementById('temperature-text');

fetch('https://api.example.com/temperature') // Beispiel-URL für den REST-Aufruf zur Temperaturabfrage
  .then(response => response.json())
  .then(data => {
    const temperature = data.temperature;

    temperatureValueElement.textContent = temperature;

    if (temperature > 30) {
      temperatureValueElement.style.color = 'red';
      temperatureTextElement.textContent = 'Die aktuelle Temperatur liegt bei ' + temperature + ' Grad. Temperatur ist zu hoch.';
    } else if (temperature < 20) {
      temperatureValueElement.style.color = 'blue';
      temperatureTextElement.textContent = 'Die aktuelle Temperatur liegt bei ' + temperature + ' Grad. Temperatur ist zu kalt.';
    } else {
      temperatureValueElement.style.color = 'green';
      temperatureTextElement.textContent = 'Die aktuelle Temperatur liegt bei ' + temperature + ' Grad. Temperatur ist in Ordnung.';
    }
  })
  .catch(error => console.error(error));


  fetch('https://api.example.com/co2')
  .then(response => response.json())
  .then(data => {
    const co2Value = data.co2;

    // Verarbeite den CO2-Wert
    if (co2Value > 20) {
      console.log('CO2-Wert:', co2Value);
      console.log('CO2-Wert ist zu hoch.');
    } else if (co2Value < 19) {
      console.log('CO2-Wert:', co2Value);
      console.log('CO2-Wert ist zu niedrig.');
    }
  })
  .catch(error => console.error(error));

fetch('https://api.example.com/light')
  .then(response => response.json())
  .then(data => {
    const lightValue = data.light;

    // Verarbeite den Lichtwert
    if (lightValue > 20) {
      console.log('Lichtwert:', lightValue);
      console.log('Lichtwert ist zu hoch.');
    } else if (lightValue < 19) {
      console.log('Lichtwert:', lightValue);
      console.log('Lichtwert ist zu niedrig.');
    }
  })
  .catch(error => console.error(error));

fetch('https://api.example.com/humidity')
  .then(response => response.json())
  .then(data => {
    const humidityValue = data.humidity;

    // Verarbeite den Luftfeuchtigkeitswert
    if (humidityValue > 20) {
      console.log('Luftfeuchtigkeitswert:', humidityValue);
      console.log('Luftfeuchtigkeitswert ist zu hoch.');
    } else if (humidityValue < 19) {
      console.log('Luftfeuchtigkeitswert:', humidityValue);
      console.log('Luftfeuchtigkeitswert ist zu niedrig.');
    }
  })
  .catch(error => console.error(error));
  
  const dialogButton = document.getElementById('dialog-button');
  const myDialog = document.getElementById('my-dialog');
  const closeDialogButton = document.getElementById('close-dialog-button');
  const createReportButton = document.getElementById('create-report-button');
  const fromInput = document.getElementById('from-input');
  const toInput = document.getElementById('to-input');
  
  dialogButton.addEventListener('click', () => {
    myDialog.showModal();
  });
  
  closeDialogButton.addEventListener('click', () => {
    myDialog.close();
  });
  
  createReportButton.addEventListener('click', () => {
    const fromValue = fromInput.value;
    const toValue = toInput.value;
  
    // REST-Aufruf mit den eingegebenen Werten
    const url = `https://api.example.com/reportFromTo?from=${encodeURIComponent(fromValue)}&to=${encodeURIComponent(toValue)}`;
  
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Error');
        }
      })
      .then(data => {
        alert('PDF Created');
        console.log('Response Data:', data);
        // Hier kannst du weitere Aktionen ausführen, wenn der Report erfolgreich erstellt wurde
      })
      .catch(error => {
        alert('Error');
        console.error('Fehler beim Erstellen des Reports:', error);
        // Hier kannst du weitere Aktionen ausführen, wenn ein Fehler aufgetreten ist
      });
  
    myDialog.close();
  });
  

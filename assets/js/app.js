function calculateTime() {
    const numEmployees = document.getElementById("numEmployees").valueAsNumber;
    const informTimesInput = document.getElementById("informTime").value.trim();
    const informTimes = informTimesInput.split(",").map(time => parseInt(time.trim()));
  
    if (informTimes.length !== numEmployees) {
      alert("Please enter inform time for each employee.");
      return;
    }
  
    const totalTime = informAllEmployees(numEmployees, informTimes);
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<strong>Time Needed to Inform All Employees:</strong> " + totalTime + " minutes";
  }
  
  function informAllEmployees(numEmployees, informTimes) {
    const informTime = Array(numEmployees).fill(0);
  
    for (let i = 0; i < numEmployees; i++) {
      if (informTimes[i] !== -1) {
        informTime[informTimes[i]] += 1 + informTime[i];
      }
    }
  
    return Math.max(...informTime);
  }
  
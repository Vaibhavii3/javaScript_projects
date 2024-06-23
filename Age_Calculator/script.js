const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click",function(){
    const dob = new Date(dobInput.value);
    const ageInMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    resultDiv.innerHTML = `Your age is ${age} years.`;
})
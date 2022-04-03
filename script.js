document.querySelector("#confirm-btn").addEventListener("click", function () {
  let start = document.getElementById("start");
  let end = document.getElementById("end");

  let startValue = parseInt(start.value);
  let endValue = parseInt(end.value);

  let number = endValue - startValue;

  let passwordList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];

  let scholarArray = [];
  let emailArray = [];
  let passwordArray = [];

  let scholarGeneratorList = [];

  for (let i = startValue; i < endValue + 1; i++) {
    let password = "";
    for (let j = 0; j < 9; j++) {
      password += passwordList[Math.floor(Math.random() * passwordList.length)];
    }

    if (i < 10) {
      scholarArray.push("SCHOLAR 00" + i);
      emailArray.push("pathaxiesch+00" + i + "@gmail.com");
    } else if (i < 100) {
      scholarArray.push("SCHOLAR 0" + i);
      emailArray.push("pathaxiesch+0" + i + "@gmail.com");
    } else {
      scholarArray.push("SCHOLAR " + i);
      emailArray.push("pathaxiesch+" + i + "@gmail.com");
    }

    passwordArray.push(password);
  }

  //   console.log(scholarArray);
  //   console.log(emailArray);
  //   console.log(passwordArray);

  for (let i = 0; i < scholarArray.length; i++) {
    let array = [];

    array.push(scholarArray[i]);
    array.push(emailArray[i]);
    array.push(passwordArray[i]);

    scholarGeneratorList.push(array);
  }

  console.log(scholarGeneratorList);

  let csvContent = "data:text/csv;charset=utf-8,";

  scholarGeneratorList.forEach(function (rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "my_data.csv");
  document.body.appendChild(link); // Required for FF

  link.click();
});

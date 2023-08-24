
//Tổng các số dương trong mảng

function totalPositiveNumbers()
{
  document.getElementById('arrayNum1').style.display = 'none';
  document.getElementById('arrayNum2').style.display = 'none';
  document.getElementById('arrayNum3').style.display = 'none';
  document.getElementById('numChange').style.display ='none';
  document.getElementById('numChange2').style.display ='none';
  num1 = +document.getElementById('num1').value;
  num2 = +document.getElementById('num2').value;
  num3 = +document.getElementById('num3').value;
  num4 = +document.getElementById('num4').value;
  num5 = +document.getElementById('num5').value;

  var arr1 = [num1, num2, num3, num4, num5];
  total= 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0) {
      total += arr1[i];
    }
  }
  document.getElementById('result').innerText = `Kết quả : ${total}`;
}

// Đếm các số dương

function countPositiveNumbers()
{
  document.getElementById('arrayNum1').style.display = 'none';
  document.getElementById('arrayNum2').style.display = 'none';
  document.getElementById('arrayNum3').style.display = 'none';
  document.getElementById('numChange').style.display ='none';
  document.getElementById('numChange2').style.display ='none';
  num1 = +document.getElementById('num1').value;
  num2 = +document.getElementById('num2').value;
  num3 = +document.getElementById('num3').value;
  num4 = +document.getElementById('num4').value;
  num5 = +document.getElementById('num5').value;

  var arr1 = [num1, num2, num3, num4, num5];
  positiveCount = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0) {
      positiveCount ++;
    }
  }
  document.getElementById('result').innerText = `Kết quả : ${positiveCount}`;
}

// Tìm số nhỏ nhất trong mảng
function findMinArray()
{
  document.getElementById('arrayNum1').style.display = 'none';
  document.getElementById('arrayNum2').style.display = 'none';
  document.getElementById('arrayNum3').style.display = 'none';
  document.getElementById('numChange').style.display ='none';
  document.getElementById('numChange2').style.display ='none';
  num1 = +document.getElementById('num1').value;
  num2 = +document.getElementById('num2').value;
  num3 = +document.getElementById('num3').value;
  num4 = +document.getElementById('num4').value;
  num5 = +document.getElementById('num5').value;
  var arr1 = [num1, num2, num3, num4, num5];
  var min = arr1[0];
  for (var i = 0; i < arr1.length; i++) {
    if ( min > arr1[i]) {
      min = arr1[i];
    }
    }
  document.getElementById('result').innerText = `Kết quả : ${min}`;
}
// Tìm số dương nhỏ nhất trong mảng
function findMinPositiveArray()
{
  document.getElementById('arrayNum1').style.display = 'none';
  document.getElementById('arrayNum2').style.display = 'none';
  document.getElementById('arrayNum3').style.display = 'none';
  document.getElementById('numChange').style.display ='none';
  document.getElementById('numChange2').style.display ='none';
  num1 = +document.getElementById('num1').value;
  num2 = +document.getElementById('num2').value;
  num3 = +document.getElementById('num3').value;
  num4 = +document.getElementById('num4').value;
  num5 = +document.getElementById('num5').value;
  var arr1 = [num1, num2, num3, num4, num5];
  var min = arr1[0];
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] >=0){
      if (arr1[i] >=0 && min > arr1[i]) {
        min = arr1[i];
      }  
    }
  }
  document.getElementById('result').innerText = `Kết quả : ${min}`;
}


// Tìm số chẵn cuối cùng trong mảng
function findLastEven()
{
  document.getElementById('arrayNum1').style.display = 'none';
  document.getElementById('arrayNum2').style.display = 'none';
  document.getElementById('arrayNum3').style.display = 'none';
  document.getElementById('numChange').style.display ='none';
  document.getElementById('numChange2').style.display ='none';
  num1 = +document.getElementById('num1').value;
  num2 = +document.getElementById('num2').value;
  num3 = +document.getElementById('num3').value;
  num4 = +document.getElementById('num4').value;
  num5 = +document.getElementById('num5').value;
  var arr1 = [num1, num2, num3, num4, num5];
  var lastEven = null ;
  for (var i = arr1.length - 1; i >= 0; i--) {
    if (arr1[i] % 2 === 0) {
      lastEven = arr1[i];
      break;
    }
  }
  if (lastEven == null)
  {
    lastEven = -1;
  }
    document.getElementById('result').innerText = `Kết quả : ${lastEven}`;
}

// Đổi vị trí 2 số trong mảng

function changeArray()
{
  
  document.getElementById('arrayNum1').style.display = 'none';
  document.getElementById('arrayNum2').style.display = 'none';
  document.getElementById('arrayNum3').style.display = 'none';
  numChange =  document.getElementById('numChange');
  numChange2 =  document.getElementById('numChange2');
  numChange.style.display ='inline-block';
  numChange2.style.display ='inline-block';
  let pos1 = parseInt(numChange.value);
  let pos2 = parseInt(numChange2.value);
  num1 = +document.getElementById('num1').value;
  num2 = +document.getElementById('num2').value;
  num3 = +document.getElementById('num3').value;
  num4 = +document.getElementById('num4').value;
  num5 = +document.getElementById('num5').value;
  var arr1 = [num1, num2, num3, num4, num5];
  let resultElement = document.getElementById('result');

  if (isNaN(pos1) || isNaN(pos2)) {
    resultElement.innerText = 'Vui lòng nhập vị trí 2 số cần đổi từ 1-5';
    document.getElementById('button6').innerHTML=`Đổi vị trí`;
    return;
  }

  if (pos1 < 1 || pos1 > 5 || pos2 < 1 || pos2 > 5 || pos1 === pos2) {
    resultElement.innerText = 'Kết quả: Vị trí bạn nhập không hợp lệ';
    document.getElementById('button6').innerHTML=`Thử lại`;
    return;
  }

  pos1--;
  pos2--;

  let temp = arr1[pos1];
  arr1[pos1] = arr1[pos2];
  arr1[pos2] = temp;

  resultElement.innerText = 'Kết quả: ' + arr1;
}

//  Sắp xếp mảng theo thứ tự tăng dần
function bubbleSort()
{
  document.getElementById('arrayNum1').style.display = 'none';
  document.getElementById('arrayNum2').style.display = 'none';
  document.getElementById('arrayNum3').style.display = 'none';
  document.getElementById('numChange').style.display ='none';
  document.getElementById('numChange2').style.display ='none';
  num1 = +document.getElementById('num1').value;
  num2 = +document.getElementById('num2').value;
  num3 = +document.getElementById('num3').value;
  num4 = +document.getElementById('num4').value;
  num5 = +document.getElementById('num5').value;
  var arr1 = [num1, num2, num3, num4, num5];
  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = 0; j < arr1.length - 1 - i; j++) {
      if (arr1[j] > arr1[j + 1]) {
        let temp = arr1[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = temp;
      }
    }
  }
  document.getElementById('result').innerText = `Kết quả : ${arr1}`;
}

// Tìm số nguyên tố đầu tiên trong mảng
function findFirstPrime() {
  document.getElementById('arrayNum1').style.display = 'none';
  document.getElementById('arrayNum2').style.display = 'none';
  document.getElementById('arrayNum3').style.display = 'none';
  document.getElementById('numChange').style.display ='none';
  document.getElementById('numChange2').style.display ='none';
  num1 = +document.getElementById('num1').value;
  num2 = +document.getElementById('num2').value;
  num3 = +document.getElementById('num3').value;
  num4 = +document.getElementById('num4').value;
  num5 = +document.getElementById('num5').value;
  var arr1 = [num1, num2, num3, num4, num5];
  
  function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
  }
  
  var firstPrime = -1;
  for (var i = 0; i < arr1.length; i++) {
    if (isPrime(arr1[i])) {
      firstPrime = arr1[i];
      break;
    }
  }

  document.getElementById('result').innerText = `Kết quả : ${firstPrime}`;
}

// Nhập thêm 1 mảng số thực, đếm có bao nhiêu số nguyên 

function addArray()
{
  document.getElementById('numChange').style.display ='none';
  document.getElementById('numChange2').style.display ='none';
  document.getElementById('arrayNum1').style.display = 'inline-block';
  document.getElementById('arrayNum2').style.display = 'inline-block';
  document.getElementById('arrayNum3').style.display = 'inline-block';
  arrNum1 = +document.getElementById('arrayNum1').value;
  arrNum2 = +document.getElementById('arrayNum2').value;
  arrNum3 = +document.getElementById('arrayNum3').value;

  num1 = +document.getElementById('num1').value;
  num2 = +document.getElementById('num2').value;
  num3 = +document.getElementById('num3').value;
  num4 = +document.getElementById('num4').value;
  num5 = +document.getElementById('num5').value;
  var arr1 = [num1, num2, num3, num4, num5, arrNum1, arrNum2, arrNum3];
  var integerCount = 0;
  flag=false;
  for (var i = 0; i < arr1.length; i++) {
    if (Number.isInteger(arr1[i])) {
      integerCount++;
    }
  }
 document.getElementById('result').innerText = `Kết quả : ${integerCount}`;

}


// So sánh số lượng số âm và số lượng số dương

function compareNumber()
{
  document.getElementById('arrayNum1').style.display = 'none';
  document.getElementById('arrayNum2').style.display = 'none';
  document.getElementById('arrayNum3').style.display = 'none';
  document.getElementById('numChange').style.display ='none';
  document.getElementById('numChange2').style.display ='none';
  num1 = +document.getElementById('num1').value;
  num2 = +document.getElementById('num2').value;
  num3 = +document.getElementById('num3').value;
  num4 = +document.getElementById('num4').value;
  num5 = +document.getElementById('num5').value;

  var arr1 = [num1, num2, num3, num4, num5];
  positiveCount = 0;
  negativeCount = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0) {
      positiveCount ++;
    }
    else
    {
      negativeCount ++;
    }
    if (positiveCount > negativeCount)
    {
      result10 = 'Số lượng số dương nhiều hơn số lượng số âm';
    }
    else
    {
      result10 = 'Số lượng số âm nhiều hơn số lượng số dương';
    }
  }
  document.getElementById('result').innerText = `Kết quả : ${result10}`;
}

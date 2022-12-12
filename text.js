function checkBox(name) {
    var j = 0;
    var checkbox = document.getElementsByName(name);
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        j++;
        break;
      }
    }
    if (j == 0) return false;
    return true;
  }
  
  function check() {
    var q4 = checkBox("q4");
    if (q4 == false) {
      alert("第5题起码要选择一个选项");
      return false;
    }
  
    var q5 = checkBox("q5");
    if (q5 == false) {
      alert("第6题起码要选择一个选项");
      return false;
    }
  
    return true;
  }
  
  function getResult() {
    var result = 0;
    var a = 0,
      b = 0,
      c = 0,
      d = 0,
      e = 0;
      f = 0;
      g = 0;
      h = 0;
    var q1 = document.getElementsByName("q1");
    var q2 = document.getElementsByName("q2");
    var q3 = document.getElementsByName("q3");
    var q4 = document.getElementsByName("q4");
    var q5 = document.getElementsByName("q5");
    var q6 = document.getElementsByName("q6");
    var q7 = document.getElementsByName("q7");
    var q8 = document.getElementsByName("q8");
    for (var i = 0; i < q1.length; i++) {
      //第一题
      if (q1[i].checked) {
        if (i == 0) {
          a = 10;
        } else {
          a = 0;
        }
      }
    }
    for (var i = 0; i < q2.length; i++) {
      //第二题
      if (q2[i].checked) {
        if (i == 2) {
          b = 10;
        } else {
          b = 0;
        }
      }
    }
    for (var i = 0; i < q3.length; i++) {
      //第三题
      if (q3[i].checked) {
        if (i == 0) {
          c = 10;
        } else {
          c = 0;
        }
      }
    }

    for (var i = 0; i < q3.length; i++) {
        //第四题
        if (q6[i].checked) {
          if (i == 3) {
            f = 10;
          } else {
            f = 0;
          }
        }
      }

      for (var i = 0; i < q3.length; i++) {
        //第五题
        if (q7[i].checked) {
          if (i == 2) {
            f = 10;
          } else {
            f = 0;
          }
        }
      }

      for (var i = 0; i < q3.length; i++) {
        //第六题
        if (q8[i].checked) {
          if (i == 3) {
            f = 10;
          } else {
            f = 0;
          }
        }
      }
  
    for (var i = 0; i < q4.length; i++) {
      //第七题
      if (q4[i].checked) {
        if (i == 0) {
          d = 0;
        } else {
          d = 20;
        }
      }
    }
  
    for (var i = 0; i < q5.length; i++) {
      //第八题
      if (q5[i].checked) {
        if (i ==4) {
          e = 0;
        } else {
          e = 20;
        }
      }
    }
  
    var radioboxes = document.querySelectorAll("input[type=radio]");
    for (var i = 0; i < radioboxes.length; i++) {
      localStorage.setItem(radioboxes[i].value, radioboxes[i].checked); // 单选
    }
  
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    for (var i = 0; i < checkboxes.length; i++) {
      localStorage.setItem(checkboxes[i].value, checkboxes[i].checked); // 多选
    }
  
    result = a + b + c + d + e + f + g + h;
  
    var nameField = document.getElementById("name");
    var number = document.getElementById("phone");
    var email = document.getElementById("email");
    localStorage.setItem("result", result); 
    localStorage.setItem("username", nameField.value); 
    localStorage.setItem("phone", number.value); 
    localStorage.setItem("email", email.value); 
    if (result < 60) {
      alert("成绩是：" + result + "分" + "   你是假IKUN 小黑子一个");
    } else if (result <= 80) {
      alert("成绩是：" + result + "    还行 勉强算你是个IKUN");
    } else {
      alert("成绩是：" + result + "    真IKUN无疑了");
    }
  }
  
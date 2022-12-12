var totalTime = 300;
        function CountDown() {
            if (totalTime >= 0) {
                seconds = Math.floor(totalTime % 60);
                minutes = Math.floor(totalTime / 60 % 60);
                timerMsg = "问卷结束时间还有：" + (minutes >= 10 ? minutes : "0" + minutes) + "分" + (seconds >= 10 ? seconds : "0" + seconds) + "秒";
                document.all["timer"].innerHTML = timerMsg;
                totalTime == 60 && alert('抓紧时间，只剩下1分钟了');
                --totalTime;
            } else {
                clearInterval(timer);
                alert("OVER!");
                document.getElementById("submit").click()
                return
            }
        }
        timer = setInterval("CountDown()", 1000);

        var nameField = document.getElementById("name");
        var warning1 = document.getElementById("warning1");
        var number = document.getElementById("phone");
        var warning2 = document.getElementById("warning2");
        var email = document.getElementById("email");
        var warning3 = document.getElementById("warning3");

        nameField.onblur = function () {
            var reg = /^[\u4E00-\u9FA5]{2,4}$/;
            if (reg.test(nameField.value)) {
                warning1.style.display = "none";
            } else {
                warning1.style.display = "inline";
            }
        }
        number.onblur = function () {
            var reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
            if (reg.test(number.value)) {
                warning2.style.display = "none";
            } else {
                warning2.style.display = "inline";
            }
        }
        email.onblur = function () {
            var reg = /\w+\w+\.[a-zA-Z]{2,4}/;
            if (reg.test(email.value)) {
                warning3.style.display = "none";
            } else {
                warning3.style.display = "inline";
            }
        }
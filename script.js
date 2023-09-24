        let isNegative = false;

        function toggleNegative() {
            let displayValue = display.value;

            if (isNegative) {
                display.value = displayValue.replace("-", "");
            } else {
                display.value = "-" + displayValue;
            }

            isNegative = !isNegative;
        }


        let decimalAdded = false;

        function appendToDisplay(value) {
            if (value === "." && decimalAdded) {
                return;
            }

            if (value === "+" || value === "-" || value === "*" || value === "/") {
                decimalAdded = false;
            }

            display.value += value;

            if (value === ".") {
                decimalAdded = true;
            }
        }

        display.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                calculateResult();
            }
        });
        
        function calculateResult() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        }


        function backspace() {
            let currentValue = display.value;
            display.value = currentValue.slice(0, -1);
        }

        function clearDisplay() {
            display.value = "";
            decimalAdded = false;
        }
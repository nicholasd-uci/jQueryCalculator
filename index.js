// jQuery

        $(document).ready(function () {

            let firstNum = ''
            let secondNum = ''
            let operator = ''
            let isOperator = false
            let isResult = false

            $('.number').click(function () {
                if (!isResult) {
                    if (!isOperator) {
                        firstNum += $(this).val()
                        $('#first-number').text(firstNum)
                    } else {
                        secondNum += $(this).val()
                        $('#second-number').text(secondNum)
                    }
                }
            })

            $('.operator').click(function () {
                if (firstNum.length > 0 && !isResult) {
                    isOperator = true
                    operator = $(this).val()
                    $('#operator').text(operator)
                }
            })

            $('.equal').click(function () {
                let a = parseInt(firstNum)
                let b = parseInt(secondNum)
                isResult = true
                switch (operator) {
                    case '+':
                        firstNum = a + b
                        $('#result').text(a + b)
                        break
                    case '-':
                        firstNum = a - b
                        $('#result').text(a - b)
                        break
                    case '*':
                        firstNum = a * b
                        $('#result').text(a * b)
                        break
                    case '/':
                        firstNum = a / b
                        $('#result').text(a / b)
                        break
                    case '**':
                        firstNum = a ** b
                        $('#result').text(a ** b)
                        break
                }
            })

            $('.clear').click(function () {
                firstNum = ''
                secondNum = ''
                operator = ''
                isOperator = false
                isResult = false
                $('#first-number').text('')
                $('#operator').text('')
                $('#second-number').text('')
                $('#result').text('')
            })
        })

  
import {mount} from "@vue/test-utils";
import Calculator from "../components/Calculator";


describe('Calculator Test', () => {
    it('sum test', () => {
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name="num1"]')
        operand1Input.setValue('100')
        const operand2Input = wrapper.find('input[name="num2"]')
        operand2Input.setValue('100')
        const sumOperationBtn = wrapper.find('button[name="+"]')
        sumOperationBtn.trigger('click')
        expect(wrapper.vm.resultMsg).toBe(200)

    }),
        it('diff test', () => {
            const wrapper = mount(Calculator)
            const operand1Input = wrapper.find('input[name="num1"]')
            operand1Input.setValue('15')
            const operand2Input = wrapper.find('input[name="num2"]')
            operand2Input.setValue('10')

            const difOperationBtn = wrapper.find('button[name="-"]')
            difOperationBtn.trigger('click')
            expect(wrapper.vm.resultMsg).toBe(5)

        }),
        it('multiply test', () => {
            const wrapper = mount(Calculator)
            const operand1Input = wrapper.find('input[name="num1"]')
            operand1Input.setValue('15')
            const operand2Input = wrapper.find('input[name="num2"]')
            operand2Input.setValue('10')
            const multOperationBtn = wrapper.find('button[name="*"]')
            multOperationBtn.trigger('click')
            expect(wrapper.vm.resultMsg).toBe(150)

        }),
        it('division test', () => {
            const wrapper = mount(Calculator)
            const operand1Input = wrapper.find('input[name="num1"]')
            operand1Input.setValue('15')
            const operand2Input = wrapper.find('input[name="num2"]')
            operand2Input.setValue('10')

            const divisOperationBtn = wrapper.find('button[name="/"]')
            divisOperationBtn.trigger('click')
            expect(wrapper.vm.resultMsg).toBe(1.5)

            operand1Input.setValue('15')
            operand2Input.setValue('0')
            divisOperationBtn.trigger('click')
            expect(wrapper.vm.errorMsg).toEqual("Делить на 0 нельзя")

            operand1Input.setValue('0')
            operand2Input.setValue('0')
            divisOperationBtn.trigger('click')
            expect(wrapper.vm.errorMsg).toEqual("0/0 - дает неизвестность")


        }),
        it('degree test', () => {
            const wrapper = mount(Calculator)
            const operand1Input = wrapper.find('input[name="num1"]')
            operand1Input.setValue('3')
            const operand2Input = wrapper.find('input[name="num2"]')
            operand2Input.setValue('2')

            const degreeOperationBtn = wrapper.find('button[name="^"]')
            degreeOperationBtn.trigger('click')
            expect(wrapper.vm.resultMsg).toBe(9)

            operand1Input.setValue('0')
            operand2Input.setValue('-1')
            degreeOperationBtn.trigger('click')
            expect(wrapper.vm.errorMsg).toEqual("Ноль возводится только в положительную степень")

            operand1Input.setValue('-1')
            operand2Input.setValue('-1')
            degreeOperationBtn.trigger('click')
            expect(wrapper.vm.errorMsg).toEqual("Отрицательные числа можно возводить только в целочисленную степень")



        }),
        it('emptyNum test', ()=>{
            const wrapper = mount(Calculator)
            const operand1Input = wrapper.find('input[name="num1"]')
            operand1Input.setValue('')
            const divIntOperationBtn = wrapper.find('button[name="+"]')
            divIntOperationBtn.trigger('click')
            expect(wrapper.vm.errorMsg).toEqual("Введите оба числа")

        })
        it('divInt test', () => {
            const wrapper = mount(Calculator)
            const operand1Input = wrapper.find('input[name="num1"]')
            operand1Input.setValue('15')
            const operand2Input = wrapper.find('input[name="num2"]')
            operand2Input.setValue('10')
            const divIntOperationBtn = wrapper.find('button[name="r/"]')
            divIntOperationBtn.trigger('click')
            expect(wrapper.vm.resultMsg).toBe(1)

            operand1Input.setValue('15')
            operand2Input.setValue('0')
            divIntOperationBtn.trigger('click')
            expect(wrapper.vm.errorMsg).toEqual("Делить на 0 нельзя")

            operand1Input.setValue('0')
            operand2Input.setValue('0')
            divIntOperationBtn.trigger('click')
            expect(wrapper.vm.errorMsg).toEqual("0/0 - дает неизвестность")

        }),
        it('checkbox test', () => {
            const wrapper = mount(Calculator)
            const checkboxKeyboard = wrapper.find('input[name="keyboard"]')
            checkboxKeyboard.setChecked()
            expect(wrapper.vm.openKeyboard).toBe(true)

            let keyboardWindowButton = wrapper.find('button[name="1"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num1).toBe(1)

            keyboardWindowButton = wrapper.find('button[name="2"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num1).toBe(12)

            keyboardWindowButton = wrapper.find('button[name="3"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num1).toBe(123)

            keyboardWindowButton = wrapper.find('button[name="4"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num1).toBe(1234)

            keyboardWindowButton = wrapper.find('button[name="5"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num1).toBe(12345)

            keyboardWindowButton = wrapper.find('button[name="6"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num1).toBe(123456)

            keyboardWindowButton = wrapper.find('button[name="7"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num1).toBe(1234567)

            keyboardWindowButton = wrapper.find('button[name="8"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num1).toBe(12345678)

            keyboardWindowButton = wrapper.find('button[name="9"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num1).toBe(123456789)

            keyboardWindowButton = wrapper.find('button[name="0"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num1).toBe(1234567890)

            keyboardWindowButton = wrapper.find('button[name="del"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num1).toBe(123456789)

        }),

        it('radio test', () => {
            const wrapper = mount(Calculator)
            const radioBtn = wrapper.find('input[value="num2"]')
            radioBtn.setChecked()
            expect(wrapper.vm.currInput).toBe('num2')

            let keyboardWindowButton = wrapper.find('button[name="del"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num2).toBe(0)

            keyboardWindowButton = wrapper.find('button[name="9"]')
            keyboardWindowButton.trigger('click')
            expect(wrapper.vm.num2).toBe(9)

        })

})
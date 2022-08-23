(() => {
    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumberFucntion: addTwoNumbers;

    addNumberFucntion = (a: number, b: number) => {
        return a+b;
    }
})()
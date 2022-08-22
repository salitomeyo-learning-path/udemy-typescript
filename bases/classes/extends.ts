(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado!');
        }

        protected getFullName(): string {
            return `${ this.name } ${ this.realName }`
        }
    }


    class Xmen extends Avenger {

    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    console.log(wolverine);

    class Xmen2 extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super(name, realName);
            console.log('Constructor Xmen2 llamado')
        }

        getFullNameFromXmen2() {
            console.log( super.getFullName() );
        }
    }

    const wolverine2 = new Xmen('Wolverine', 'Logan');
    console.log(wolverine2);


    // const newAvenger = new Avenger('Hola', 'mundo');
    // newAvenger.getFullName()

})()
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
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super(name, realName);
            console.log('Constructor Xmen2 llamado')
        }

        get fullName(): string {
            return `${ this.name } - ${ this.fullName }`;
        }

        set fullName(name: string) {
            this.name = this.name
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine.fullName);

    wolverine.fullName = 'Pepe';
    console.log(wolverine.fullName);
    
})()